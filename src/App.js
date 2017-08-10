import React, { Component } from 'react';
import { Platform, Image } from 'react-native';
import { BottomNavigation, Tab } from 'react-router-navigation';
import type { RouterHistory } from 'react-router';
import NavigationListPOI from './components/NavigationListPOI';
import Profile from './Profile';
import ListPOI from './components/ListPOI';

type Props = {
  history: RouterHistory,
}

class App extends Component {

  props: Props

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { history } = this.props;
    return (
      <BottomNavigation
        tabTintColor={"#aaaaaa"}
        tabActiveTintColor={"#ffffff"}
        tabBarStyle={styles.tabStyle}
      >
        <Tab
          path="/ListPOI"
          component={NavigationListPOI}
          label="Liste"
          renderTabIcon={({ focused, tabTintColor, tabActiveTintColor }) => (
            <Image
              source={require('../assets/icon_tab1.png')}
              style={[{
                marginBottom: Platform.OS === 'android' ? 2.5 : 1,
                width: Platform.OS === 'android' ? 22.5 : 25,
                height: Platform.OS === 'android' ? 22.5 : 25,
                tintColor: focused ? tabActiveTintColor : tabTintColor,
              }]}
            />
          )}
        />
        <Tab
          path="/profile/(likes|bookmarks)"
          component={Profile}
          onRequestChangeTab={() => history.replace('/profile/likes')}
          onReset={() => history.replace('/profile/likes')}
          label="Profile"
          renderTabIcon={({ focused, tabTintColor, tabActiveTintColor }) => (
            <Image
              source={require('./assets/profile.png')}
              style={{
                marginBottom: Platform.OS === 'android' ? 0 : -2,
                width: Platform.OS === 'android' ? 27.5 : 31,
                height: Platform.OS === 'android' ? 27.5 : 31,
                tintColor: focused ? tabActiveTintColor : tabTintColor,
              }}
            />
          )}
        />
      </BottomNavigation>
    );
  }
}

const styles = {
  tabStyle: {
    backgroundColor: '#a65b62',
  },
}

export default App
