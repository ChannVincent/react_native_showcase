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
    return (
      <ListItem
        title={ poi.title }
        onPress={ () => { this.onRowPress({title: poi.title, urlImage: 'media62659_l' }) } }
        />
    );
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
