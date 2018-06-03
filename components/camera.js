import React, { Component } from 'react';
import { ListView, AsyncStorage, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Card, CardItem, Left, Thumbnail, Body } from 'native-base';
import { observer } from 'mobx-react'
import { RNCamera } from 'react-native-camera'


@observer class MessageList extends Component {
  render() {
    return (
      <Content padder>
        <List
          dataSource={(new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })).cloneWithRows(this.state.listViewData)}
          renderRow={data =>
            <TouchableOpacity onPress={() => {
              this.props.store.navigate('chat', { type: 'push', userid: data })
              this.props.store.talkTo(data)
            }}>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                    <Body>
                      <Text>{data}</Text>
                      <Text note>易建联</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>}
          renderRightHiddenRow={(data, secId, rowId, rowMap) =>
            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
              <Icon active name="trash" />
            </Button>}
          rightOpenValue={- 55}
        />
      </Content >
    );
  }
}

export default MessageList