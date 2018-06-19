import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Home from '../../src/components/Home.jsx';

let mountedHome;
let props;
let wrapper;

const getComponent = () => {
  if (!mountedHome) {
    props = {};
    mountedHome = shallow(<Home {...props} />);
  }
  return mountedHome;
};

describe('Home Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('Footer').length).toBe(1);
    expect(wrapper.find('br').length).toBe(5);
  });
});
