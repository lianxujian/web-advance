import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Startup from './components/Startup';
import List from './components/List';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="startup" component={Startup} hideNavBar={true} />
          <Scene key="list" component={List} hideNavBar={true} initial={true} />
        </Scene>
      </Router>
    );
  }
}
