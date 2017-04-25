import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {

  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

// flex: 1 => expand whole place it can take
// alignSelf: 'stretch' => stretch to fill the limit of the container
// fontWeight: '600' => thin or bold font
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aaf',
    fontSize: 16,
    fontWeight: '600',
    margin: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
}
export { Button };
