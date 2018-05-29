import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import getUsers from '../../src/actions/getUsersAction';
import * as types from '../../src/actions/actionTypes';
import { users } from '../__mocks__/usersData';

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
