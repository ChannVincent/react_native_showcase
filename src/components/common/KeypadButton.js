import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';

const KeypadButton = ({ onPress, children }) => {

  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: (Platform.OS === 'ios') ? '#000' : '#555',
    fontSize: 18,
    fontWeight: (Platform.OS === 'ios') ? '300' : '100',
    margin: (Platform.OS === 'ios') ? 22 : 18
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ccc',
    borderRadius: 2,
    margin: 1
  },
}

export { KeypadButton };
