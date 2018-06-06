import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Testimonials from '../../src/components/Testimonials.jsx';

let mountedTestimonials;
let props;
let wrapper;

const getComponent = () => {
  if (!mountedTestimonials) {
    props = {};
    mountedTestimonials = shallow(<Testimonials {...props} />);
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
    expect(wrapper.find('Row').length).toBe(2);
    expect(wrapper.find('Col').length).toBe(8);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('br').length).toBe(2);
  });
});
