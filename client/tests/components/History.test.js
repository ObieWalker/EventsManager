import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import connect, { UserHistory }
  from '../../src/components/UserDashboard/History.jsx';
import { events } from '../__mocks__/eventsData';
import { users } from '../__mocks__/usersData';

let mountedComponent;
let props;
const userHistory = {
  events: [events],
  moreHistory: true
};
const user = users.user2;
let moreHistory;

const getUsersHistory = jest.fn(() => Promise.resolve({}));

const mockStore = configureStore();
let wrapper;

const getComponent = () => {
  if (!mountedComponent) {
    props = {
      getUsersHistory,
      userHistory,
      user,
      moreHistory,
      events
    };
    mountedComponent = shallow(<UserHistory {...props} />);
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
      userHistory: {
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
    expect(wrapper.state().pageNo).toEqual(1);
    expect(wrapper.state().limit).toEqual(6);
  });
  it('should have a method that handles getMoreEvents', () => {
    expect(wrapper.instance().getMoreEvents).toBeDefined();
  });
  it('should have a method that handles getMoreEvents', () => {
    expect(wrapper.instance().loadMoreContent).toBeDefined();
  });


  describe('Connected Component', () => {
    describe('Connected Events Component', () => {
      it('component successfully rendered', () => {
        const store = mockStore({
          events
        });
        wrapper = shallow(<connect
          store={store}
          userHistory={userHistory}
          moreHistory={userHistory.moreHistory}
          getUsersHistory={getUsersHistory}
          user={user}
          events={events}
        />);
        expect(wrapper.length).toBe(1);
      });
    });
  });
});
