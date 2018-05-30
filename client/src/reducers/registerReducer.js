import {
  REGISTERING_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isUserRegistering: false,
  registerUserSuccess: '',
  registerUserError: ''
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
  case REGISTERING_USER:
    return Object.assign({}, state, { isUserRegistering: action.bool });
  case REGISTER_USER_SUCCESS:
    return [action.payload, ...state];
  case REGISTER_USER_FAILURE:
    return Object.assign({}, state, { registerUserError: action.error });
  default:
    return state;
  }
};

export default registerReducer;
