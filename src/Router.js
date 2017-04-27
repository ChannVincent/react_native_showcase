import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Platform, Text, Image, View } from 'react-native';
import ListPOI from './components/ListPOI';
import KeypadPOI from './components/KeypadPOI';
import WebViewScreen from './components/WebViewScreen';
import POIView from './components/POIView';
import SplashScreen from './components/SplashScreen';

class TabIcon extends React.Component {
    getIcon() {
      const { selected, title, iconPic } = this.props;
      switch(title) {
        case 'Liste':
          return (
            <Image
              style={{tintColor: selected ? '#a65b62' : 'black', width: 25, height: 25}}
              source={ require('../assets/icon_tab2.png') }
            />
          );
        case 'Clavier':
          return (
            <Image
              style={{tintColor: selected ? '#a65b62' : 'black', width: 25, height: 25}}
              source={ require('../assets/icon_tab4.png') }
            />
          );
        case 'WebView':
        return (
          <Image
            style={{tintColor: selected ? '#a65b62' : 'black', width: 25, height: 25}}
            source={ require('../assets/icon_tab1.png') }
          />
        );
      }
    }
    render() {
        const { selected, title, iconPic } = this.props;
        return (
          <View
            style={ styles.iconStyle }
          >
            { this.getIcon() }
            <Text style={{ color: selected ? '#a65b62' : 'black', width: 60, textAlign: 'center' }}>{ title }</Text>
          </View>
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
  },
  iconStyle: {
    width: 40,
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default RouterComponent;
