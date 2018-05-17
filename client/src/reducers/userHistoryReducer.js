import {
  IS_USER_HISTORY_FETCHING,
  FETCH_USER_HISTORY_SUCCESS,
  FETCH_USER_HISTORY_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isUserHistoryFetching: false,
  fetchedUserHistory: [],
  userHistoryError: '',
  moreHistory: true
};
let newState;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_USER_HISTORY_FETCHING:
    return Object.assign({}, state, { isUserHistoryFetching: action.bool });
  case FETCH_USER_HISTORY_SUCCESS:
    newState = Object.assign({}, state);
    newState.fetchedUserHistory = newState.fetchedUserHistory.concat(action.history);
    return newState;
  case FETCH_USER_HISTORY_FAILURE:
    return Object.assign({}, state, {
      userHistoryError: action.error,
      moreHistory: false
    });
  default:
    return state;
  }
};

