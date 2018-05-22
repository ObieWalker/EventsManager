import {
  IS_CENTER_EVENTS_FETCHING,
  FETCH_CENTER_EVENTS_SUCCESS,
  FETCH_CENTER_EVENTS_FAILURE,
  CLEAR_CENTER_EVENTS
} from '../actions/actionTypes';

const initialState = {
  isCenterEventsFetching: false,
  fetchedCenterEvents: [],
  centerEventsError: '',
  moreCenter: true
};
let newState;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case IS_CENTER_EVENTS_FETCHING:
    return Object.assign({}, state, { isCenterEventsFetching: action.bool });
  case FETCH_CENTER_EVENTS_SUCCESS:
    newState = Object.assign({}, state);
    newState.fetchedCenterEvents = action.events;
    return newState;
  case FETCH_CENTER_EVENTS_FAILURE:
    return Object.assign({}, state, {
      centerEventsError: action.error,
      moreCenter: false
    });
  case CLEAR_CENTER_EVENTS:
    newState = Object.assign({}, state);
    newState.fetchedCenterEvents = action.empty;
    newState.moreCenters = true;
    return newState;
  default:
    return state;
  }
};

