import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Card, CardItem, Left, Thumbnail, Body } from 'native-base';
export default class MessageList extends Component {
  constructor(props) {
    super(props);
    // this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    return (
      <Content padder>
        <List
          dataSource={(new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })).cloneWithRows([1, 2])}
          renderRow={data =>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                  <Body>
                    <Text>布兰琪{data}</Text>
                    <Text note>易建联</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>}
          renderRightHiddenRow={(data, secId, rowId, rowMap) =>
            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
              <Icon active name="trash" />
            </Button>}
          rightOpenValue={-75}
        />
      </Content>
    );
  }
}