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
    let items = [1, 2, 3]

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Hackthon2018</Title>
          </Body>
          <Right>
            <Button onPress={
              () => {
                Actions['search']()
              }
            } transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List dataArray={this.props.store.list} renderRow={
            i => (
              <ListItem>
                <Text>{i}</Text>
              </ListItem>
            )
          } />
        </Content>
      </Container>
    )
  }
}

export default Index