import { GET_CENTER_DETAILS } from '../actions/actionTypes';


const getACenterReducer = (state = [], action) => {
  switch (action.type) {
  case GET_CENTER_DETAILS:
    return state.map(center =>
      (action.center.id === center.id ? action.center : center));
  default:
    return state;
  }
};

export default getACenterReducer;
