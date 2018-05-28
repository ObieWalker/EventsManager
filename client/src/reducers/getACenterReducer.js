import {
  IS_CENTER_FETCHING,
  FETCH_CENTER_SUCCESS,
  FETCH_CENTER_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isCenterFetching: false,
  center: {},
  centerError: ''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_CENTER_FETCHING:
    return Object.assign({}, state, { isCenterFetching: action.bool });
  case FETCH_CENTER_SUCCESS:
    return Object.assign({}, state, { center: action.center });
  case FETCH_CENTER_FAILURE:
    return Object.assign({}, state, {
      centerError: action.error
    });
  default:
    return state;
  }
};
