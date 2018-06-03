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
import config from '../config'

@observer class Index extends Component {
  componentDidMount() {
    if (this.props.store.user.name === null) {
      this.props.store.navigate('login', { type: 'replace' })
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }


  render() {
    return (
      <Content padder>

        <Button rounded small iconCenter transparent style={styles.help} onLongPress={() => {
          this.props.store.setUser({
            name: null,
            info: {
              nick: null,
              email: null,
              gender: null,
              birthday: null,
              biography: null,
              contact: []
            }
          })
          fetch(`${config.remote}/logout`, {
            method: 'GET'
          })
        }} onPress={() => this.props.store.navigate('help', { type: 'push' })}>
          <Icon name='md-help-circle' />

        </Button>
        <Thumbnail large style={styles.contentImg} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
        {
          this.props.store.editMode === false ?
            [
              <Text key={0} style={styles.imformation_title}> 用户名 </Text>,
              <Text key={1} style={styles.imformation_con}> Unique Hackaday </Text>,
              <Text key={2} style={styles.imformation_title}> 邮箱 </Text>,
              <Text key={3} style={styles.imformation_con}> Hackaday@unique.com </Text>,
              <Text key={4} style={styles.imformation_title}> 地点 </Text>,
              <Text key={5} style={styles.imformation_con}> 武汉 </Text>
            ]
            :
            [
              <Text key={0} style={styles.imformation_title}> 用户名 </Text>,
              <Card key={1} style={styles.imformation_card}>
                <Input> </Input>
              </Card>,
              <Text key={2} style={styles.imformation_title}> 邮箱 </Text>,
              <Card key={3} style={styles.imformation_card}>
                <Input> </Input>
              </Card>,
              <Text key={4} style={styles.imformation_title}> 地点 </Text>,
              <Card key={5} style={styles.imformation_card}>
                <Input> </Input>
              </Card>]

        }

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
  setting_fab: {
    height: 30,
    width: 30,


  },
  avatar: {
    marginRight: 6
  },

  help: {
    position: "absolute",
    //height:30,
    //width:80,
    //paddingHorizontal:-10,
    top: 8,
    right: 20

  },

  imformation_title: {
    fontSize: 23


  },
  imformation_con: {
    fontSize: 20,
    marginBottom: 14
  },
  contentImg: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 20

  },



  imformation_card: {
  },
  action_button: {
    color: '#8e8e8e'
  }
})
