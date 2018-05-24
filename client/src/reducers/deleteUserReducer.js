import {
  IS_USER_DELETING,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isUserDeleting: false,
  deleteUserSuccess: '',
  deleteUserError: ''
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_USER_DELETING:
    return { ...state, isUserDeleting: action.bool };
  case DELETE_USER_SUCCESS:
    return { ...state, deleteUserSuccess: action.message };
  case DELETE_USER_FAILURE:
    return { ...state, deleteUserError: action.error };
  default:
    return state;
  }
};

