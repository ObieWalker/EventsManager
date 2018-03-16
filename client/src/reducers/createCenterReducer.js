import {
  IS_CENTER_CREATING,
  CREATE_CENTER_SUCCESS,
  CREATE_CENTER_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isCenterCreating: false,
  createCenterError: '',
  createCenterSuccess: ''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_CENTER_CREATING:
    return Object.assign({}, state, { isCenterCreating: action.bool });
  case CREATE_CENTER_SUCCESS:
    return Object.assign({}, state, { createCenterSuccess: action.message });
  case CREATE_CENTER_FAILURE:
    return Object.assign({}, state, { createCenterError: action.error });
  default:
    return state;
  }
};
