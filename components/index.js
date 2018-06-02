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
  componentDidMount() {
    if (this.props.store.user.name === null) {
      Actions['login']({ type: 'replace' })
    }
  }

  render() {
    return (
      <Container>
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