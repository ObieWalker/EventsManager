import {
  IS_CENTERS_FETCHING,
  FETCH_CENTERS_SUCCESS,
  FETCH_CENTERS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isCentersFetching: false,
  fetchedCenters: [],
  allCentersError: ''
};
let newState;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_CENTERS_FETCHING:
    return Object.assign({}, state, { isCentersFetching: action.bool });
  case FETCH_CENTERS_SUCCESS:
    newState = Object.assign({}, state);
    newState.fetchedCenters = newState.fetchedCenters.concat(action.centers);
    return newState;
  case FETCH_CENTERS_FAILURE:
    return Object.assign({}, state, {
      allCentersError: action.error,
      fetchedCenters: []
    });
  default:
    return state;
  }
};
