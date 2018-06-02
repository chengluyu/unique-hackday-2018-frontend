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
  ListItem
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import { observer } from 'mobx-react'

@observer class Index extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Text>
            Aha
          </Text>
        </Content>
      </Container>
    )
  }
}

export default Index