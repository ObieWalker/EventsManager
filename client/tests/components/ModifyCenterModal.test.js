import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connect, { ModifyCenter }
  from '../../src/components/AdminDashboard/ModifyCenterModal';

let mountedComponent;
let props;
const mockStore = configureStore();
// const createCenter = jest.fn(() => Promise.resolve({}));

let wrapper;
let isCenterUpdating;
const updateSuccess = '';
const updateError = '';
const center = {
  name: 'random',
  address: 'random address',
  city: 'random',
  capacity: 500,
  facility: 'Tables and Chairs'
};
const modifyCenter = jest.fn(() => Promise.resolve({}));
const getComponent = () => {
  if (!mountedComponent) {
    props = {
      center,
      modifyCenter,
      isCenterUpdating,
      updateSuccess,
      updateError
    };
    mountedComponent = shallow(<ModifyCenter {...props} />);
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
    expect(wrapper.instance().reset).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().handleChange).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().isValid).toBeDefined();
  });
  it('should have a method that handles change to each input element', () => {
    expect(wrapper.instance().updateCenter).toBeDefined();
  });
  it('testing create center function', () => {
    wrapper = getComponent();
    const e = { preventDefault: () => undefined };
    e.preventDefault = jest.fn();
    wrapper.instance().updateCenter(e);
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
        isCenterUpdating,
        updateSuccess,
        updateError,
        center,
        modifyCenter
      });
      wrapper = shallow(<connect store={store}
        isCenterUpdating={isCenterUpdating}
        updateSuccess={updateSuccess}
        updateError={updateError}
        center={center}
        modifyCenter={modifyCenter}
      />);
      expect(wrapper.length).toBe(1);
    });
  });
});
