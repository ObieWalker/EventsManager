import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connectSearch, { Search } from '../../src/components/Search';

let mountedSearch;
let props;
const locations = [];
const history = {
  push(location) {
    locations.push(location);
  }
};

const loginUser = { isAuthenticated: false, user: {} };
const getAllCenters = jest.fn(() => Promise.resolve());
const clearCenterState = jest.fn(() => Promise.resolve());
const changeSearchState = jest.fn(() => Promise.resolve());
const resetPage = jest.fn(() => Promise.resolve());
const mockStore = configureStore();
let wrapper;

const getComponent = () => {
  if (!mountedSearch) {
    props = {
      getAllCenters,
      clearCenterState,
      changeSearchState,
      resetPage
    };
    history.push = jest.fn();
    mountedSearch = shallow(<Search {...props} />);
  }
  return mountedSearch;
};

describe('Login Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('renders component successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('updates state on input change', () => {
    wrapper.find('#filter').simulate('change', {
      target: { name: 'filter', value: 'Lekki' }
    });
    expect(wrapper.state().filter).toBe('Lekki');
  });

  it('updates state on input change', () => {
    wrapper.find('#capacity').simulate('change', {
      target: { name: 'capacity', value: 500 }
    });
    expect(wrapper.state().capacity).toBe(500);
  });

  it('updates state on input change', () => {
    wrapper.find('#facility').simulate('change', {
      target: { name: 'facility', value: 'chairs' }
    });
    expect(wrapper.state().facility).toBe('chairs');
  });

  it('testing Search function', () => {
    wrapper = getComponent();
    const e = { preventDefault: () => undefined };
    e.preventDefault = jest.fn();
    wrapper.instance().handleSearch(e);
    expect(e.preventDefault).toHaveBeenCalled();
  });
  it('testing fetch all centers function', () => {
    wrapper = getComponent();
    const e = { preventDefault: () => undefined };
    e.preventDefault = jest.fn();
    wrapper.instance().fetchCenters(e);
    expect(e.preventDefault).toHaveBeenCalled();
    expect(wrapper.state().filter).toBe('');
    expect(wrapper.state().capacity).toBe('');
    expect(wrapper.state().facility).toBe('');
  });
});
describe('Connected Component', () => {
  describe('Connected mountedSearch', () => {
    it('component successfully rendered', () => {
      const store = mockStore({
        loginUser
      });
      wrapper = shallow(<connectSearch store={store} history={history} />);
      expect(wrapper.length).toBe(1);
    });
  });
});
