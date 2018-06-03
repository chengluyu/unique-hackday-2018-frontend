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
  //   componentDidMount() {
  //     if (this.props.store.user.name === null) {
  //       this.props.store.navigate('login', { type: 'replace' })
  //     }
  //   }
  componentWillUnmount() {
    if (this.props.store.sceneMark === 'peopledetail')
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
            <Title>{this.props.userid || '聊天'}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Thumbnail large style={styles.contentImg} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
              </Body>

            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.name}>{this.props.userid}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.imformation} > 复刻齐划一  </Text>
              </Body>
            </CardItem>
            <CardItem large footer bordered style={styles.foot}>

              <Button transparent onPress={() => this.props.store.navigate('chat', { type: 'push', userid: this.props.userid })} style={styles.iconleft}>
                <Icon large name="chatboxes" />
              </Button>
              <Button transparent style={styles.iconright}>
                <Icon large name="md-star-outline" />
              </Button>

            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
export default Index

const styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
    marginBottom: 15

  },
  imformation: {
    alignSelf: 'center'

  },

  iconleft: {
    position: "absolute",
    left: 55,
    top: 5,
    bottom: 5
  },
  iconright: {
    position: "absolute",
    right: 55,
    top: 5,
    bottom: 5
  },
  foot: {
    height: 50
  },
  contentImg: {
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 20
  }
})
