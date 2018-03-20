import {
  IS_CENTERS_FETCHING,
  FETCH_CENTERS_SUCCESS,
  FETCH_CENTERS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isCentersFetching: false,
  fetchedAllCenters: [],
  allCentersError: ''
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_CENTERS_FETCHING:
    return Object.assign({}, state, { isCentersFetching: action.bool });
  case FETCH_CENTERS_SUCCESS:
    console.log(action.centers);
    return Object.assign({}, state, {
      fetchedAllCenters: action.centers
    });
  case FETCH_CENTERS_FAILURE:
    return Object.assign({}, state, {
      allCentersError: action.error,
      fetchedAllCenters: []
    });
  default:
    return state;
  }
};
