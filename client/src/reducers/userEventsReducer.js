import {
  IS_USER_EVENTS_FETCHING,
  FETCH_USER_EVENTS_SUCCESS,
  FETCH_USER_EVENTS_FAILURE,
  MODIFY_EVENT,
  DELETE_EVENT
} from '../actions/actionTypes';

const initialState = {
  isUserEventsFetching: false,
  fetchedUserEvents: [],
  userEventsError: '',
  moreEvents: true
};
let newState;
let eventIndex;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_USER_EVENTS_FETCHING:
    return Object.assign({}, state, { isUserEventsFetching: action.bool });
  case FETCH_USER_EVENTS_SUCCESS:
    newState = Object.assign({}, state);
    newState.fetchedUserEvents = newState.fetchedUserEvents
      .concat(action.events);
    return newState;
  case MODIFY_EVENT:
    newState = Object.assign({}, state);
    newState.fetchedUserEvents = newState.fetchedUserEvents.map((event) => {
      if (event.id === action.event.id) return action.event;
      return event;
    });
    return newState;
  case DELETE_EVENT:
    newState = Object.assign({}, state);
    eventIndex = newState.fetchedUserEvents.findIndex(event =>
      event.id === action.id);
    newState.fetchedUserEvents = [
      ...newState.fetchedUserEvents.splice(0, eventIndex),
      ...newState.fetchedUserEvents.splice(
        eventIndex + 1,
        newState.fetchedUserEvents.length
      )
    ];
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
