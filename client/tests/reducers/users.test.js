/*eslint-disable */
import expect from 'expect';
import isEmpty from 'lodash/isEmpty';
import getUsersReducer from '../../src/reducers/getUsersReducer';
import registerUserReducer from '../../src/reducers/registerReducer';
import loginUserReducer from '../../src/reducers/loginReducer';
import updateRoleReducer from '../../src/reducers/updateRoleReducer';
import deleteUserReducer from '../../src/reducers/deleteUserReducer';
import * as types from '../../src/actions/actionTypes';
import { users } from '../__mocks__/usersData';

describe('Register User', () => {
  const initialState = {
    isUserRegistering: false,
    registerUserSuccess: '',
    registerUserError: ''
  };
  const state = {};
  it('should return the initial state', () => {
    expect(registerUserReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle REGISTER_USER_SUCCESS', () => {
    const registerUser = {
      type: types.REGISTER_USER_SUCCESS,
      payload: users.user1
    };
    expect(registerUserReducer(state, registerUser)).toEqual([users.user1]);
  });
  it('should handle REGISTER_USER_FAILURE', () => {
    const registerUser = {
      type: types.REGISTER_USER_FAILURE,
      error: 'Unable to register user'
    };
    expect(registerUserReducer(state, registerUser)).toEqual({
      registerUserError: 'Unable to register user'
    });
  });
});

describe('Login User', () => {
  const initialState = {
    isAuthenticated: false,
    user: {}
  };
  it('should return the initial state', () => {
    expect(loginUserReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle SET_CURRENT_USER', () => {
    const loginUser = {
      type: types.SET_CURRENT_USER,
      isAuthenticated: !isEmpty(users.user1),
      user: users.user1
    };
    expect(loginUserReducer({}, loginUser)).toEqual({
      isAuthenticated: true,
      user: users.user1
    });
  });
});

describe('Delete User', () => {
  const initialState = {
    isUserDeleting: false,
    deleteUserSuccess: '',
    deleteUserError: ''
  };
  it('should return the initial state', () => {
    expect(deleteUserReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle IS_USER_DELETING', () => {
    const deleteUser = {
      type: types.IS_USER_DELETING,
      bool: true
    };
    expect(deleteUserReducer({}, deleteUser)).toEqual({
      isUserDeleting: true
    });
  });
  it('should handle DELETE_USER_SUCCESS', () => {
    const deleteUserSuccess = {
      type: types.DELETE_USER_SUCCESS,
      message: 'success'
    };
    expect(deleteUserReducer({}, deleteUserSuccess)).toEqual({
      deleteUserSuccess: 'success'
    });
  });
  it('should handle DELETE_USER_FAILURE', () => {
    const deleteUserFailure = {
      type: types.DELETE_USER_FAILURE,
      error: 'failure'
    };
    expect(deleteUserReducer({}, deleteUserFailure)).toEqual({
      deleteUserError: 'failure'
    });
  });
});
describe('Get Users', () => {
  const initialState = {
    isUsersFetching: false,
    fetchedUsers: [],
    usersError: '',
    moreUsers: true
  };
  const state = {
    fetchedUsers: [],
    moreUsers: true
  };
  it('should return the initial state', () => {
    expect(getUsersReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle IS_USERS_FETCHING', () => {
    const gettingUsers = {
      type: types.IS_USERS_FETCHING,
      bool: true
    };
    expect(getUsersReducer({}, gettingUsers)).toEqual({
      isUsersFetching: true
    });
  });
  it('should handle FETCH_USERS_SUCCESS', () => {
    const getUsersSuccess = {
      type: types.FETCH_USERS_SUCCESS,
      users
    };
    expect(getUsersReducer(state, getUsersSuccess)).toEqual({
      fetchedUsers: [users],
      moreUsers: true
    });
  });
  it('should handle FETCH_USERS_FAILURE', () => {
    const getUsersFailure = {
      type: types.FETCH_USERS_FAILURE,
      error: 'failure'
    };
    expect(getUsersReducer({}, getUsersFailure)).toEqual({
      usersError: 'failure',
      moreUsers: false
    });
  });
});

describe('Set User as Admin', () => {
  const initialState = {
    isUserSetting: false,
    setUserError: '',
    setUserSuccess: ''
  };
  it('should return the initial state', () => {
    expect(updateRoleReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle IS_USER_SETTING', () => {
    const settingUser = {
      type: types.IS_USER_SETTING,
      bool: true
    };
    expect(updateRoleReducer({}, settingUser)).toEqual({
      isUserSetting: true
    });
  });
  it('should handle SET_USER_SUCCESS', () => {
    const setUserSuccess = {
      type: types.SET_USER_SUCCESS,
      message: 'success'
    };
    expect(updateRoleReducer({}, setUserSuccess)).toEqual({
      setUserSuccess: 'success'
    });
  });
  it('should handle SET_USER_FAILURE', () => {
    const setUserFailure = {
      type: types.SET_USER_FAILURE,
      error: 'failure'
    };
    expect(updateRoleReducer({}, setUserFailure)).toEqual({
      setUserError: 'failure'
    });
  });
});
