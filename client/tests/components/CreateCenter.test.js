import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
// import configureStore from 'redux-mock-store';
import { CreateCenter } from '../../src/components/AdminDashboard/CreateCenter.jsx';

let mountedComponent;
let props;
// const mockStore = configureStore();
const createCenter = jest.fn(() => Promise.resolve({}));

let wrapper;
// const createSuccess = '';
// const createError = '';
const getComponent = () => {
  if (!mountedComponent) {
    props = {
      createCenter,
      createSuccess: '',
      createError: ''
    };
    mountedComponent = mount(<CreateCenter {...props} />);
  }
  return mountedComponent;
};

wrapper = getComponent();

describe('Admin Centers Component', () => {
  it('component successfully rendered', () => {
    expect(wrapper.find('.center').text()).toEqual('Add Center Information');
  });
  it('should set name in state when handleChange is called with name', () => {
    wrapper
      .find('#name')
      .simulate('change', { target: { name: 'name', value: 'obi' } });
    expect(wrapper.instance().state.name).toEqual('obi');
  });

  it('should handle image upload uses default image', () => {
    wrapper.find('#image').simulate('change', { target: { files: [] } });
    expect(wrapper.state('defaultImageUrl')).toEqual('http://i68.tinypic.com/dh5vk.jpg');
  });
  it('should have a method that handles formIsValid', () => {
    expect(wrapper.instance().formIsValid).toBeDefined();
  });
  it('should have a method that handles formIsValid', () => {
    expect(wrapper.instance().clear).toBeDefined();
  });

  it('testing create center function', () => {
    wrapper.setState({
      name: 'Center Place',
      address: '123 Lagos',
      city: 'Lagos',
      capacity: 1000,
      facility: 'chair, table'
    });
    wrapper.setProps({ createError: '' });
    wrapper.find('#create-center').simulate('click');
  });
  it('testing create center function', () => {
    wrapper.setState({
      name: 'Center Place',
      address: '123 Lagos',
      city: 'Lagos',
      capacity: 1000,
      facility: 'chair, table'
    });
    wrapper.setProps({ createError: 'Invalid Center Name' });
    wrapper.find('#create-center').simulate('click');
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

// describe('Connected Component', () => {
//   describe('Connected mountedLogin', () => {
//     it('component successfully rendered', () => {
//       const store = mockStore({
//         createCenter,
//         createSuccess,
//         createError
//       });
//       wrapper = shallow(<connect
//         store={store}
//         createCenter={createCenter}
//         createSuccess={createSuccess}
//         createError={createError}
//       />);
//       expect(wrapper.length).toBe(1);
//     });
//   });
// });
