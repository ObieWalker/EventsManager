import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import getCenters, { clearCenterState }
  from '../../src/actions/getAllCentersAction';
import addCenter from '../../src/actions/addCenterAction';
import deleteCenter from '../../src/actions/deleteCenterAction';
import editCenter from '../../src/actions/editCenterAction';
import getCenter from '../../src/actions/getACenterAction';
import * as types from '../../src/actions/actionTypes';
import { centers } from '../__mocks__/centersData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch centers actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles FETCH_CENTERS_SUCCESS after fetching centers', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Centers have been returned successfully',
          centers
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTERS_FETCHING, bool: true },
      { type: types.FETCH_CENTERS_SUCCESS, centers },
      { type: types.IS_CENTERS_FETCHING, bool: false }
    ];
    const store = mockStore({ centers: [] });
    return store.dispatch(getCenters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles FETCH_CENTERS_FAILURE after fetching centers', () => {
    const error = 'No centers available';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No centers available'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTERS_FETCHING, bool: true },
      { type: types.FETCH_CENTERS_FAILURE, error },
      { type: types.IS_CENTERS_FETCHING, bool: false }
    ];
    const store = mockStore({ centers: [] });
    return store.dispatch(getCenters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles CLEAR_CENTER_STATE to remove all centers', () => {
    const empty = [];
    const expectedActions = [{ type: types.CLEAR_CENTER_STATE, empty }];
    const store = mockStore({ centers: [] });
    store.dispatch(clearCenterState());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('add center actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates CREATE_CENTER_SUCCESS after adding centers', () => {
    const center = centers.center1;
    const message = 'The center has been added';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          message: 'The center has been added',
          center
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTER_CREATING, bool: true },
      { type: types.CREATE_CENTER_SUCCESS, center, message },
      { type: types.IS_CENTER_CREATING, bool: false }
    ];
    const store = mockStore({ center: [] });
    return store.dispatch(addCenter(center)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates CREATE_CENTER_FAILURE after adding centers', () => {
    const error = 'Your request could not be processed';
    const center = centers.center1;
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
      { type: types.IS_CENTER_CREATING, bool: true },
      { type: types.CREATE_CENTER_FAILURE, error },
      { type: types.IS_CENTER_CREATING, bool: false }
    ];
    const store = mockStore({ center: [] });
    return store.dispatch(addCenter(center)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('delete center actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles DELETE_CENTER_SUCCESS after deleting a center', () => {
    const id = 6;
    const message = 'The center has been deleted!';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'The center has been deleted!'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTER_DELETING, bool: true },
      { type: types.DELETE_CENTER_SUCCESS, id, message },
      { type: types.IS_CENTER_DELETING, bool: false }
    ];
    const store = mockStore({ center: [] });
    return store.dispatch(deleteCenter(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles DELETE_CENTER_FAILURE when failing to delete a center', () => {
    const error = 'No such center';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No such center'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTER_DELETING, bool: true },
      { type: types.DELETE_CENTER_FAILURE, error },
      { type: types.IS_CENTER_DELETING, bool: false }
    ];
    const store = mockStore({ center: [] });
    return store.dispatch(deleteCenter(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('edit a center actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles UPDATE_CENTER_SUCCESS after editing a center', () => {
    const message = 'The center has been modified';
    const center = centers.center2;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          center,
          message: 'The center has been modified'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTER_UPDATING, bool: true },
      { type: types.UPDATE_CENTER_SUCCESS, message, updatedCenter: center },
      { type: types.IS_CENTER_UPDATING, bool: false }
    ];
    const store = mockStore({ center: [] });
    return store.dispatch(editCenter(center, 6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles UPDATE_CENTER_FAILURE when failing to edit a center', () => {
    const error = 'No center found';
    const center = centers.center2;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No center found'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTER_UPDATING, bool: true },
      { type: types.UPDATE_CENTER_FAILURE, error },
      { type: types.IS_CENTER_UPDATING, bool: false }
    ];
    const store = mockStore({ center: [] });
    return store.dispatch(editCenter(center, 6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('get a center actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles FETCH_CENTER_SUCCESS after getting a center', () => {
    const center = centers.center2;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          center
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTER_FETCHING, bool: true },
      { type: types.FETCH_CENTER_SUCCESS, center },
      { type: types.IS_CENTER_FETCHING, bool: false }
    ];
    const store = mockStore({ center: [] });
    return store.dispatch(getCenter(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles UPDATE_CENTER_FAILURE when failing to get a center', () => {
    const error = 'We do not have records of this center';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'We do not have records of this center'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_CENTER_FETCHING, bool: true },
      { type: types.FETCH_CENTER_FAILURE, error },
      { type: types.IS_CENTER_FETCHING, bool: false }
    ];
    const store = mockStore({ center: [] });
    return store.dispatch(getCenter(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
