import {
  IS_USERS_FETCHING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isUsersFetching: false,
  fetchedUsers: [],
  usersError: '',
  moreUsers: true
};
let newState;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_USERS_FETCHING:
    return Object.assign({}, state, { isUsersFetching: action.bool });
  case FETCH_USERS_SUCCESS:
    newState = Object.assign({}, state);
    newState.fetchedUsers = newState.fetchedUsers.concat(action.users);
    return newState;
  case FETCH_USERS_FAILURE:
    return Object.assign({}, state, {
      usersError: action.error,
      moreUsers: false
    });
  default:
    return state;
  }
};
