import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connect, { CreateCenter }
  from '../../src/components/AdminDashboard/CreateCenter.jsx';

let mountedComponent;
let props;
const mockStore = configureStore();
const createCenter = jest.fn(() => Promise.resolve({}));

let wrapper;
const createSuccess = '';
const createError = '';
const getComponent = () => {
  if (!mountedComponent) {
    props = {
      createCenter,
      createSuccess: '',
      createError: ''
    };
    mountedComponent = shallow(<CreateCenter {...props} />);
  }
  return mountedComponent;
};

describe('Admin Centers Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should set name in state when handleChange is called with name', () => {
    wrapper.instance().handleChange({ target: { name: 'name', value: 'obi' } });
    expect(wrapper.instance().state.name).toEqual('obi');
  });
  it('should have a method that handles focus', () => {
    expect(wrapper.instance().handleOnFocus).toBeDefined();
  });
  it('should have a method that handles handleChange', () => {
    expect(wrapper.instance().handleChange).toBeDefined();
  });
  it('should have a method that handles formIsValid', () => {
    expect(wrapper.instance().formIsValid).toBeDefined();
  });
  it('should have a method that handles formIsValid', () => {
    expect(wrapper.instance().clear).toBeDefined();
  });
  it('testing create center function', () => {
    wrapper = getComponent();
    const e = { preventDefault: () => undefined };
    e.preventDefault = jest.fn();
    wrapper.instance().onSubmit(e);
    expect(e.preventDefault).toHaveBeenCalled();
  });
  it('testing clear function', () => {
    wrapper = getComponent();
    wrapper.instance().clear();
    expect(wrapper.state().name).toEqual('');
    expect(wrapper.state().address).toEqual('');
    expect(wrapper.state().city).toEqual('');
    expect(wrapper.state().capacity).toEqual('');
    expect(wrapper.state().facility).toEqual('');
    expect(wrapper.state().errors).toEqual({});
  });
});

describe('Connected Component', () => {
  describe('Connected mountedLogin', () => {
    it('component successfully rendered', () => {
      const store = mockStore({
        createCenter,
        createSuccess,
        createError
      });
      wrapper = shallow(<connect store={store}
        createCenter={createCenter}
        createSuccess={createSuccess}
        createError={createError}
      />);
      expect(wrapper.length).toBe(1);
    });
  });
});
