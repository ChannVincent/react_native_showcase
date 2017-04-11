import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListPOI extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
        <Text>ListPOI</Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#abc'
  }
}

export default ListPOI;
