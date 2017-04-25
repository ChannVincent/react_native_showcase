import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
import { connect } from 'react-redux';
import { navigateToPOIView } from '../actions';

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
      <Text>{ poi.title }</Text>
    );
  }

  onRowPress() {
    this.props.navigateToPOIView({ title: 'title sent from list', urlImage: 'media62659_l' });
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        <TouchableOpacity onPress={ this.onRowPress.bind(this) }>
          <Text>{ this.props.title }</Text>
        </TouchableOpacity>
        <ListView
          dataSource={ this.dataSource }
          renderRow={ this.renderRow }
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
