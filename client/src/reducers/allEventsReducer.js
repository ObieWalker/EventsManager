import {
  IS_EVENTS_FETCHING,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isEventsFetching: false,
  fetchedEvents: [],
  allEventsError: ''
};
let newState;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_EVENTS_FETCHING:
    return Object.assign({}, state, { isEventsFetching: action.bool });
  case FETCH_EVENTS_SUCCESS:
    newState = Object.assign({}, state);
    newState.fetchedEvents = newState.fetchedEvents.concat(action.events);
    return newState;
  case FETCH_EVENTS_FAILURE:
    return Object.assign({}, state, {
      allEventsError: action.error,
      fetchedEvents: []
    });
  default:
    return state;
  }
};

