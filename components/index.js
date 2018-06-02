import React, { Component } from 'react'
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
  Card,
  CardItem,
  Thumbnail,
  View
} from 'native-base'
import TextSeparator from './assets/textSeparator'
import { StyleSheet, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { observer } from 'mobx-react'

@observer class Index extends Component {
  componentDidMount() {
    if (this.props.store.user.name === null) {
      this.props.store.navigate('login')
    }
  }

  render() {
    return (
      <Content padder>
        <List dataArray={Array(5).fill(0)} renderRow={() => {
          return (
            <Card>
              <CardItem style={styles.header}>
                <Thumbnail style={styles.avatar} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
                <Text>查理在知乎上分享了</Text>
              </CardItem>
              <CardItem>
                <Thumbnail square style={styles.contentImg} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
              </CardItem>
              <TextSeparator />
              <CardItem>
                <Button transparent>
                  <Icon style={styles.action_button} name="thumbs-up" />
                </Button>
                <Button transparent>
                  <Icon style={styles.action_button} name="chatbubbles" />
                </Button>
                <Button transparent>
                  <Icon style={styles.action_button} name="md-star" />
                </Button>
              </CardItem>
            </Card>
          )
        }} />
      </Content>
    )
  }
}

export default Index

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  avatar: {
    marginRight: 8
  },
  contentImg: {
    width: '100%',
    height: 125,
    resizeMode: 'cover'
  },
  action_button: {
    color: '#8e8e8e'
  }
})