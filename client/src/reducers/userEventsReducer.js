import {
  IS_USER_EVENTS_FETCHING,
  FETCH_USER_EVENTS_SUCCESS,
  FETCH_USER_EVENTS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isUserEventsFetching: false,
  fetchedUserEvents: [],
  userEventsError: '',
  moreEvents: true
};
let newState;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_USER_EVENTS_FETCHING:
    return Object.assign({}, state, { isUserEventsFetching: action.bool });
  case FETCH_USER_EVENTS_SUCCESS:
    newState = Object.assign({}, state);
    newState.fetchedUserEvents =
    newState.fetchedUserEvents.concat(action.events);
    return newState;
  case FETCH_USER_EVENTS_FAILURE:
    return Object.assign({}, state, {
      userEventsError: action.error,
      moreEvents: false
    });
  default:
    return state;
  }
};
