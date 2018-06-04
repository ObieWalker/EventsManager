import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import EventList from '../../src/components/EventList.jsx';

let mountedForm;
let props;
let wrapper;

const getComponent = () => {
  if (!mountedForm) {
    props = {
      event: {
        Center: {}
      },
      center: {},
      handleShowModal: jest.fn(),
      name: '',
      address: '',
      city: '',
      facility: '',
      getAllCenters: jest.fn(),
      getCenterEvents: jest.fn()
    };
    mountedForm = shallow(<EventList {...props} />);
  }
  return mountedForm;
};

describe('Event card for upcoming events Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('Col').length).toBe(1);
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('p').length).toBe(3);
    expect(wrapper.find('h5').length).toBe(1);
  });
});
