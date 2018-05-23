import {
  IS_EVENT_DELETING,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isEventDeleting: false,
  deleteEventSuccess: '',
  deleteEventError: ''
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_EVENT_DELETING:
    return { ...state, isEventDeleting: action.bool };
  case DELETE_EVENT_SUCCESS:
    return { ...state, deleteEventSuccess: action.message };
  case DELETE_EVENT_FAILURE:
    return { ...state, deleteEventError: action.error };
  default:
    return state;
  }
};

