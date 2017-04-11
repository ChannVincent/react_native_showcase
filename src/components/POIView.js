import React, { Component } from 'react'
import { View, Text } from 'react-native'

class POIView extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
        <Text>POIView</Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#aab'
  }
}

export default POIView;
