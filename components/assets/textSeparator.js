import React from 'react'
import { View } from 'native-base'

// separator.js
export default class separator extends React.Component {
  render() {
    return (
      <View style={{ height: 1, backgroundColor: '#d1d1d1', ...this.props.style }} />
    )
  }
}