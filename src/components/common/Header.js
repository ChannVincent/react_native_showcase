// import libraries for making a component
import React from 'react';
import { Platform, Text, View } from 'react-native'; // destructured import

// make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles; // destructured import => instead of saying styles.viewStyle && styles.textStyle everywhere
  
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// use of Platform because all style attributes does not work on Android
const styles = {
  viewStyle: {
    backgroundColor: (Platform.OS === 'ios') ? '#f8f8f8' : '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: (Platform.OS === 'ios') ? 15 : 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position : 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

// make the component available to other parts of the app
export { Header };
