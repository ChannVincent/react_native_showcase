import { NAVIGATION_POI_VIEW } from '../actions/types';

const INITIAL_STATE = {
  title: 'default title'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVIGATION_POI_VIEW:
      return { ...state, title: action.payload.title };

    default:
      console.log("default");
      return state;
  }
}
