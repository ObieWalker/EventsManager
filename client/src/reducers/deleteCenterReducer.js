import {
  IS_CENTER_DELETING,
  DELETE_CENTER_SUCCESS,
  DELETE_CENTER_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isCenterDeleting: false,
  deleteCenterSuccess: '',
  deleteCenterError: ''
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_CENTER_DELETING:
    return { ...state, isCenterDeleting: action.bool };
  case DELETE_CENTER_SUCCESS:
    return { ...state, deleteCenterSuccess: action.message };
  case DELETE_CENTER_FAILURE:
    return { ...state, deleteCenterError: action.error };
  default:
    return state;
  }
};
