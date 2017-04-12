import { NAVIGATION_POI_VIEW } from '../actions/'

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVIGATION_POI_VIEW:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
}
