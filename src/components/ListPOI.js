import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
import { Link } from 'react-router-native'
import { connect } from 'react-redux';
import { navigateToPOIView } from '../actions';
import ListItem from './ListItem';
import type { Match } from 'react-router';

class ListPOI extends Component {
  componentWillMount() {
    // boiler plate code for ListView
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.dataSource = ds.cloneWithRows(this.props.pois);
  }

  renderRow(poi) {
    const { match: { url } } = this.props;
    var mediaImage = this.getMainImageOfPOI(poi);
    return (
      <Link to={`${url}/article/${poi.idx}`}>
        <View>
          <ListItem
            title={ poi.title }
            urlImage={ (mediaImage != undefined) ? mediaImage.filename + "_l" : "image_not_found" }
          />
        </View>
      </Link>
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

  render() {
    return (
      <View style={ styles.containerStyle }>
        <ListView
          ref={(c) => {
            this.listView = c
          }}
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
  }
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
