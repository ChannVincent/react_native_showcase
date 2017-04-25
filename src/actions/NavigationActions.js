import { NAVIGATION_POI_VIEW } from './types';
import { Actions } from 'react-native-router-flux';

export const navigateToPOIView = (viewController = { title, urlImage }) => {
  Actions.poiView();
  return {
    type: NAVIGATION_POI_VIEW,
    payload: viewController
  }
}
