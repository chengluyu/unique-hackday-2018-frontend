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
  Form,
  Label,
  Input,
  Item
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import { observer } from 'mobx-react'

@observer class Search extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={
              () => {
                Actions.pop()
              }
            } transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>搜索</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>在此输入搜索词</Label>
              <Input onChangeText={
                t => {
                  this.props.store.setContent(t)
                }
              } />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default Search