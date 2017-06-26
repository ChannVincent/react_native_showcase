import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView, Image } from 'react-native';
import { connect } from 'react-redux';
import { navigateToPOIView } from '../actions';
import ListItem from './ListItem';

class ListPOI extends Component {

  componentWillMount() {
    // boiler plate code for ListView
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.dataSource = ds.cloneWithRows(this.props.pois);
  }

  renderRow(poi) {
    var mediaImage = this.getMainImageOfPOI(poi);
    return (
      <ListItem
        title={ poi.title }
        onPress={ () => { this.onRowPress({ currentPOI: poi }) } }
        urlImage={ (mediaImage != undefined) ? mediaImage.filename + "_l" : "image_not_found" }
        />
    );
  }

  getMainImageOfPOI(poi) {
    var player_role = 15;
    var media_category_image = 1;
    for (mediaRole of poi.medias_roles) {
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

  onRowPress({ currentPOI }) {
    this.props.navigateToPOIView({ currentPOI });
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        <ListView
          dataSource={ this.dataSource }
          renderRow={ this.renderRow.bind(this) }
          />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#ccc'
  },
}

const mapStateToProps = (state, ownProps) => {
  const { pois, medias } = state.appContent;
  return {
    title: 'ListPOI',
    pois,
    medias
  }
}

export default connect(mapStateToProps, { navigateToPOIView })(ListPOI);
