import React, { Component } from 'react';
import { View, Text } from 'react-native';

class WebView extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
        <Text>WebView</Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex:1,
    backgroundColor: '#789'
  }
}

export default WebView;
