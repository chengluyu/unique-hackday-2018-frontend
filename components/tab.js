import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
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
  ListItem
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import { observer } from 'mobx-react'

@observer class Index extends Component {

  render() {
    if (this.props.store.sceneMark == 'login')
      return null
    else
      return (
        <Footer style={styles.dock}>
        </Footer>
      )
  }
}

export default Index

const styles = StyleSheet.create({
  dock: {
    height: 70,
    backgroundColor: '#2c2c2c'
  }
});