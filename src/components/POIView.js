import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';

import pathWallet from './pathWallet';

class POIView extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
          <Text>{ this.props.title }</Text>
          <Image
            style={{width: 100, height: 100}}
            source={{ uri: pathWallet.lolcat }}
          />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#aab'
  }
}

const mapStateToProps = (state, ownProps) => {
    const { title } = state.navigation;
    return {
      title
    }
}

export default connect(mapStateToProps, {})(POIView);
