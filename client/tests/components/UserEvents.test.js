import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connect, { UserEvents }
  from '../../src/components/UserDashboard/UserEvents';
import { events } from '../__mocks__/eventsData';
import { users } from '../__mocks__/usersData';

let mountedComponent;
let props;
const allUserEvents = {
  events: [events],
  moreHistory: true
};
const user = users.user2;
let moreEvents;
const deleteEvent = jest.fn();
const editEvent = jest.fn();
const getUsersEvents = jest.fn(() => Promise.resolve({}));

const mockStore = configureStore();
let wrapper;

const getComponent = () => {
  if (!mountedComponent) {
    props = {
      getUsersEvents,
      allUserEvents,
      user,
      moreEvents,
      events,
      deleteEvent,
      editEvent
    };
    mountedComponent = shallow(<UserEvents {...props} />);
  }
  return mountedComponent;
};

describe('user history Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('testing component will recieve props', () => {
    const nextProps = {
      allUserEvents: {
        fetchedEvents: [events]
      }
    };

    wrapper = getComponent();
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state().isLoading).toEqual(false);
  });

  it('testing load more function', () => {
    wrapper = getComponent();
    wrapper.instance().loadMoreContent();
    expect(wrapper.state().pageNo).toEqual(2);
    expect(wrapper.state().limit).toEqual(6);
  });
  it('testing load more function', () => {
    wrapper = getComponent();
    wrapper.instance().handleClose();
    expect(wrapper.state().showModal).toEqual(false);
  });
  it('testing load more function', () => {
    wrapper = getComponent();
    wrapper.instance().handleShowEditModal();
    expect(wrapper.state().showModal).toEqual(true);
  });
  it('should have a method that handles getMoreEvents', () => {
    expect(wrapper.instance().getMoreEvents).toBeDefined();
  });
  it('should have a method that handles getMoreEvents', () => {
    expect(wrapper.instance().loadMoreContent).toBeDefined();
  });
  it('should have a method that handles getMoreEvents', () => {
    expect(wrapper.instance().handleShowEditModal).toBeDefined();
  });
  it('should have a method that handles getMoreEvents', () => {
    expect(wrapper.instance().handleClose).toBeDefined();
  });
  it('should have a method that handles getMoreEvents', () => {
    expect(wrapper.instance().handleDeleteEvent).toBeDefined();
  });

  describe('Connected Component', () => {
    describe('Connected Events Component', () => {
      it('component successfully rendered', () => {
        const store = mockStore({
          events
        });
        wrapper = shallow(<connect
          store={store}
          allUserEvents={allUserEvents}
          moreEvents={allUserEvents.moreEvents}
          getUsersEvents={getUsersEvents}
          user={user}
          events={events}
          deleteEvent={deleteEvent}
          editEvent={editEvent}
        />);
        expect(wrapper.length).toBe(1);
      });
    });
  });
});
