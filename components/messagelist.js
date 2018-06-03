import React, { Component } from 'react';
import { ListView, AsyncStorage, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Card, CardItem, Left, Thumbnail, Body } from 'native-base';
import { observer } from 'mobx-react'


function getNewMessage() {

}

async function saveMessage(friend, message, who) {
  try {
    const value = await AsyncStorage.getItem(friend);
    if (value === null) {
      await AsyncStorage.setItem(friend + ':1', who + ':' + message);
      await AsyncStorage.setItem(friend, 1);
    }
    else {
      await AsyncStorage.setItem(friend + ':' + (value + 1), who + ':' + message);
      await AsyncStorage.setItem(friend, value + 1);
    }
  } catch (error) {
    // Error retrieving data
  }
}

async function getLastMessage(friend) {
  try {
    const value = await AsyncStorage.getItem(friend);
    if (value === null) {
      var mes = await AsyncStorage.getItem(friend + ':' + value).split(':');
      return mes[1];
    }
    else {
      return null;
    }
  } catch (error) {
    // Error retrieving data
  }
}

const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

@observer class MessageList extends Component {
  constructor(props) {
    super(props);
    // this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
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