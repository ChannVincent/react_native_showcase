import React, { Component } from 'react';
import { View, Text, Dimensions, Platform, Image } from 'react-native';
import { connect } from 'react-redux';
import { navigateToPOIView } from '../actions';
import { KeypadButton } from './common';
const { width, height } = Dimensions.get('window');

class KeypadPOI extends Component {

  state = {
    currentCartelNumber: '',
    feedBackText: 'No cartel found'
  }

  onNumberClick(number) {
    var poi = this.getPOIFromCartel(this.state.currentCartelNumber + number);
    if (poi == null) {
        this.setState({
          feedBackText: 'No cartel found',
          currentCartelNumber: this.state.currentCartelNumber + number
        });
    }
    else {
        this.setState({
          feedBackText: 'Cartel found : \n' + poi.title,
          currentCartelNumber: this.state.currentCartelNumber + number
        });
    }
  }

  onValidateClick() {
    var poi = this.getPOIFromCartel(this.state.currentCartelNumber);
    if (poi != null) {
      this.props.navigateToPOIView({ currentPOI: poi });
    }
    this.setState({
      currentCartelNumber: '',
      feedBackText: 'No cartel found'
    });
  }

  onDeleteClick() {
    this.setState({ currentCartelNumber: this.state.currentCartelNumber.slice(0, -1) });
    var poi = this.getPOIFromCartel(this.state.currentCartelNumber.slice(0, -1));
    if (poi == null) {
        this.setState({
          feedBackText: 'No cartel found',
          currentCartelNumber: this.state.currentCartelNumber.slice(0, -1)
        });
    }
    else {
        this.setState({
          feedBackText: 'Cartel found : \n' + poi.title,
          currentCartelNumber: this.state.currentCartelNumber.slice(0, -1)
        });
    }
  }

  getPOIFromCartel(cartelNumber) {
    for (poi of this.props.pois) {
      if (poi.cartel_number == cartelNumber) {
        return poi;
      }
    }
    return null;
  }

  renderDeleteButton() {
    if (this.state.currentCartelNumber == '') {
      return (
        <KeypadButton
          onPress={ () => { this.onDeleteClick() } }
          textStyle={{ color: '#777' }}
          disabled>
          Delete
        </KeypadButton>
      )
    }
    else {
      return (
        <KeypadButton
          onPress={ () => { this.onDeleteClick() } }
          textStyle={{ color: '#fff' }}
          buttonStyle={{ backgroundColor: '#a30b0b' }}>
          Delete
        </KeypadButton>
      )
    }
  }

  renderOkButton() {
    console.log(this.state.currentCartelNumber);
    var poi = this.getPOIFromCartel(this.state.currentCartelNumber);
    if (poi == null) {
      return (
        <KeypadButton
          textStyle={{ color: '#777' }}
          onPress={ () => { this.onValidateClick() } }
          disabled>
          Ok
        </KeypadButton>
      )
    }
    else {
      return (
        <KeypadButton
          onPress={ () => { this.onValidateClick() } }
          textStyle={{ color: '#fff' }}
          buttonStyle={{ backgroundColor: '#48a51a' }}>
          Ok
        </KeypadButton>
      )
    }
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
          {this.renderDeleteButton()}
          <KeypadButton onPress={ () => { this.onNumberClick(0) } }>0</KeypadButton>
          {this.renderOkButton()}
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
    fontSize: 20,
    lineHeight: 33,
    textAlign: 'center'
  },
  textInputStyle: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '300',
    color: "#777",
    fontSize: 30,
    margin: 20
  },
}

const mapStateToProps = (state, ownProps) => {
  const { pois } = state.appContent;
  console.log(pois);
  return {
    pois
  }
}

export default connect(mapStateToProps, { navigateToPOIView })(KeypadPOI);
