import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import AppContentReducer from './AppContentReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  navigation: NavigationReducer,
  appContent: AppContentReducer,
  router: routerReducer,
})
