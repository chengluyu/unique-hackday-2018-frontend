import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Card, CardItem, Left, Thumbnail, Body, Input, Title, Right, Footer, Toast } from 'native-base';
import config from '../config';
import { observer } from 'mobx-react'

@observer class ChatView extends Component {
  constructor(props) {
    super(props);
    this.poolingTimer = null;
    this.poolingInterval = 3000;
    this.messages = new Map(); // message for all users
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      msgPool: '',
      l: this.props.store.talkList
    }
  }

  componentDidMount() {
    this.beginPooling()
  }

  componentWillUnmount() {
    this.endPooling()
    if (this.props.store.sceneMark === 'chat')
      this.props.store.pop()

  }

  /**
   * Send message to specific user
   * @param {String} destination target user ID
   * @param {String} message the message
   */
  send(destination, message) {
    this.props.store.appendTalkList({
      from: this.props.store.user.name,
      destination: destination,
      time: +new Date(),
      content: message
    })
    fetch(config.remote + '/chat/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ destination, message })
    }).then(async response => {
      const result = await response.json();
      if (result.code !== 0) {
        Toast.show({
          text: `错误<${(result.data && result.data.err) || result.code}>`
        })
      } else {
        console.log('Message successfully sent');
      }
    }).catch(error => {
      Toast.show({
        text: `网络异常，发送失败。<${error}>`
      })
    })
  }

  beginPooling() {
    if (this.poolingTimer === null) {
      this.poolingTimer = setInterval(() => {
        fetch(config.remote + '/chat/fetch', {
          method: 'GET'
        }).then(async response => {
          const result = await response.json();
          if (result.code === 0) {
            const unreadMessages = result.data;
            // const messageSample = [
            //   {
            //     from: String, // from user ID
            //     to: String, // to user ID
            //     time: Date, // sent time
            //     content: String // text content
            //   }
            // ]
            // show unread messages
            unreadMessages.forEach(msg => {
              if (msg.to === this.props.store.user.name) {
                // handle self message
                this.props.store.appendTalkList(msg)
              }
            });
          } else {
            Toast.show({
              text: `服务器异常<Code ${result.code}>`
            })
          }
        }).catch(e => {
          Toast.show({
            text: '网络异常，将停止自动刷新。'
          })
          this.endPooling()
        })
      }, this.poolingInterval);
    }
  }

  endPooling() {
    if (this.poolingTimer !== null)
      clearInterval(this.poolingTimer);
    this.poolingTimer = null;
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.store.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.userid || '聊天'}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <List dataArray={this.props.store.talkList}
            renderRow={data =>
              <Text>{data}</Text>}
          />
        </Content>
        <Footer style={styles.footer}>
          <Input value={this.state.msgPool} placeholder='来说点什么' onChangeText={v => this.setState({ msgPool: v })}></Input>
          <Button onPress={
            () => {
              if (this.state.msgPool) {
                this.send(this.props.userid, this.state.msgPool)
                this.beginPooling()
                this.setState({
                  msgPool: ''
                })
              } else {
                Toast.show({
                  text: '不允许发送空白内容。'
                })
              }
            }
          }><Text>发送</Text></Button>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#e8e8e8',
    alignItems: 'center'
  }
})

export default ChatView