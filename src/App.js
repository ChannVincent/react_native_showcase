import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

import { BottomNavigation, Tab } from 'react-router-navigation';

class App extends Component {
  render() {
    return (
      <BottomNavigation lazy={false} tabActiveTintColor="blue">
          <Tab label="Feed" path="/feed" component={require('./components/ListPOI')} />
          <Tab label="Profile" path="/profile" component={require('./components/KeypadPOI')} />
      </BottomNavigation>
    )
  }
}

export default App;

/*
<NativeRouter>
  <Navigation>
    <BottomNavigation
      lazy={false}
      tabActiveTintColor="blue">
        <Tab label="Feed" path="/KeypadPOI" component={require('./components/KeypadPOI')} />
        <Tab label="Profile" path="/profile" component={require('./components/List')} />
    </BottomNavigation>
  </Navigation>
</NativeRouter>
*/
