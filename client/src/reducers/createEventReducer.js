import {
  IS_EVENT_CREATING,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isEventCreating: false,
  createEventError: '',
  createEventSuccess: ''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_EVENT_CREATING:
    return Object.assign({}, state, { isEventCreating: action.bool });
  case CREATE_EVENT_SUCCESS:
    return Object.assign({}, state, { createEventSuccess: action.message });
  case CREATE_EVENT_FAILURE:
    return Object.assign({}, state, { createEventError: action.error });
  default:
    return state;
  }
};
