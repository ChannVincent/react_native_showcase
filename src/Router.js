import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Platform } from 'react-native';
import ListPOI from './components/ListPOI';
import KeypadPOI from './components/KeypadPOI';
import WebView from './components/WebView';

const RouterComponent = () => {
    return (
      <Router sceneStyle={ styles.sceneStyle }>
        <Scene
          key='main'
          tabs={ true }
          hideNavBar
          tabBarStyle={ styles.tabBarStyle }>
          <Scene
            key='listPOI'
            component={ ListPOI }
            title='List'
            />
          <Scene
            key='keypadPOI'
            component={ KeypadPOI }
            title='Keypad'
            />
          <Scene
            key='WebView'
            component={ WebView }
            title='WebView'
            />
        </Scene>
      </Router>
    )
}

const styles = {
  sceneStyle: {
    paddingTop: (Platform.OS === 'ios') ? 65 : 55
  },
  tabBarStyle: {
    backgroundColor: '#fff'
  }
}

export default RouterComponent;

