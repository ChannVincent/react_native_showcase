import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {  } from '../actions';

class POIView extends Component {
  componentWillMount() {
    Actions.refresh({title: this.props.title })
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
          <Text>{ this.props.title }</Text>
          <Image
            source={{ uri: this.props.urlImage }}
            style={{ width: 100, height: 100 }}
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
    const { title, urlImage } = state.navigation;
    return {
      title,
      urlImage
    }
}

export default connect(mapStateToProps, {})(POIView);
