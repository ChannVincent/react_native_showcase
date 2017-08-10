import React, { Component } from 'react';
import { View, Text, WebView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from './common';
import {  } from '../actions';
const { width, height } = Dimensions.get('window');

class Web extends Component {

  state = {
    loading: true
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        { this.renderSpinner() }
        <WebView
          style={ styles.webViewStyle }
          source={{uri: 'https://smartapps.fr/'}}
          onLoad={ () => { this.setState({ loading: false }) } }
        />
      </View>
    )
  }

  renderSpinner() {
    if (this.state.loading) {
      return (
        <View style={ styles.spinnerStyle }>
          <Spinner />
        </View>
      )
    }
    else {
      return null;
    }
  }
}

const styles = {
  containerStyle: {
    flex:1,
    backgroundColor: '#ccc'
  },
  webViewStyle: {
    flex:1
  },
  spinnerStyle: {
    width,
    height: height - 100
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'WebView'
  }
}

export default connect(mapStateToProps, {})(Web);
