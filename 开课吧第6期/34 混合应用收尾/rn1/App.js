import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Router, Scene, Lightbox} from 'react-native-router-flux';

import Startup from './components/Startup';
import List from './components/List';
import AddDialog from './components/AddDialog';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Lightbox>
          <Scene key="root">
            <Scene key="startup" component={Startup} hideNavBar={true} initial={true} />
            <Scene key="list" component={List} hideNavBar={true} />
          </Scene>
          <Scene key="adddialog" component={AddDialog} hideNavBar={true} />
        </Lightbox>
      </Router>
    );
  }
}
