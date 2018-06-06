import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connect, { CentersPage }
  from '../../src/components/UserDashboard/CentersPage';
import { centers } from '../__mocks__/centersData';

let mountedComponent;
let props;
const mockStore = configureStore();
// const createCenter = jest.fn(() => Promise.resolve({}));

let wrapper;
const allCenters = {
  centers,
  moreCenters: false
};


const getAllCenters = jest.fn(() => Promise.resolve({}));
const createSuccess = '';
const createError = '';
const Center = { name: 'random' };
let moreCenters, dumbObject = {};
const centerEvents = jest.fn();
const fetchedCenterEvents = [
  dumbObject = {
    Center: {
      name: 'random'
    }

  }
];
const clearCenterEvents = jest.fn();
const addNewEvent = jest.fn(() => Promise.resolve({}));
const getComponent = () => {
  if (!mountedComponent) {
    props = {
      allCenters,
      getAllCenters,
      createSuccess,
      createError,
      addNewEvent,
      Center,
      moreCenters,
      centerEvents,
      fetchedCenterEvents,
      clearCenterEvents
    };
    mountedComponent = shallow(<CentersPage {...props} />);
  }
  return mountedComponent;
};

describe('Center Page Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().loadMoreContent).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().getMoreCenters).toBeDefined();
  });
  it('should have a method that handles handleDateChange', () => {
    expect(wrapper.instance().handleClose).toBeDefined();
  });
  it('should have a method that handles handleDateChange', () => {
    expect(wrapper.instance().handleShowModal).toBeDefined();
  });
  it('should have a method that handles handleDateChange', () => {
    expect(wrapper.instance().changeSearchState).toBeDefined();
  });
  it('should have a method that handles handleDateChange', () => {
    expect(wrapper.instance().getCenterEvents).toBeDefined();
  });
  it('should have a method that handles handleDateChange', () => {
    expect(wrapper.instance().revertPageState).toBeDefined();
  });
  it('should have a method that handles handleDateChange', () => {
    expect(wrapper.instance().resetPage).toBeDefined();
  });

  it('testing clear function', () => {
    wrapper = getComponent();
    wrapper.instance().resetPage();
    expect(wrapper.state().pageNo).toEqual(1);
    expect(wrapper.state().filter).toEqual('');
    expect(wrapper.state().capacity).toEqual('');
    expect(wrapper.state().facility).toEqual('');
  });
  it('testing get center events function', () => {
    wrapper = getComponent();
    const center = {
      id: 5
    };
    wrapper.instance().getCenterEvents(center);
    expect(wrapper.state().showCenterEvents).toEqual(true);
  });
  it('testing revert page state function', () => {
    wrapper = getComponent();
    const e = { preventDefault: () => undefined };
    e.preventDefault = jest.fn();
    wrapper.instance().revertPageState(e);
    expect(e.preventDefault).toHaveBeenCalled();
    expect(wrapper.state().showCenterEvents).toEqual(false);
  });
  it('testing handleShowModal function', () => {
    wrapper = getComponent();
    wrapper.instance().handleShowModal();
    expect(wrapper.state().show).toEqual(true);
  });
});

describe('Connected Component', () => {
  describe('Connected mountedLogin', () => {
    it('component successfully rendered', () => {
      const store = mockStore({
        allCenters,
        getAllCenters,
        createSuccess,
        createError,
        addNewEvent,
        Center,
        moreCenters,
        centerEvents,
        fetchedCenterEvents,
        clearCenterEvents
      });
      wrapper = shallow(<connect store={store}
        allCenters={allCenters}
        getAllCenters={getAllCenters}
        createSuccess={createSuccess}
        createError={createError}
        addNewEvent={addNewEvent}
        Center={Center}
        moreCenters={moreCenters}
        centerEvents={centerEvents}
        fetchedCenterEvents={fetchedCenterEvents}
        clearCenterEvents={clearCenterEvents}
      />);
      expect(wrapper.length).toBe(1);
    });
  });
});
