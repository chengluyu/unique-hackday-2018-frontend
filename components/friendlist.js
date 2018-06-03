import React, { Component } from 'react';
import { Image, ListView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, List } from 'native-base';
import { observer } from 'mobx-react'


@observer class FriendList extends Component {
  componentDidMount() {
    if (this.props.store.user.name === null) {
      this.props.store.navigate('login')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      listViewData: [
        'Simon Mignolet',
        'Nathaniel Clyne',
        'Dejan Lovren',
        'Mama Sakho',
        'Alberto Moreno',
        'Emre Can',
        'Joe Allen',
        'Phil Coutinho',
      ],
    };
  }

  render() {
    return (
      <Content padder>
        <List
          dataArray={this.state.listViewData}
          renderRow={data =>
            <TouchableOpacity onPress={() => this.props.store.navigate('peopledetail', { type: 'push', userid: data })}>
              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                    <Body>
                      <Text>{data}</Text>
                      <Text note>认识爱丽丝、查理、保罗。也去过圣彼得堡。喜欢音乐</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>}
        />
      </Content>
    );
  }
}
export default FriendList