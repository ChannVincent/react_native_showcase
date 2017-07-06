/* @flow */

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Navigation, Card } from 'react-router-navigation'
import type { Match } from 'react-router'
import HeaderTitle from 'react-navigation/src/views/HeaderTitle'
import List from './List'
import ListPOI from './components/ListPOI';
import POIView from './components/POIView';
import Article from './Article';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    backgroundColor: "#abcdef",
  },
  title: {
    color: 'white',
  },
})

type Props = {
  match: Match,
}

/* FIX > https://github.com/facebook/react/issues/4936 */
class Feed extends Component<void, Props, void> {

  props: Props
  listView: List

  shouldComponentUpdate(): boolean {
    return false
  }

  getPOITitleFromIdx(poiId) {
    for (poi of this.props.pois) {
      if (poi.idx === parseInt(poiId, 10)) {
        return poi.title;
      }
    }
  }

  render(): React$Element<any> {
    const { match: { url } } = this.props
    return (
      <Navigation
        navBarStyle={styles.navBar}
        titleStyle={styles.title}
        backButtonTintColor="white"
      >
        <Card
          exact
          path={url}
          render={props => (
            <ListPOI
              ref={(c) => {
                this.listView = c
              }}
              {...props}
            />
          )}
          title="Liste des POI"
        />
        <Card
          path={`${url}/article/:id`}
          component={POIView}
          title=""
          backButtonTitle="Back"
          renderTitle={({ title, match }) => (
            <HeaderTitle style={styles.title}>
              {title} {match && this.getPOITitleFromIdx(match.params.id)}
            </HeaderTitle>
          )}
        />
      </Navigation>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const { pois } = state.appContent;
  return {
    pois,
  }
}

export default connect(mapStateToProps, { })(Feed);
