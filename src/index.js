import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Switch, Route, Redirect } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import reducers from './reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const loggerMiddleware = () => (next) => (action) => {
  if (action && action.type === '@@router/LOCATION_CHANGE') {
    console.log(history.entries.map(({ pathname }) => pathname))
  }
  if (action) next(action)
}

const store = createStore(
  reducers,
  applyMiddleware(
    historyMiddleware,
    loggerMiddleware,
  ),
)

/*
Start at specfic screen thanks to redirection :
  + <Redirect to="/profile/bookmarks"/>
  + Render <App/> with matching url thanks to <Switch/>
*/
const Root = (): React$Element<any> => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/profile/bookmarks" />}
        />
        <Route
          path="/"
          render={({ location, match: { url } }) => (
            <View style={styles.container}>
              <App history={history} />
            </View>
          )}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Root
