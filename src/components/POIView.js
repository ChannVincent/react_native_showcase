import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import AudioPlayer from './AudioPlayer';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {  } from '../actions';
const { width, height } = Dimensions.get('window');

class POIView extends Component {
  componentWillMount() {
    Actions.refresh({title: this.props.currentPOI.title })
  }

  getMainImageMedia() {
    var player_role = 15;
    var media_category_image = 1;
    for (mediaRole of this.props.currentPOI.medias_roles) {
      if (mediaRole.role == player_role && this.getMediaFromIdx(mediaRole.media_idx).media_category == media_category_image) {
        return this.getMediaFromIdx(mediaRole.media_idx);
      }
    }
  }

  getMediaFromIdx(mediaIdx) {
    for (media of this.props.medias) {
      if (media.idx == mediaIdx) {
        return media;
      }
    }
  }

  render() {
    return (
      <ScrollView style={ styles.scrollContainerStyle }>
      <View style={ styles.containerStyle }>
          <Image
            source={{ uri: (this.getMainImageMedia() != undefined) ? this.getMainImageMedia().filename + "_l" : "image_not_found" }}
            style={ styles.imageStyle }
          />
          <AudioPlayer source={ require('../../assets/media63100.m4a') }/>
          <Text style={ styles.titleStyle }>
            { this.props.currentPOI.title }
          </Text>
          <Text style={ styles.subtitleStyle }>
            { this.props.currentPOI.subtitle }
          </Text>
          <Text style={ styles.shortTextStyle }>
            { this.props.currentPOI.short_text }
          </Text>
      </View>
      </ScrollView>
    )
  }
}

const styles = {
  scrollContainerStyle: {
    flex: 1
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width,
    height: width
  },
  titleStyle: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 23,
    fontWeight: '600',
    color: "#a65b62"
  },
  subtitleStyle: {
    margin: 10,
    marginLeft: 20,
    fontSize: 17,
    fontWeight: '400',
    color: "#777"
  },
  shortTextStyle: {
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '400',
    color: "#555"
  }
}

POIView.propTypes = {
  title: React.PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
    const { currentPOI } = state.navigation;
      const { medias } = state.appContent;
    return {
      currentPOI,
      medias
    }
}

export default connect(mapStateToProps, {})(POIView);
