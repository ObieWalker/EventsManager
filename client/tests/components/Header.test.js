import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connectHeader, { Header } from '../../src/components/Header';

let mountedLogout;
let props;
const locations = [];
const history = {
  push(location) {
    locations.push(location);
  }
};

const login = { isAuthenticated: false, user: {} };
const logOut = jest.fn(() => Promise.resolve());
const mockStore = configureStore();
let wrapper;

const getComponent = () => {
  if (!mountedLogout) {
    props = {
      login,
      logOut,
      history
    };
    history.push = jest.fn();
    mountedLogout = shallow(<Header {...props} />);
  }
  return mountedLogout;
};

describe('Logout Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('testing component will recieve props', () => {
    const nextProps = {
      login: {
        isAuthenticated: true
      }
    };
    wrapper = getComponent();
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state().loggedIn).toEqual(true);
  });

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('Link').length).toBe(5);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('button').length).toBe(2);
  });

  it('testing user login function', () => {
    wrapper = getComponent();
    const e = { preventDefault: () => undefined };
    e.preventDefault = jest.fn();
    wrapper.instance().handleLogOut(e);
    expect(e.preventDefault).toHaveBeenCalled();
  });

  it('testing user login function', () => {
    wrapper = getComponent();
    const e = { preventDefault: () => undefined };
    e.preventDefault = jest.fn();
    wrapper.instance().handleLogOut(e);
    expect(history.push).toHaveBeenCalled();
  });
});
describe('Connected Component', () => {
  describe('Connected mountedLogout', () => {
    it('component successfully rendered', () => {
      const store = mockStore({
        login
      });
      wrapper = shallow(<connectHeader store={store} history={history} />);
      expect(wrapper.length).toBe(1);
    });
  });
});
