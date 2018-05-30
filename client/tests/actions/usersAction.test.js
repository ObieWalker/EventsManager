import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import getUsers from '../../src/actions/getUsersAction';
import deleteUser from '../../src/actions/deleteUserAction';
import logOut from '../../src/actions/logOutAction';
import registerUser from '../../src/actions/registerUserAction';
import setUser from '../../src/actions/setAsAdminAction';
import userSession from '../../src/actions/UserSessionAction';
import * as types from '../../src/actions/actionTypes';
import { users, response } from '../__mocks__/usersData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch users actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates FETCH_USERS_SUCCESS after fetching users', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Users have been returned successfully',
          users
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USERS_FETCHING, bool: true },
      { type: types.FETCH_USERS_SUCCESS, users },
      { type: types.IS_USERS_FETCHING, bool: false }
    ];
    const store = mockStore({ users: [] });
    return store.dispatch(getUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_USERS_FAILURE after fetching centers', () => {
    const error = 'No users available';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No users available'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USERS_FETCHING, bool: true },
      { type: types.FETCH_USERS_FAILURE, error },
      { type: types.IS_USERS_FETCHING, bool: false }
    ];
    const store = mockStore({ users: [] });
    return store.dispatch(getUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('delete user actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles DELETE_USER_SUCCESS after deleting a user', () => {
    const id = 6;
    const message = 'This user has been deleted!';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'This user has been deleted!'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USER_DELETING, bool: true },
      { type: types.DELETE_USER_SUCCESS, id, message },
      { type: types.IS_USER_DELETING, bool: false }
    ];
    const store = mockStore({ user: [] });
    return store.dispatch(deleteUser(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles DELETE_CENTER_FAILURE when failing to delete a center', () => {
    const error = 'No such user';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No such user'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USER_DELETING, bool: true },
      { type: types.DELETE_USER_FAILURE, error },
      { type: types.IS_USER_DELETING, bool: false }
    ];
    const store = mockStore({ user: [] });
    return store.dispatch(deleteUser(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('set user role actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles SET_USER_SUCCESS after modifying a user role', () => {
    const user = users.user1;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          user
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USER_SETTING, bool: true },
      { type: types.SET_USER_SUCCESS, user },
      { type: types.IS_USER_SETTING, bool: false }
    ];
    const store = mockStore({ user: [] });
    return store.dispatch(setUser(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles SET_USER_FAILURE when failing to modify a user role', () => {
    const error = 'No such user';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'No such user'
        }
      });
    });
    const expectedActions = [
      { type: types.IS_USER_SETTING, bool: true },
      { type: types.SET_USER_FAILURE, error },
      { type: types.IS_USER_SETTING, bool: false }
    ];
    const store = mockStore({ user: [] });
    return store.dispatch(setUser(6)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('set current user actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles SET_CURRENT_USER to log in a user', () => {
    const user = users.user1;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });
    const expectedActions = [{ type: types.SET_CURRENT_USER, user }];
    const store = mockStore({ user: [] });
    return store.dispatch(userSession(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles SET_CURRENT_USER to log out a user', () => {
    const user = {};
    const expectedActions = [{ type: types.SET_CURRENT_USER, user }];
    const store = mockStore({});
    store.dispatch(logOut());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
describe('set current user actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('handles REGISTER_USER_SUCCESS to register a user', () => {
    const payload = users.user1;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response
      });
    });
    const expectedActions = [
      { type: types.REGISTERING_USER, bool: true },
      { type: types.REGISTER_USER_SUCCESS, payload }
    ];
    const store = mockStore({ user: {} });
    return store.dispatch(registerUser(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('handles REGISTER_USER_FAILURE when failing to register a user', () => {
    const user = users.user1;
    const error = 'User already exists';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'User already exists'
        }
      });
    });
    const expectedActions = [
      { type: types.REGISTERING_USER, bool: true },
      { type: types.REGISTER_USER_FAILURE, error },
      { type: types.REGISTERING_USER, bool: false }
    ];
    const store = mockStore({ user: {} });
    return store.dispatch(registerUser(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
