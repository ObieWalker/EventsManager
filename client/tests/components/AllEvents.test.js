import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
// import configureStore from 'redux-mock-store';
import { AllEvents }
  from '../../src/components/AdminDashboard/AllEvents.jsx';
import { events } from '../__mocks__/centersData';

let mountedComponent;
let moreEvents;
const allEvents = {
  events: [events],
  moreEvents: true
};
let props;

const getAllEvents = jest.fn(() => Promise.resolve({}));
// const getMoreEvents = jest.fn();
// const location = {};
const cancelEvent = jest.fn();

// const mockStore = configureStore();
let wrapper;

const getComponent = () => {
  if (!mountedComponent) {
    props = {
      allEvents,
      getAllEvents,
      cancelEvent,
      moreEvents,
      events
    };
    mountedComponent = shallow(<AllEvents {...props} />);
  }
  return mountedComponent;
};

describe('Admin Events Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('testing component will recieve props', () => {
    const nextProps = {
      allEvents: {
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


//   describe('Connected Component', () => {
//     describe('Connected Events Component', () => {
//       it('component successfully rendered', () => {
//         const store = mockStore({
//           events
//         });
//         wrapper = shallow(<ConnectedCenter
//           store={store}
//           allEvents={allEvents}
//           moreEvents={allEvents.moreEvents}
//         />);
//         expect(wrapper.length).toBe(1);
//       });
//     });
//   });
});
