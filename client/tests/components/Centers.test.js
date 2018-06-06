import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedCenter, { AllCenters } from '../../src/components/Centers.jsx';
import { centers } from '../__mocks__/centersData';

let mountedComponent;
const allCenters = {};
let props;

const getAllCenters = jest.fn(() => Promise.resolve({}));
// const getMoreCenters = jest.fn();
// const location = {};

const mockStore = configureStore();
let wrapper;

const getComponent = () => {
  if (!mountedComponent) {
    props = {
      allCenters,
      getAllCenters
    };
    mountedComponent = shallow(<AllCenters {...props} />);
  }
  return mountedComponent;
};

describe('Center Component', () => {
  beforeEach(() => {});

  it('component successfully rendered', () => {
    wrapper = getComponent();
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
    expect(wrapper.state().limit).toEqual(6);
  });


  describe('Connected Component', () => {
    describe('Connected Centers Component', () => {
      it('component successfully rendered', () => {
        const store = mockStore({
          centers
        });
        wrapper = shallow(<ConnectedCenter store={store} allCenters={allCenters} />);
        expect(wrapper.length).toBe(1);
      });
    });
  });
});
