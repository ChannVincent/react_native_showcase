import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Platform, Text } from 'react-native';
import ListPOI from './components/ListPOI';
import KeypadPOI from './components/KeypadPOI';
import WebView from './components/WebView';
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
              title="Tab #1"
              component={ ListPOI }
              icon={ TabIcon }
              sceneStyle={ styles.sceneStyle }
              />
            <Scene
              key="tab2"
              title="Tab #2"
              component={ KeypadPOI }
              icon={ TabIcon }
              sceneStyle={ styles.sceneStyle }
              />
            <Scene
              key="tab3"
              title="Tab #3"
              component={ WebView }
              icon={ TabIcon }
              sceneStyle={ styles.sceneStyle }
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
  tabBarStyle: {
    backgroundColor: '#fff'
  }
}

export default RouterComponent;
