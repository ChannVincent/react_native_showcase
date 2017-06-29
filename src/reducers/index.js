import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import AppContentReducer from './AppContentReducer';

export default combineReducers({
  navigation: NavigationReducer,
  appContent: AppContentReducer
})
