import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import EventCard from '../../src/components/UserDashboard/EventsCard';
import { events } from '../__mocks__/eventsData';

let mountedForm;
let props;
let wrapper;
const event = events.event2;
const handleShowEditModal = jest.fn();
const handleDeleteEvent = jest.fn();

const getComponent = () => {
  if (!mountedForm) {
    props = {
      event,
      handleShowEditModal,
      handleDeleteEvent
    };
    mountedForm = shallow(<EventCard {...props} />);
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
    expect(wrapper.find('button').length).toBe(2);
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('p').length).toBe(3);
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('h6').length).toBe(1);
  });
});
