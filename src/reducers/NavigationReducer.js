import { NAVIGATION_POI_VIEW } from '../actions/types';

const INITIAL_STATE = {
  title: 'default title'
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  console.log(NAVIGATION_POI_VIEW);
  switch (action.type) {
    case NAVIGATION_POI_VIEW:
      console.log(NAVIGATION_POI_VIEW);
      return { ...state, [action.payload.prop]: action.payload.value };

    default:
      console.log("default");
      return state;
  }
}
