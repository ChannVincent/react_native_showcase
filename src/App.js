import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { TabNavigator } from 'react-navigation';
import ListPOI from './components/ListPOI';
import KeypadPOI from './components/KeypadPOI';

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
  },
  Keypad: {
    screen: KeypadPOI,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default App;
