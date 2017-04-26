import React, { Component } from 'react';
import { View, Text, Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';
import { KeypadButton } from './common';
const { width, height } = Dimensions.get('window');

class KeypadPOI extends Component {

  state = {
    currentCartelNumber: '',
    feedBackText: 'No cartel found'
  }

  onNumberClick(number) {
    console.log(number);
    this.setState({ currentCartelNumber: this.state.currentCartelNumber + number })
  }

  onValidateClick() {
    console.log("validate");
  }

  onDeleteClick() {
    this.setState({ currentCartelNumber: this.state.currentCartelNumber.slice(0, -1) })
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        <View style={ styles.textContainerStyle }>
          <Text style={ styles.textInputStyle }>{ this.state.currentCartelNumber }</Text>
          <Text style={ styles.textFeedBackStyle }>{ this.state.feedBackText }</Text>
        </View>
        <View style={ styles.lineContainerStyle }>
          <KeypadButton onPress={ () => { this.onNumberClick(1) } }>1</KeypadButton>
          <KeypadButton onPress={ () => { this.onNumberClick(2) } }>2</KeypadButton>
          <KeypadButton onPress={ () => { this.onNumberClick(3) } }>3</KeypadButton>
        </View>
        <View style={ styles.lineContainerStyle }>
          <KeypadButton onPress={ () => { this.onNumberClick(4) } }>4</KeypadButton>
          <KeypadButton onPress={ () => { this.onNumberClick(5) } }>5</KeypadButton>
          <KeypadButton onPress={ () => { this.onNumberClick(6) } }>6</KeypadButton>
        </View>
        <View style={ styles.lineContainerStyle }>
          <KeypadButton onPress={ () => { this.onNumberClick(7) } }>7</KeypadButton>
          <KeypadButton onPress={ () => { this.onNumberClick(8) } }>8</KeypadButton>
          <KeypadButton onPress={ () => { this.onNumberClick(9) } }>9</KeypadButton>
        </View>
        <View style={ styles.lineContainerStyle }>
          <KeypadButton onPress={ () => { this.onDeleteClick() } }>Delete</KeypadButton>
          <KeypadButton onPress={ () => { this.onNumberClick(0) } }>0</KeypadButton>
          <KeypadButton onPress={ () => { this.onValidateClick() } }>Ok</KeypadButton>
        </View>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  lineContainerStyle: {
    height: (Platform.OS === 'ios') ? 70 : 60,
    width,
    flexDirection: 'row'
  },
  textContainerStyle: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textFeedBackStyle: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '300',
    color: "#777",
    fontSize: 20
  },
  textInputStyle: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '300',
    color: "#777",
    fontSize: 30,
    margin: 20
  }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, {})(KeypadPOI);
