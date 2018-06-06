import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { AllUsers } from '../../src/components/AdminDashboard/AllUsers';
import { users } from '../__mocks__/usersData';

let mountedComponent;
// const getUsers = {
//   fetchedUsers: [users],
//   moreUsers: true
// };
let props;

const getUsers = jest.fn(() => Promise.resolve({}));
// const getMoreCenters = jest.fn();
// const location = {};
const deleteUser = jest.fn();
const fetchedUsers = [];
const moreUsers = false;
const setAdmin = jest.fn(() => Promise.resolve({}));

const mockStore = configureStore();
let wrapper;

const getComponent = () => {
  if (!mountedComponent) {
    props = {
      getUsers,
      fetchedUsers,
      deleteUser,
      moreUsers,
      setAdmin
    };
    mountedComponent = shallow(<AllUsers {...props} />);
  }
  return mountedComponent;
};

describe('AllUsers Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('testing component will recieve props', () => {
    const nextProps = {
      allCenters: {
        fetchedUsers: [users]
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
//     describe('Connected Centers Component', () => {
//       it('component successfully rendered', () => {
//         const store = mockStore({
//           events
//         });
//         wrapper = shallow(<ConnectedCenter
//           store={store}
//           allCenters={allCenters}
//           moreCenters={allCenters.moreCenters}
//         />);
//         expect(wrapper.length).toBe(1);
//       });
//     });
//   });
});
