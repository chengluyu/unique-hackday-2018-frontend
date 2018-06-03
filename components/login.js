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
  Thumbnail,
  Text,
  Form,
  Item,
  Label,
  Input,
  Card
} from 'native-base'
import { StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { observer } from 'mobx-react'
import config from '../config'


@observer class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      username: '',
      password: '',
      email: '',
      mode: 'login'
    }

    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
    this.check = this.check.bind(this)
  }

  login() {
    fetch(`${config.remote}/login?username=${encodeURIComponent(this.state.username)}&password=${encodeURIComponent(this.state.password)}`, {
      method: 'GET'
    }).then(async v => {
      let content = await v.text()
      let json = JSON.parse(content)
      if (json.code) {
        this.setState({
          msg: content
        })
      } else {
        this.props.store.setUser({
          name: json.data.userinfo.username,
          info: {
            nick: json.data.userinfo.username,
            email: json.data.userinfo.email,
            gender: null,
            birthday: null,
            biography: null,
            contact: []
          }
        })
      }
    })
  }

  register() {
    fetch(`${config.remote}/reg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `username=${encodeURIComponent(this.state.username)}&password=${encodeURIComponent(this.state.password)}&email=${encodeURIComponent(this.state.email)}`
    }).then(async v => {
      let json = await v.json()
      if (json.code) {
        this.setState({
          msg: (json.data && json.data.err) || json.code
        })
      } else {
        this.props.store.setUser({
          name: this.state.username,
          info: {
            nick: this.state.username,
            email: this.state.email,
            gender: null,
            birthday: null,
            biography: null,
            contact: []
          }
        })
      }
    }).catch(err => {
      this.setState({
        msg: JSON.stringify(err)
      })
    })
  }

  check() {
    fetch(`${config.remote}/user`, {
      method: 'GET'
    }).then(async v => {
      this.setState({
        msg: await v.text()
      })
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Thumbnail large style={styles.logo} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
          <Form>
            <Label danger>{this.state.msg}</Label>
            <Label style={styles.label}>用户名</Label>
            <Card>
              <Input placeholder="FaceSmart" onChangeText={v => this.setState({ username: v })} />
            </Card>
            <Label style={styles.label}>密码</Label>
            <Card>
              <Input placeholder="********" secureTextEntry={true} onChangeText={v => this.setState({ password: v })} />
            </Card>
            {
              this.state.mode === 'login' ?
                <Text style={styles.right} onPress={this.check}>找回密码？</Text>
                :
                [
                  <Label key={0} style={styles.label}>邮箱</Label>,
                  <Card key={1}>
                    <Input placeholder="FaceSmart@example.com" onChangeText={v => this.setState({ email: v })} />
                  </Card>
                ]
            }
            <Button onPress={this.login} style={styles.button} block dark><Text>登录</Text></Button>
            <Button onPress={this.state.mode === 'register' ? this.register : () => this.setState({ mode: 'register' })} style={styles.button} block dark><Text>注册</Text></Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9'
  },
  logo: {
    borderRadius: 16,
    marginTop: 24,
    marginBottom: 16,
    alignSelf: 'center'
  },
  label: {
    color: '#000000',
    marginVertical: 12
  },
  right: {
    textAlign: 'right',
    marginTop: 8,
    marginBottom: 16
  },
  button: {
    marginVertical: 8,
    backgroundColor: '#2c2c2c'
  },
});

export default Index