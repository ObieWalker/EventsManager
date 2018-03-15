import { ADD_EVENT, EDIT_AN_EVENT, DELETE_AN_EVENT }
  from '../actions/actionTypes';

const eventReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_EVENT:
    return [action.payload, ...state];
  case EDIT_AN_EVENT:
    return state.map(event =>
      (action.event.id === event.id ? action.event : event));
  case DELETE_AN_EVENT:
    return state.filter(event => event.id !== action.payload);
  default:
    return state;
  }
};
export default eventReducer;
