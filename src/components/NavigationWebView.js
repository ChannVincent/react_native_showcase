/* @flow */

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Navigation, Card } from 'react-router-navigation'
import type { Match } from 'react-router'
import HeaderTitle from 'react-navigation/src/views/HeaderTitle'
import Web from './Web';
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
  },
})

type Props = {
  match: Match,
}

/* FIX > https://github.com/facebook/react/issues/4936 */
class NavigationWebView extends Component<void, Props, void> {

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
          component={Web}
          title="WebView"
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

export default connect(mapStateToProps, { })(NavigationWebView);
