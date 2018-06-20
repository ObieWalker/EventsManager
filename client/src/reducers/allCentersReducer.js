import {
  IS_CENTERS_FETCHING,
  FETCH_CENTERS_SUCCESS,
  FETCH_CENTERS_FAILURE,
  CLEAR_CENTER_STATE,
  EDIT_CENTER
} from '../actions/actionTypes';

const initialState = {
  isCentersFetching: false,
  fetchedCenters: [],
  allCentersError: '',
  moreCenters: true
};
let newState;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_CENTERS_FETCHING:
    return Object.assign({}, state, { isCentersFetching: action.bool });
  case FETCH_CENTERS_SUCCESS:
    newState = Object.assign({}, state);
    newState.fetchedCenters = newState.fetchedCenters.concat(action.centers);
    newState.moreCenters = true;
    return newState;
  case FETCH_CENTERS_FAILURE:
    return Object.assign({}, state, {
      allCentersError: action.error,
      moreCenters: false
    });
  case EDIT_CENTER:
    newState = Object.assign({}, state);
    newState.fetchedCenters = newState.fetchedCenters.map((center) => {
      if (center.id === action.center.id) return action.center;
      return center;
    });
    return newState;
  case CLEAR_CENTER_STATE:
    newState = Object.assign({}, state);
    newState.fetchedCenters = action.empty;
    newState.moreCenters = true;
    return newState;
  default:
    return state;
  }
};
