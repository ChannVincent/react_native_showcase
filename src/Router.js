import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Platform, Text } from 'react-native';
import ListPOI from './components/ListPOI';
import KeypadPOI from './components/KeypadPOI';
import WebViewScreen from './components/WebViewScreen';
import POIView from './components/POIView';
import SplashScreen from './components/SplashScreen';

class TabIcon extends React.Component {
    render() {
        const { selected, title } = this.props;
        return (
            <Text style={{ color: selected ? 'red' : 'black' }}>{ title }</Text>
        );
    }
}

const RouterComponent = () => {
    return (
      <Router>
        <Scene key="intro" initial>
          <Scene
            key="splash"
            component={ SplashScreen }
            hideNavBar
            />
        </Scene>
        <Scene key="main">
          <Scene key="tabBar" tabs tabBarStyle={ styles.tabBarStyle }>
            <Scene
              key="tab1"
              title="Liste"
              component={ ListPOI }
              icon={ TabIcon }
              sceneStyle={ styles.sceneTabStyle }
              />
            <Scene
              key="tab2"
              title="Clavier"
              component={ KeypadPOI }
              icon={ TabIcon }
              sceneStyle={ styles.sceneTabStyle }
              />
            <Scene
              key="tab3"
              title="WebView"
              component={ WebViewScreen }
              icon={ TabIcon }
              sceneStyle={ styles.sceneTabStyle }
              />
          </Scene>
          <Scene key="poiView" title="POI title" component={ POIView } sceneStyle={ styles.sceneStyle } />
        </Scene>
      </Router>
    )
}

const styles = {
  sceneStyle: {
    marginTop: (Platform.OS === 'ios') ? 64 : 54
  },
  sceneTabStyle: {
    marginTop: (Platform.OS === 'ios') ? 64 : 54,
    marginBottom: 50
  },
  tabBarStyle: {
    backgroundColor: '#eee'
  }
}

export default RouterComponent;
