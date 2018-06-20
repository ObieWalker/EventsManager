import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import getEvents from '../../src/actions/getAllEventsAction';
import addEvent from '../../src/actions/addEventAction';
import editEvent from '../../src/actions/editEventAction';
import deleteEvent from '../../src/actions/deleteEventAction';
import cancelEvent from '../../src/actions/cancelEventAction';
import userEvents from '../../src/actions/getUserEventsAction';
import userHistory from '../../src/actions/getUserHistoryAction';
import centerEvents, { clearCenterEvents } from '../../src/actions/getCenterEventsAction';
import * as types from '../../src/actions/actionTypes';
import { events } from '../__mocks__/eventsData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch events actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates FETCH_EVENTS_SUCCESS after fetching events', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Events have been returned successfully',
          events
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENTS_FETCHING, bool: true },
      { type: types.FETCH_EVENTS_SUCCESS, events },
      { type: types.IS_EVENTS_FETCHING, bool: false }
    ];
    const store = mockStore({ events: [] });
    return store.dispatch(getEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_EVENTS_FAILURE after fetching centers', () => {
    const error = 'No events available';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No events available'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENTS_FETCHING, bool: true },
      { type: types.FETCH_EVENTS_FAILURE, error },
      { type: types.IS_EVENTS_FETCHING, bool: false }
    ];
    const store = mockStore({ events: [] });
    return store.dispatch(getEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('add event actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates CREATE_EVENT_SUCCESS after adding an event', () => {
    // const newEvent = events.event1;
    const event = events.event1;
    const message = 'Your event has been booked';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          message: 'Your event has been booked',
          newEvent: event
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENT_CREATING, bool: true },
      { type: types.CREATE_EVENT_SUCCESS, event, message },
      { type: types.IS_EVENT_CREATING, bool: false }
    ];
    const store = mockStore({ event: [] });
    return store.dispatch(addEvent(event)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates CREATE_EVENT_FAILURE after adding an event', () => {
    const error = 'Your request could not be processed';
    const event = events.event1;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'Your request could not be processed'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENT_CREATING, bool: true },
      { type: types.CREATE_EVENT_FAILURE, error },
      { type: types.IS_EVENT_CREATING, bool: false }
    ];
    const store = mockStore({ event: [] });
    return store.dispatch(addEvent(event)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('edit an event actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles UPDATE_EVENT_SUCCESS after editing an event', () => {
    const message = 'Your event has been updated';
    const event = { ...events.event2, centerName: 'Now here' };
    const newEvent = event;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Your event has been updated',
          updated: {
            Center: {},
            event
          },
          newEvent
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENT_UPDATING, bool: true },
      { type: types.UPDATE_EVENT_SUCCESS, event, message },
      {
        type: types.MODIFY_EVENT,
        event: { Center: { name: 'Now here' }, event }
      },
      { type: types.IS_EVENT_UPDATING, bool: false }
    ];
    const store = mockStore({ event: [] });
    return store.dispatch(editEvent(event, 6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles UPDATE_EVENT_FAILURE when failing to edit a center', () => {
    const error = 'Event does not exist within our records';
    const event = events.event2;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'Event does not exist within our records'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENT_UPDATING, bool: true },
      { type: types.UPDATE_EVENT_FAILURE, error },
      { type: types.IS_EVENT_UPDATING, bool: false }
    ];
    const store = mockStore({ event: [] });
    return store.dispatch(editEvent(event, 6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('delete event actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles DELETE_EVENT_SUCCESS after deleting an event', () => {
    const payload = 6;
    const id = payload;
    const message = 'This wedding has been cancelled';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'This wedding has been cancelled',
          eventId: 6
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENT_DELETING, bool: true },
      { type: types.DELETE_EVENT_SUCCESS, payload, message },
      { type: types.DELETE_EVENT, id },
      { type: types.IS_EVENT_DELETING, bool: false }
    ];
    const store = mockStore({ event: [] });
    return store.dispatch(deleteEvent(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles DELETE_EVENT_FAILURE when failing to delete an event', () => {
    const error = 'Event not found';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'Event not found'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENT_DELETING, bool: true },
      { type: types.DELETE_EVENT_FAILURE, error },
      { type: types.IS_EVENT_DELETING, bool: false }
    ];
    const store = mockStore({ event: [] });
    return store.dispatch(deleteEvent(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('cancel event actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles CANCEL_EVENT_SUCCESS after cancelling an event', () => {
    const payload = 6;
    const message = 'The event has been cancelled';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'The event has been cancelled',
          eventId: 6
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENT_CANCELING, bool: true },
      { type: types.CANCEL_EVENT_SUCCESS, payload, message },
      { type: types.IS_EVENT_CANCELING, bool: false }
    ];
    const store = mockStore({ event: [] });
    return store.dispatch(cancelEvent(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles DELETE_EVENT_FAILURE when failing to cancel an event', () => {
    const error = 'Event not found';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'Event not found'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_EVENT_CANCELING, bool: true },
      { type: types.CANCEL_EVENT_FAILURE, error },
      { type: types.IS_EVENT_CANCELING, bool: false }
    ];
    const store = mockStore({ event: [] });
    return store.dispatch(cancelEvent(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('fetch user events actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates FETCH_USER_EVENTS_SUCCESS after fetching user events', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Events have been returned successfully',
          events
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USER_EVENTS_FETCHING, bool: true },
      { type: types.FETCH_USER_EVENTS_SUCCESS, events },
      { type: types.IS_USER_EVENTS_FETCHING, bool: false }
    ];
    const store = mockStore({ events: [] });
    return store.dispatch(userEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_EVENTS_FAILURE after fetching user events', () => {
    const error = 'No events available';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No events available'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USER_EVENTS_FETCHING, bool: true },
      { type: types.FETCH_USER_EVENTS_FAILURE, error },
      { type: types.IS_USER_EVENTS_FETCHING, bool: false }
    ];
    const store = mockStore({ events: [] });
    return store.dispatch(userEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('fetch user history actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates FETCH_USER_HISTORY_SUCCESS after fetching user history', () => {
    const history = events;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Events have been returned successfully',
          events
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USER_HISTORY_FETCHING, bool: true },
      { type: types.FETCH_USER_HISTORY_SUCCESS, history },
      { type: types.IS_USER_HISTORY_FETCHING, bool: false }
    ];
    const store = mockStore({ events: [] });
    return store.dispatch(userHistory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_USER_HISTORY_FAILURE after fetching user history', () => {
    const error = 'No events available';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No events available'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USER_HISTORY_FETCHING, bool: true },
      { type: types.FETCH_USER_HISTORY_FAILURE, error },
      { type: types.IS_USER_HISTORY_FETCHING, bool: false }
    ];
    const store = mockStore({ events: [] });
    return store.dispatch(userHistory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('fetch center events actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates FETCH_CENTER_EVENTS_SUCCESS after fetching events', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Events have been returned successfully',
          events
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTER_EVENTS_FETCHING, bool: true },
      { type: types.FETCH_CENTER_EVENTS_SUCCESS, events },
      { type: types.IS_CENTER_EVENTS_FETCHING, bool: false }
    ];
    const store = mockStore({ events: [] });
    return store.dispatch(centerEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_EVENTS_FAILURE after fetching centers', () => {
    const error = 'No events available';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No events available'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTER_EVENTS_FETCHING, bool: true },
      { type: types.FETCH_CENTER_EVENTS_FAILURE, error },
      { type: types.IS_CENTER_EVENTS_FETCHING, bool: false }
    ];
    const store = mockStore({ events: [] });
    return store.dispatch(centerEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('handles CLEAR_CENTER_EVENTS to remove all events', () => {
    const empty = [];
    const expectedActions = [{ type: types.CLEAR_CENTER_EVENTS, empty }];
    const store = mockStore({ events: [] });
    store.dispatch(clearCenterEvents());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
