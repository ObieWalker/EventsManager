import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CenterCard from '../../src/components/CenterCard.jsx';

let mountedForm;
let props;
let wrapper;

const getComponent = () => {
  if (!mountedForm) {
    props = {
      center: {},
      handleShowModal: jest.fn(),
      getCenterEvents: jest.fn()
    };
    mountedForm = shallow(<CenterCard {...props} />);
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
    expect(wrapper.find('div').length).toBe(7);
    expect(wrapper.find('p').length).toBe(3);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('h5').length).toBe(1);
  });
});
