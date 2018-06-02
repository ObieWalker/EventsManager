import isEmpty from 'lodash/isEmpty';

import { SET_CURRENT_USER, SET_USER_FAILURE } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {},
  loginError: ''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      isAuthenticated: !isEmpty(action.user),
      user: action.user
    };
  case SET_USER_FAILURE:
    return Object.assign({}, state, {
      loginError: action.error
    });
  default:
    return state;
  }
};
