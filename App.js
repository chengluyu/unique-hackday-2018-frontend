/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Root } from 'native-base';
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import Index from './components/index'
import Search from './components/search'
import Store from './store'

export default class App extends Component {
  render() {
    let sceneList = [
      {
        key: 'index',
        component: Index
      },
      {
        key: 'search',
        component: Search
      }
    ]
    let Scenes = sceneList.map((a, i) => {
      return <Scene key={a.key} component={a.component} title={a.name || a.key} />
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
      </Root>
    );
  }
}

