import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import EventsCard from '../../src/components/AdminDashboard/EventsCard';

let mountedForm;
let props;
let wrapper;
const event = {
  Center: {}
};
const cancelEvent = jest.fn();
const handleCancel = jest.fn();
const center = '';
const eventType = '';
const date = '';
const email = '';
const getAllCenters = jest.fn();
let guestNo;

const getComponent = () => {
  if (!mountedForm) {
    props = {
      event,
      cancelEvent,
      handleCancel,
      center,
      eventType,
      date,
      email,
      getAllCenters,
      guestNo
    };
    mountedForm = shallow(<EventsCard {...props} />);
  }
  return mountedForm;
};

describe('Center Card Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('Col').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('p').length).toBe(2);
    expect(wrapper.find('h6').length).toBe(1);
    expect(wrapper.find('h5').length).toBe(1);
  });
});
