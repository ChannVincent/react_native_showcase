import React, { Component } from 'react';
import { View, Text } from 'react-native';

class KeypadPOI extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
        <Text>KeypadPOI</Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex:1,
    backgroundColor: '#def'
  }
}

export default KeypadPOI;
