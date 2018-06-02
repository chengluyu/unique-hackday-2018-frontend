/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Root, Footer } from 'native-base';
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import Index from './components/index'
import Search from './components/search'
import Store from './store'
import Login from './components/login'
import Tab from './components/tab'

export default class App extends Component {
  render() {
    let sceneList = [
      {
        key: 'index',
        component: Index
      },
      {
        key: 'login',
        component: Login,
        index: styles.zStyle
      }
    ]
    let Scenes = sceneList.map((a, i) => {
      return <Scene sceneStyle={a.style || styles.defaultStyle} key={a.key} component={a.component} title={a.name || a.key} />
    })

    return (
      <Root>
        <Router store={Store} type={ActionConst.PUSH} hideNavBar={true}>
          <Scene key='root'>
            {
              Scenes
            }
          </Scene>
        </Router>
        <Footer style={styles.dock}>
        </Footer>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  dock: {
    height: 70,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  defaultStyle: {
    zIndex: 1
  },
  zStyle: {
    zIndex: 2
  }
});