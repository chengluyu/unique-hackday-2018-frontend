import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { observer } from 'mobx-react'

@observer class FriendList extends Component {
  componentDidMount() {
    if (this.props.store.user.name === null) {
      this.props.store.navigate('login')
    }
  }

  render() {
    return (
      <Content padder>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
              <Body>
                <Text>布兰琪</Text>
                <Text note>认识爱丽丝、查理、保罗。也去过圣彼得堡。喜欢音乐</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
export default FriendList