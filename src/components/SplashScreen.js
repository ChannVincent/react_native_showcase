import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SplashScreen extends Component {

  startMain() {
    Actions.tabBar({ animation: 'fade', type: 'reset' });
  }

  componentWillMount() {
    setTimeout(
      this.startMain,
      2000
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={ this.startMain }>
        <View style={ styles.containerStyle }>
          <Text>SplashScreen</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#a59'
  }
}

export default SplashScreen;