import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { navigateToPOIView } from '../actions';

class ListPOI extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
        <TouchableOpacity onPress={ this.props.navigateToPOIView }>
          <Text>{ this.props.title }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#abc'
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'ListPOI'
  }
}

export default connect(mapStateToProps, { navigateToPOIView })(ListPOI);
