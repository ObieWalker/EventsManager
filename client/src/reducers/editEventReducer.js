import {
  IS_EVENT_UPDATING,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE
}
  from '../actions/actionTypes';

const initialState = {
  isEventUpdating: false,
  updateEventSuccess: '',
  updateEventError: ''
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_EVENT_UPDATING:
    return Object.assign({}, state, { isEventUpdating: action.bool });
  case UPDATE_EVENT_SUCCESS:
    return Object.assign({}, state, { updateEventSuccess: action.message });
  case UPDATE_EVENT_FAILURE:
    return Object.assign({}, state, { updateEventError: action.error });
  default:
    return state;
  }
};

