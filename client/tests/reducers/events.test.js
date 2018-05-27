/*eslint-disable */
import expect from 'expect';
import getEventsReducer from '../../src/reducers/allEventsReducer';
import createEventReducer from '../../src/reducers/createEventReducer';
import deleteEventReducer from '../../src/reducers/deleteEventReducer';
import updateEventReducer from '../../src/reducers/editEventReducer';
import getUserEventsReducer from '../../src/reducers/userEventsReducer';
import getUsersHistoryReducer from '../../src/reducers/userHistoryReducer';
import getCenterEventsReducer from '../../src/reducers/centerEventsReducer';
import * as types from '../../src/actions/actionTypes';
import { events } from '../__mocks__/eventsData';

describe('Get Events', () => {
  const initialState = {
    isEventsFetching: false,
    fetchedEvents: [],
    allEventsError: '',
    moreEvents: true
  };
  const state = {
    fetchedEvents: [],
    moreEvents: true
  };
  it('should return the initial state', () => {
    expect(getEventsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_EVENTS_FETCHING', () => {
    const gettingEvents = {
      type: types.IS_EVENTS_FETCHING,
      bool: true
    };
    expect(getEventsReducer({}, gettingEvents)).toEqual({
      isEventsFetching: true
    });
  });

  it('should handle FETCH_EVENTS_SUCCESS', () => {
    const getEventsSuccess = {
      type: types.FETCH_EVENTS_SUCCESS,
      events
    };
    expect(getEventsReducer(state, getEventsSuccess)).toEqual({
      fetchedEvents: [events],
      moreEvents: true
    });
  });

  it('should handle FETCH_EVENTS_FAILURE', () => {
    const getEventsError = {
      type: types.FETCH_EVENTS_FAILURE,
      error: true
    };
    expect(getEventsReducer({}, getEventsError)).toEqual({
      allEventsError: true,
      moreEvents: false
    });
  });
});

describe('Create Event', () => {
  const initialState = {
    isEventCreating: false,
    createEventError: '',
    createEventSuccess: ''
  };
  it('should return the initial state', () => {
    expect(createEventReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_EVENT_CREATING', () => {
    const creatingEvent = {
      type: types.IS_EVENT_CREATING,
      bool: true
    };
    expect(createEventReducer({}, creatingEvent)).toEqual({
      isEventCreating: true
    });
  });

  it('should handle CREATE_EVENT_SUCCESS', () => {
    const createEventSuccess = {
      type: types.CREATE_EVENT_SUCCESS,
      message: 'success'
    };
    expect(createEventReducer({}, createEventSuccess)).toEqual({
      createEventSuccess: 'success'
    });
  });

  it('should handle CREATE_EVENT_FAILURE', () => {
    const createEventFailure = {
      type: types.CREATE_EVENT_FAILURE,
      error: 'failure'
    };
    expect(createEventReducer({}, createEventFailure)).toEqual({
      createEventError: 'failure'
    });
  });
});

describe('Update Event', () => {
  const initialState = {
    isEventUpdating: false,
    updateEventError: '',
    updateEventSuccess: ''
  };
  it('should return the initial state', () => {
    expect(updateEventReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_EVENT_UPDATING', () => {
    const updatingEvent = {
      type: types.IS_EVENT_UPDATING,
      bool: true
    };
    expect(updateEventReducer({}, updatingEvent)).toEqual({
      isEventUpdating: true
    });
  });

  it('should handle UPDATE_EVENT_SUCCESS', () => {
    const updateEventSuccess = {
      type: types.UPDATE_EVENT_SUCCESS,
      message: 'success'
    };
    expect(updateEventReducer({}, updateEventSuccess)).toEqual({
      updateEventSuccess: 'success'
    });
  });

  it('should handle UPDATE_EVENT_FAILURE', () => {
    const updateEventFailure = {
      type: types.UPDATE_EVENT_FAILURE,
      error: 'failure'
    };
    expect(updateEventReducer({}, updateEventFailure)).toEqual({
      updateEventError: 'failure'
    });
  });
});

describe('Delete Event', () => {
  const initialState = {
    isEventDeleting: false,
    deleteEventSuccess: '',
    deleteEventError: ''
  };
  it('should return the initial state', () => {
    expect(deleteEventReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_EVENT_DELETING', () => {
    const deletingEvent = {
      type: types.IS_EVENT_DELETING,
      bool: true
    };
    expect(deleteEventReducer({}, deletingEvent)).toEqual({
      isEventDeleting: true
    });
  });
  it('should handle DELETE_EVENT_SUCCESS', () => {
    const deleteEventSuccess = {
      type: types.DELETE_EVENT_SUCCESS,
      message: 'success'
    };
    expect(deleteEventReducer({}, deleteEventSuccess)).toEqual({
      deleteEventSuccess: 'success'
    });
  });
  it('should handle DELETE_EVENT_FAILURE', () => {
    const deleteEventFailure = {
      type: types.DELETE_EVENT_FAILURE,
      error: 'failure'
    };
    expect(deleteEventReducer({}, deleteEventFailure)).toEqual({
      deleteEventError: 'failure'
    });
  });
});

describe('Get User Events', () => {
  const initialState = {
    isUserEventsFetching: false,
    fetchedUserEvents: [],
    userEventsError: '',
    moreEvents: true
  };
  const state = {
    fetchedUserEvents: [],
    moreEvents: true
  };
  it('should return the initial state', () => {
    expect(getUserEventsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_USER_EVENTS_FETCHING', () => {
    const fetchingEvents = {
      type: types.IS_USER_EVENTS_FETCHING,
      bool: true
    };
    expect(getUserEventsReducer({}, fetchingEvents)).toEqual({
      isUserEventsFetching: true
    });
  });
  it('should handle FETCH_USER_EVENTS_SUCCESS', () => {
    const fetchEventsSuccess = {
      type: types.FETCH_USER_EVENTS_SUCCESS,
      message: 'success'
    };
    expect(getUserEventsReducer(state, fetchEventsSuccess)).toEqual({
      fetchedUserEvents: [events],
      moreEvents: true
    });
  });
  it('should handle FETCH_USER_EVENTS_FAILURE', () => {
    const fetchEventsFailure = {
      type: types.FETCH_USER_EVENTS_FAILURE,
      error: 'failure'
    };
    expect(getUserEventsReducer({}, fetchEventsFailure)).toEqual({
      userEventsError: 'failure',
      moreEvents: false
    });
  });
});

describe('Get Users History', () => {
  const initialState = {
    isUserHistoryFetching: false,
    fetchedUserHistory: [],
    userHistoryError: '',
    moreHistory: true
  };
  const state = {
    fetchedUserHistory: [],
    moreHistory: true
  };
  it('should return the initial state', () => {
    expect(getUsersHistoryReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_USER_HISTORY_FETCHING', () => {
    const fetchingEvents = {
      type: types.IS_USER_HISTORY_FETCHING,
      bool: true
    };
    expect(getUsersHistoryReducer({}, fetchingEvents)).toEqual({
      isUserHistoryFetching: true
    });
  });
  it('should handle FETCH_USER_HISTORY_SUCCESS', () => {
    const fetchHistorySuccess = {
      type: types.FETCH_USER_HISTORY_SUCCESS,
      message: 'success'
    };
    expect(getUsersHistoryReducer(state, fetchHistorySuccess)).toEqual({
      fetchedUserHistory: [events],
      moreHistory: true
    });
  });
  it('should handle FETCH_USER_HISTORY_FAILURE', () => {
    const fetchHistoryFailure = {
      type: types.FETCH_USER_HISTORY_FAILURE,
      error: 'failure'
    };
    expect(getUsersHistoryReducer({}, fetchHistoryFailure)).toEqual({
      userHistoryError: 'failure',
      moreHistory: false
    });
  });
});

describe('Get Center Events', () => {
  const initialState = {
    isCenterEventsFetching: false,
    fetchedCenterEvents: [],
    centerEventsError: '',
    moreCenter: true
  };
  const state = {
    fetchedCenterEvents: [],
    moreCenter: true
  };
  it('should return the initial state', () => {
    expect(getCenterEventsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_CENTER_EVENTS_FETCHING', () => {
    const gettingCenterEvents = {
      type: types.IS_CENTER_EVENTS_FETCHING,
      bool: true
    };
    expect(getCenterEventsReducer({}, gettingCenterEvents)).toEqual({
      isCenterEventsFetching: true
    });
  });

  it('should handle FETCH_CENTER_EVENTS_SUCCESS', () => {
    const getCenterEventsSuccess = {
      type: types.FETCH_CENTER_EVENTS_SUCCESS,
      events
    };
    expect(getCenterEventsReducer(state, getCenterEventsSuccess)).toEqual({
      fetchedCenterEvents: events,
      moreCenter: true
    });
  });

  it('should handle FETCH_CENTER_EVENTS_FAILURE', () => {
    const getCentersEventsError = {
      type: types.FETCH_CENTER_EVENTS_FAILURE,
      error: 'failure'
    };
    expect(getCenterEventsReducer({}, getCentersEventsError)).toEqual({
      centerEventsError: 'failure',
      moreCenter: false
    });
  });

  it('should handle CLEAR_CENTER_EVENTS', () => {
    const clearCenterEvents = {
      type: types.CLEAR_CENTER_EVENTS,
      empty: {}
    };
    expect(getCenterEventsReducer({}, clearCenterEvents)).toEqual({
      fetchedCenterEvents: {},
      moreCenters: true
    });
  });
});
