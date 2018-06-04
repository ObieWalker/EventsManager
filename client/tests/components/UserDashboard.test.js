import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connect, { Dashboard } from '../../src/components/UserDashboard/Dashboard';
import { users } from '../__mocks__/usersData';

let mountedForm;
let props;
const mockStore = configureStore();
let wrapper;
const user = users.user1;
const loginUser = {
  user
};
const getComponent = () => {
  if (!mountedForm) {
    props = {
      loginUser
    };
    mountedForm = shallow(<Dashboard {...props} />);
  }
  return mountedForm;
};

describe('User dashboard Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('Col').length).toBe(2);
    expect(wrapper.find('Nav').length).toBe(1);
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('Row').length).toBe(1);
    expect(wrapper.find('NavItem').length).toBe(3);
    expect(wrapper.find('ul').length).toBe(1);
  });
});
describe('Connected Component', () => {
  describe('Connected mountedRegister', () => {
    it('component successfully rendered', () => {
      const store = mockStore({
        loginUser
      });
      wrapper = shallow(<connect store={store} loginUser={loginUser} />);
      expect(wrapper.length).toBe(1);
    });
  });
});
