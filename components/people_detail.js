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

        <Button iconLeft postion="topRight" style={styles.help}>
        <Icon name='md-help-circle'/>
          <Text>帮助</Text>
        </Button>
        <Thumbnail large style={styles.contentImg} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
        {
          this.props.store.editMode === false ?
            [
              <Text style={styles.imformation_title}> 用户名 </Text>,
              <Text style={styles.imformation_con}> Unique Hackaday </Text>,
              <Text style={styles.imformation_title}> 邮箱 </Text>,
              <Text style={styles.imformation_con}> Hackaday@unique.com </Text>,
              <Text style={styles.imformation_title}> 地点 </Text>,
              <Text style={styles.imformation_con}> 武汉 </Text>
            ]
            :
            [
              <Text style={styles.imformation_title}> 用户名 </Text>,
              <Card style={styles.imformation_card}>
                <Input> </Input>
              </Card>,
              <Text style={styles.imformation_title}> 邮箱 </Text>,
              <Card style={styles.imformation_card}>
                <Input> </Input>
              </Card>,
              <Text style={styles.imformation_title}> 地点 </Text>,
              <Card style={styles.imformation_card}>
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
    height:10,
    width:30
    
  },

  imformation_title: {
    fontSize: 20


  },
  imformation_con: {
    fontSize: 20,
    marginBottom: 14
  },
  contentImg: {
    alignSelf:'center',
    marginBottom: 30,
    marginTop: 20
    
  },

  imformation_card: {
  },
  action_button: {
    color: '#8e8e8e'
  }
})
