import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { TabNavigator } from 'react-navigation';
import ListPOI from './components/ListPOI';
import KeypadPOI from './components/KeypadPOI';
import WebViewScreen from './components/WebViewScreen';

class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
        <MyApp/>
      </Provider>
    )
  }
}

const MyApp = TabNavigator({
  Liste: {
    screen: ListPOI,
    navigationOptions:{
      tabBarLabel: 'Liste',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/icon_tab1.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  Keypad: {
    screen: KeypadPOI,
    navigationOptions: {
      tabBarLabel: 'Kaypad',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/icon_tab2.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  WebView: {
    screen: WebViewScreen,
    navigationOptions:{
      tabBarLabel: 'WebViewScreen',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/icon_tab3.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

const styles = {
  icon: {
    width: 26,
    height: 26,
  },
}

export default App;
