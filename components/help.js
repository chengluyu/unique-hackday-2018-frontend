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
  View,
  Fab,
  Input
} from 'native-base'
import TextSeparator from './assets/textSeparator'
import { StyleSheet, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { observer } from 'mobx-react'

@observer class Index extends Component {
  componentWillUnmount() {
    if (this.props.store.sceneMark === 'help')
      this.props.store.pop()
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
            <Title>使用说明</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Icon name='apps' />
              <Text>发现动态</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  “发现动态”是推荐与你有相同兴趣爱好或者其他生活习惯(你可以在设置界面设置哪些信息为公开),
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Icon name='search' />
              <Text>推荐好友</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  “推荐好友”是根据您的兴趣爱好及生活习惯等各种您同意公开的信息为您推荐适合与您成为好友的人。同时，也可以选择每项信息的贡献度
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Icon name='camera' />
              <Text>拍照</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  通过“拍照”，您可以及时记录下您想要寻找的人或者想要记录的生活动态，并选择上网匹配或分享等
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Icon name='chatboxes' />
              <Text>“聊天”</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  在“聊天”界面，您可以与您之前发起对话的人进行交流，并且可以随时选择删除对话，同时将失去和他（他）的)联系，也可添加为星级好友
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Icon name='person' />
              <Text>“个人信息”</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  您可以在“个人信息”界面编辑您自己的相关信息，并可以设置哪些信息为(非)公开数据
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default Index