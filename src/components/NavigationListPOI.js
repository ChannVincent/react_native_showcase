/* @flow */

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Navigation, Card } from 'react-router-navigation'
import type { Match } from 'react-router'
import HeaderTitle from 'react-navigation/src/views/HeaderTitle'
import ListPOI from './ListPOI';
import POIView from './POIView';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    backgroundColor: "#a65b62",
  },
  title: {
    color: 'white',
    alignSelf: 'center',
  },
})

type Props = {
  match: Match,
}

/* FIX > https://github.com/facebook/react/issues/4936 */
class NavigationListPOI extends Component<void, Props, void> {

  props: Props

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
          component={ListPOI}
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

export default connect(mapStateToProps, { })(NavigationListPOI);
