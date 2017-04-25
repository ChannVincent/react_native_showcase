import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { navigateToPOIView } from '../actions';

class ListPOI extends Component {
  onRowPress() {
    this.props.navigateToPOIView({ title: 'title sent from list', urlImage: 'media62659_l' });
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        <TouchableOpacity onPress={ this.onRowPress.bind(this) }>
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
