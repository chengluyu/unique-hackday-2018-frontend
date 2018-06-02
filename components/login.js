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

@observer class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: Object.getOwnPropertyNames(this),
      username: '',
      password: ''
    }

    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
    this.check = this.check.bind(this)
  }

  login() {
    fetch(`http://139.198.2.153:7304/hack/login?username=${encodeURIComponent(this.state.username)}&password=${encodeURIComponent(this.state.password)}`, {
      method: 'GET'
    }).then(async v => {
      let content = await v.text()
      let json = JSON.parse(content)
      this.props.store.setUser({
        name: json.data.username,
        info: {
          nick: json.data.username,
          email: json.data.email,
          gender: null,
          birthday: null,
          biography: null,
          contact: []
        }
      })
    })
  }

  register() {
    fetch(`http://139.198.2.153:7304/hack/logout`, {
      method: 'GET'
    }).then(async v => {
      this.setState({
        msg: await v.text()
      })
    })
  }

  check() {
    fetch(`http://139.198.2.153:7304/hack/user`, {
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
            <Label style={styles.label}>用户名</Label>
            <Card>
              <Input placeholder="FaceSmart" onChangeText={v => this.setState({ username: v })} />
            </Card>
            <Label style={styles.label}>密码</Label>
            <Card>
              <Input placeholder="********" secureTextEntry={true} onChangeText={v => this.setState({ password: v })} />
            </Card>
            <Text style={styles.right} onPress={this.check}>{this.state.msg}</Text>
            <Button onPress={this.login} style={styles.button} block dark><Text>登录</Text></Button>
            <Button onPress={this.register} style={styles.button} block dark><Text>注册</Text></Button>
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