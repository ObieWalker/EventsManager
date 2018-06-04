import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Main from '../../src/components/UserDashboard/Main';

let mountedTestimonials;
let props;
let wrapper;

const getComponent = () => {
  if (!mountedTestimonials) {
    props = {};
    mountedTestimonials = shallow(<Main {...props} />);
  }
  return mountedTestimonials;
};

describe('Testimonials Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('div').length).toBe(1);
  });
});
