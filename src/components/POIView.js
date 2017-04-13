import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';

class POIView extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
        <Text>{ this.props.title }</Text>
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
