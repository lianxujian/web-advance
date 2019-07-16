import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Button} from 'react-native';
import {calc} from '../utils/common';
import {Actions} from 'react-native-router-flux';

export default class List extends Component{
  constructor(...args){
    super(...args);

    this.state={
      accounts: []
    };

    this.a=0;
  }

  totalIncome(){
    let sum=0;
    this.state.accounts.filter(account=>account.income).forEach(({amount})=>{
      sum+=Number(amount);
    });

    return sum.toFixed(2);
  }
  totalOutcome(){
    let sum=0;
    this.state.accounts.filter(account=>!account.income).forEach(({amount})=>{
      sum+=Number(amount);
    });

    return sum.toFixed(2);
  }

  async loadData(){
    let res=await fetch('http://192.168.0.102:8080/list');
    let data=await res.json();

    this.setState({
      accounts: data
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    return JSON.stringify(this.state.accounts)!=JSON.stringify(nextState.accounts);
  }

  async componentDidUpdate(){
    await this.loadData();
  }

  async componentDidMount(){
    await this.loadData();
  }

  fn(){
    Actions.push('adddialog', {});
  }

  render(){
    this.a++;
    return (
      <View style={{backgroundColor: '#FFF', height: '100%'}}>
        <Text>{this.a}</Text>
        <View style={styles.header}>
          <Image source={require('../assets/title.png')} style={{width: calc(172), height: calc(87)}} />
        </View>
        <View style={{backgroundColor: '#fada63', height: calc(136), flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.smallTxt}>2019年</Text>
            <Text style={styles.bigTxt}>1月</Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.smallTxt}>收入</Text>
            <Text style={styles.bigTxt}>{this.totalIncome()}</Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.smallTxt}>支出</Text>
            <Text style={styles.bigTxt}>{this.totalOutcome()}</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={this.state.accounts}
            keyExtractor={data=>data.ID+''}
            renderItem={({item, index})=>(
              <View>
                <View style={{flexDirection: 'row', height: calc(109)}}>
                  <Text style={{flex: 1, lineHeight: calc(109)}}>{item.title}</Text>
                  <Text style={{width: calc(100), textAlign: 'right', lineHeight: calc(109)}}>{item.income?'+':'-'}{item.amount}</Text>
                </View>
                <View style={{height: 1, backgroundColor: '#e9e9e9'}} />
              </View>
            )}
          />
        </View>
        <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%'}}>
          <Button title="记账" color="#fada63" onPress={this.fn.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  header: {backgroundColor: '#fada63', height: calc(87), flexDirection: 'row', justifyContent: 'center'},
  smallTxt: {fontSize: calc(23), color: '#333'},
  bigTxt: {fontSize: calc(44), color: '#000'},
});
