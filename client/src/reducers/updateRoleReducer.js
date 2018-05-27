import {
  IS_USER_SETTING,
  SET_USER_SUCCESS,
  SET_USER_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isUserSetting: false,
  setUserError: '',
  setUserSuccess: ''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_USER_SETTING:
    return Object.assign({}, state, { isUserSetting: action.bool });
  case SET_USER_SUCCESS:
    return Object.assign({}, state, { setUserSuccess: action.message });
  case SET_USER_FAILURE:
    return Object.assign({}, state, { setUserError: action.error });
  default:
    return state;
  }
};
