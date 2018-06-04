import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedCenter, { AdminCenters }
  from '../../src/components/AdminDashboard/AdminCenters.jsx';
import { centers } from '../__mocks__/centersData';

let mountedComponent;
let moreCenters;
const allCenters = {
  centers: [centers],
  moreCenters: true
};
let props;

const getAllCenters = jest.fn(() => Promise.resolve({}));
// const getMoreCenters = jest.fn();
// const location = {};
const deleteCenter = jest.fn();

const mockStore = configureStore();
let wrapper;

const getComponent = () => {
  if (!mountedComponent) {
    props = {
      allCenters,
      getAllCenters,
      deleteCenter,
      moreCenters
    };
    mountedComponent = shallow(<AdminCenters {...props} />);
  }
  return mountedComponent;
};

describe('Admin Centers Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('testing component will recieve props', () => {
    const nextProps = {
      allCenters: {
        fetchedCenters: [centers]
      }
    };

    wrapper = getComponent();
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state().centers).toEqual(nextProps.allCenters.fetchedCenters);
    expect(wrapper.state().isLoading).toEqual(false);
  });

  it('testing load more function', () => {
    wrapper = getComponent();
    wrapper.instance().loadMoreContent();
    expect(wrapper.state().pageNo).toEqual(2);
    expect(wrapper.state().limit).toEqual(10);
  });
  it('testing handle close function', () => {
    wrapper = getComponent();
    wrapper.instance().handleClose();
    expect(wrapper.state().show).toEqual(false);
  });
  it('testing handle modify function', () => {
    wrapper = getComponent();
    wrapper.instance().handleModify();
    expect(wrapper.state().show).toEqual(true);
  });

  describe('Connected Component', () => {
    describe('Connected Centers Component', () => {
      it('component successfully rendered', () => {
        const store = mockStore({
          centers
        });
        wrapper = shallow(<ConnectedCenter
          store={store}
          allCenters={allCenters}
          moreCenters={allCenters.moreCenters}
        />);
        expect(wrapper.length).toBe(1);
      });
    });
  });
});
