import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connect, { EditModal }
  from '../../src/components/UserDashboard/EditModal';
import { events } from '../__mocks__/eventsData';

let mountedComponent;
let props;
const mockStore = configureStore();
// const createCenter = jest.fn(() => Promise.resolve({}));

let wrapper;
const handleClose = jest.fn();
const hideModal = jest.fn();
const updateSuccess = '';
const updateError = '';
const event = events.event2;
const editEvent = jest.fn(() => Promise.resolve({}));
const getComponent = () => {
  if (!mountedComponent) {
    props = {
      event,
      handleClose,
      editEvent,
      updateSuccess,
      updateError,
      hideModal
    };
    mountedComponent = shallow(<EditModal {...props} />);
  }
  return mountedComponent;
};

describe('Modify Center Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().onSubmit).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().onSliderChange).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().formIsValid).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().handleDateChange).toBeDefined();
  });
  it('testing create center function', () => {
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
        event,
        handleClose,
        editEvent,
        updateSuccess,
        updateError,
        hideModal
      });
      wrapper = shallow(<connect store={store}
        event={event}
        updateSuccess={updateSuccess}
        updateError={updateError}
        editEvent={editEvent}
        hideModal={hideModal}
        handleClose={handleClose}
      />);
      expect(wrapper.length).toBe(1);
    });
  });
});
