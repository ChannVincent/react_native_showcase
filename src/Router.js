import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Platform, Text } from 'react-native';
import ListPOI from './components/ListPOI';
import KeypadPOI from './components/KeypadPOI';
import WebView from './components/WebView';

class TabIcon extends React.Component {
    render() {
        const { selected, title } = this.props;
        return (
            <Text style={{ color: selected ? 'red' :'black' }}>{ title }</Text>
        );
    }
}

const RouterComponent = () => {
    return (
      <Router>
        <Scene key="tabbar" tabs={true} tabBarStyle={ styles.tabBarStyle } >
          <Scene key="tab1" title="Tab #1" component={ ListPOI } icon={ TabIcon } sceneStyle={ styles.sceneStyle } />
          <Scene key="tab2" title="Tab #2" component={ KeypadPOI} icon={ TabIcon } sceneStyle={ styles.sceneStyle } />
          <Scene key="tab3" title="Tab #3" component={ WebView } icon={ TabIcon } sceneStyle={ styles.sceneStyle } />
        </Scene>
      </Router>
    )
}

const styles = {
  sceneStyle: {
    marginTop: 64
  },
  tabBarStyle: {
    backgroundColor: '#fff'
  },
  tabIconStyle: {

  }
}

export default RouterComponent;
