import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';

class POIView extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
          <Text>{ this.props.title }</Text>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../assets/images/lolcat.jpg')}
          />
          <Image
            source={{uri: 'lolcat'}}
            style={{width: 100, height: 100}}
            width={100}
            height={100}
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

POIView.propTypes = {
  title: React.PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
    const { title } = state.navigation;
    return {
      title
    }
}

export default connect(mapStateToProps, {})(POIView);
