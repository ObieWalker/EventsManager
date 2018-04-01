import {
  IS_CENTER_UPDATING,
  UPDATE_CENTER_SUCCESS,
  UPDATE_CENTER_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isCenterUpdating: false,
  updateCenterError: '',
  updateCenterSuccess: ''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_CENTER_UPDATING:
    return Object.assign({}, state, { isCenterUpdating: action.bool });
  case UPDATE_CENTER_SUCCESS:
    return Object.assign({}, state, { updateCenterSuccess: action.message });
  case UPDATE_CENTER_FAILURE:
    return Object.assign({}, state, { updateCenterError: action.error });
  default:
    return state;
  }
};

