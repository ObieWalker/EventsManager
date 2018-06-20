import {
  IS_USERS_FETCHING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  MODIFY_USER_ROLE,
  DELETE_USER
} from '../actions/actionTypes';

const initialState = {
  isUsersFetching: false,
  fetchedUsers: [],
  usersError: '',
  moreUsers: true
};
let newState;
let userIndex;
let editUser;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_USERS_FETCHING:
    return Object.assign({}, state, { isUsersFetching: action.bool });
  case FETCH_USERS_SUCCESS:
    newState = Object.assign({}, state);
    newState.fetchedUsers = newState.fetchedUsers.concat(action.users);
    return newState;
  case MODIFY_USER_ROLE:
    newState = Object.assign({}, state);
    userIndex = newState.fetchedUsers.findIndex(user => user.id === action.user.id);
    editUser = newState.fetchedUsers[userIndex];
    editUser.isAdmin = !editUser.isAdmin;
    newState.fetchedUsers = [
      ...newState.fetchedUsers.splice(0, userIndex),
      editUser,
      ...newState.fetchedUsers.splice(
        userIndex + 1,
        newState.fetchedUsers.length
      )
    ];
    return newState;
  case DELETE_USER:
    newState = Object.assign({}, state);
    userIndex = newState.fetchedUsers.findIndex(user => user.id === action.id);
    newState.fetchedUsers = [
      ...newState.fetchedUsers.splice(0, userIndex),
      ...newState.fetchedUsers.splice(
        userIndex + 1,
        newState.fetchedUsers.length
      )
    ];
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
