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
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Thumbnail large style={styles.logo} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
          <Form>
            <Label style={styles.label}>用户名</Label>
            <Card>
              <Input placeholder="FaceSmart" />
            </Card>
            <Label style={styles.label}>密码</Label>
            <Card>
              <Input placeholder="********" secureTextEntry={true} />
            </Card>
            <Text style={styles.right}>忘记密码？</Text>
            <Button style={styles.button} block dark><Text>登录</Text></Button>
            <Button style={styles.button} block dark><Text>注册</Text></Button>
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