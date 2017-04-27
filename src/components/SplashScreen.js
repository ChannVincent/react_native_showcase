import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

class SplashScreen extends Component {

  startMain() {
    Actions.main();
  }

  componentWillMount() {
    setTimeout(
      this.startMain,
      500
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={ this.startMain }>
        <View style={ styles.containerStyle }>
          <Image
            resizeMode='cover'
            style={ styles.imageStyle }
            source={ require('../../assets/launch_image.png') }
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#000',
    overflow: 'hidden'
  },
  imageStyle: {
    width:width,
    height: height
  }
}

export default SplashScreen;
