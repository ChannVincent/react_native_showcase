import React from 'react';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';

const KeypadButton = ({ onPress, children, buttonStyle, textStyle, disabled=false }) => {

  const { mainButtonStyle, mainTextStyle } = styles;

  if (children == 'Ok') {
    return (
      <View style={[mainButtonStyle, buttonStyle]}>
        <Text style={[mainTextStyle, textStyle]}>
          {children}
        </Text>
      </View>
    )
  }
  else if (children !== 'Delete') {
    return (
      <TouchableOpacity onPress={onPress} style={[mainButtonStyle, buttonStyle]} disabled={disabled}>
        <Text style={[mainTextStyle, textStyle]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
  else {
    return (
      <TouchableOpacity onPress={onPress} style={[mainButtonStyle, buttonStyle]} disabled={disabled}>
        <Image
          style={styles.imageStyle}
          source={ require('../../../assets/ic_backspace.png') }
        />
      </TouchableOpacity>
    );
  }
};

const styles = {
  mainTextStyle: {
    alignSelf: 'center',
    color: (Platform.OS === 'ios') ? '#000' : '#555',
    fontSize: 22,
    fontWeight: (Platform.OS === 'ios') ? '300' : '100',
    margin: (Platform.OS === 'ios') ? 22 : 16
  },
  mainButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ccc',
    borderRadius: 2,
    margin: 1
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'center',
    margin: 1,
    width: 50,
    height: 50
  }
}

export { KeypadButton };
