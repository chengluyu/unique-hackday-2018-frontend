/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Root } from 'native-base';
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import { StyleSheet, Dimensions } from 'react-native'

import Index from './components/index'
import Search from './components/search'
import Store from './store'
import Login from './components/login'
import Tab from './components/tab'
import FriendList from './components/friendlist'
import Profile from './components/profile'
import MessageList from './components/messagelist'
import HelpPage from './components/help'
import Chat from './components/chat'
import People from './components/people_im_ui'

export default class App extends Component {
  componentDidMount() {
    this.updateWindowDimensions();
  }

  onLayout() {
    Store.updateWindowSize([Dimensions.get('window').width, Dimensions.get('window').height])
  }

  updateWindowDimensions() {
    Store.updateWindowSize([Dimensions.get('window').width, Dimensions.get('window').height])
  }

  render() {
    let sceneList = [
      {
        key: 'index',
        component: Index
      },
      {
        key: 'friendlist',
        component: FriendList
      },
      {
        key: 'profile',
        component: Profile
      },
      {
        key: 'messagelist',
        component: MessageList
      },
      {
        key: 'help',
        component: HelpPage
      },
      {
        key: 'chat',
        component: Chat
      },
      {
        key: 'peopledetail',
        component: People
      },
      {
        key: 'login',
        component: Login
      }
    ]
    let Scenes = sceneList.map((a, i) => {
      return <Scene key={a.key} component={a.component} title={a.name || a.key} />
    })

    return (
      <Root>
        <Router store={Store} hideNavBar={true}>
          <Scene key='root'>
            {
              Scenes
            }
          </Scene>
        </Router>
        <Tab store={Store} />
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  dock: {
    height: 70,
    maxHeight: 70,
    minHeight: 70,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});