import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
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
        onPress={ () => { this.onRowPress({title: poi.title, urlImage: mediaImage.filename + "_l" }) } }
        urlImage={ (mediaImage != undefined) ? mediaImage.filename + "_l" : "error_image" }
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

  onRowPress({ title, urlImage }) {
    this.props.navigateToPOIView({ title, urlImage });
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
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.appContent);
  const { pois, medias } = state.appContent;
  return {
    title: 'ListPOI',
    pois,
    medias
  }
}

export default connect(mapStateToProps, { navigateToPOIView })(ListPOI);
