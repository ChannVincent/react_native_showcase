import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import AudioPlayer from './AudioPlayer';
import { connect } from 'react-redux';
import {  } from '../actions';
const { width, height } = Dimensions.get('window');

class POIView extends Component {

  getMainImageMedia() {
    const currentPOI = this.getPOIFromIdx(this.props.match.params.id);
    var player_role = 15;
    var media_category_image = 1;
    for (mediaRole of currentPOI.medias_roles) {
      if (mediaRole.role == player_role && this.getMediaFromIdx(mediaRole.media_idx).media_category == media_category_image) {
        return this.getMediaFromIdx(mediaRole.media_idx);
      }
    }
  }

  getPOIFromIdx(poiId) {
    for (poi of this.props.pois) {
      if (poi.idx === parseInt(poiId, 10)) {
        return poi;
      }
    }
  }

  getMediaFromIdx(mediaIdx) {
    for (media of this.props.medias) {
      if (media.idx === parseInt(mediaIdx, 10)) {
        return media;
      }
    }
  }

  render() {
    const currentPOI = this.getPOIFromIdx(this.props.match.params.id);
    return (
      <ScrollView style={ styles.scrollContainerStyle }>
      <View style={ styles.containerStyle }>
          <Image
            source={{ uri: (this.getMainImageMedia() != undefined) ? this.getMainImageMedia().filename + "_l" : "image_not_found" }}
            style={ styles.imageStyle }
          />
          <Text style={ styles.titleStyle }>
            { currentPOI.title }
          </Text>
          <Text style={ styles.subtitleStyle }>
            { currentPOI.subtitle }
          </Text>
          <Text style={ styles.shortTextStyle }>
            { currentPOI.short_text }
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
      const { medias } = state.appContent;
      const { pois } = state.appContent;
    return {
      medias,
      pois
    }
}

export default connect(mapStateToProps, {})(POIView);
