import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connect, { BookCenter }
  from '../../src/components/UserDashboard/BookCenterModal';

let mountedComponent;
let props;
const mockStore = configureStore();
// const createCenter = jest.fn(() => Promise.resolve({}));

let wrapper;
const createSuccess = '';
const createError = '';
const center = {
  name: 'random',
  address: 'random address',
  city: 'random',
  capacity: 500,
  facility: 'Tables and Chairs'
};
// const pickadate = jest.fn();
const hideModal = jest.fn();
const addNewEvent = jest.fn(() => Promise.resolve({}));
const getComponent = () => {
  if (!mountedComponent) {
    props = {
      center,
      addNewEvent,
      createSuccess,
      createError,
      hideModal
    };
    mountedComponent = shallow(<BookCenter {...props} />);
  }
  return mountedComponent;
};

describe('Book Center Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().clear).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().handleChange).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().formIsValid).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().onSubmit).toBeDefined();
  });
  it('should have a method that handles handleDateChange', () => {
    expect(wrapper.instance().handleDateChange).toBeDefined();
  });
  it('testing book center function', () => {
    wrapper = getComponent();
    const e = { preventDefault: () => undefined };
    e.preventDefault = jest.fn();
    wrapper.instance().onSubmit(e);
    expect(e.preventDefault).toHaveBeenCalled();
  });
//   it('testing clear function', () => {
//     wrapper = getComponent();
//     wrapper.instance().reset();
//     expect(wrapper.state().name).toEqual('');
//     expect(wrapper.state().address).toEqual('');
//     expect(wrapper.state().city).toEqual('');
//     expect(wrapper.state().capacity).toEqual('');
//     expect(wrapper.state().facility).toEqual('');
//     expect(wrapper.state().errors).toEqual({});
//   });
});

describe('Connected Component', () => {
  describe('Connected mountedLogin', () => {
    it('component successfully rendered', () => {
      const store = mockStore({
        center,
        addNewEvent,
        createSuccess,
        createError,
        hideModal
      });
      wrapper = shallow(<connect store={store}
        hideModal={hideModal}
        createSuccess={createSuccess}
        createError={createError}
        center={center}
        addNewEvent={addNewEvent}
      />);
      expect(wrapper.length).toBe(1);
    });
  });
});
