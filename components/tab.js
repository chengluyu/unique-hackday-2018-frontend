import React, { Component } from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Fab,
  Input
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import { observer } from 'mobx-react'
import ExtraDimensions from 'react-native-extra-dimensions-android'

@observer class Index extends Component {
  componentDidMount() {
    (async () => {
      this.props.store.setUser(JSON.parse(await AsyncStorage.getItem('@Hackintosh2018:config:user')))
    })();
    if (this.props.store.user.name === null) {
      this.props.store.navigate('login')
    }
  }

  render() {
    let styles = StyleSheet.create({
      dock: {
        height: 70,
        backgroundColor: '#2c2c2c'
      },
      icon: {
        color: '#f8f8f8'
      },
      floatBtn: {
        position: 'absolute',
        backgroundColor: '#40bcd8',
        right: this.props.store.windowSize[0] / 2 - 50,
        bottom: 20
      },
      editBtn: {
        position: 'absolute',
        backgroundColor: '#4fd840',
        right: this.props.store.windowSize[0] / 2 - 50,
        bottom: 20
      }
    });

    if (this.props.store.sceneMark === 'login' || this.props.store.sceneMark === 'chat')
      return null
    else
      return (
        [
          <Footer key={0} style={styles.dock}>
            <FooterTab style={styles.dock}>
              {
                [
                  {
                    name: 'index',
                    icon: 'apps'
                  }, {
                    name: 'friendlist',
                    icon: 'search'
                  },
                  {
                    name: this.props.store.sceneMark,
                    icon: null
                  },
                  {
                    name: 'messagelist',
                    icon: 'chatboxes'
                  },
                  {
                    name: 'profile',
                    icon: 'person'
                  }
                ].map((x, i) => (
                  <Button key={i} onPress={() => this.props.store.navigate(x.name)}>
                    <Icon name={x.icon} style={styles.icon} />
                  </Button>
                ))
              }
            </FooterTab>
          </Footer>,
          <Fab key={1} style={this.props.store.editMode ? styles.editBtn : styles.floatBtn} onPress={() => { this.props.store.toggleButton() }}>
            <Icon name={this.props.store.sceneMark === 'profile' ? this.props.store.editMode ? 'checkmark' : 'create' : 'camera'} />
          </Fab>
        ]
      )
  }
}

export default Index

