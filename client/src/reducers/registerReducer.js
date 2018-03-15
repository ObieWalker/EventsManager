import { REGISTER_USER } from '../actions/actionTypes';

const registerReducer = (state = [], action) => {
  switch (action.type) {
  case REGISTER_USER:
    return [action.payload, ...state];
  default:
    return state;
  }
};

export default registerReducer;

