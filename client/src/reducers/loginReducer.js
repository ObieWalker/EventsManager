import { LOGIN_USER } from '../actions/actionTypes';

const loginReducer = (state = [], action) => {
  switch (action.type) {
  case LOGIN_USER:
    return [action.payload, ...state];
  default:
    return state;
  }
};

export default loginReducer;
