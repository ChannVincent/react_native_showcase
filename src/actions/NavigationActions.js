import { NAVIGATION_POI_VIEW } from './types';

export const navigateToPOIView = (viewController = { title, urlImage }) => {
  return {
    type: NAVIGATION_POI_VIEW,
    payload: viewController
  }
}
