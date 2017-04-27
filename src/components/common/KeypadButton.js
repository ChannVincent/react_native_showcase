import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';

const KeypadButton = ({ onPress, children, buttonStyle, textStyle, disabled=false }) => {

  const { mainButtonStyle, mainTextStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[mainButtonStyle, buttonStyle]} disabled={disabled}>
      <Text style={[mainTextStyle, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  mainTextStyle: {
    alignSelf: 'center',
    color: (Platform.OS === 'ios') ? '#000' : '#555',
    fontSize: 18,
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
}

export { KeypadButton };
