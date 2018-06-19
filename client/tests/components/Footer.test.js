import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Footer from '../../src/components/Footer.jsx';

let mountedForm;
let props;
let wrapper;

const getComponent = () => {
  if (!mountedForm) {
    props = {};
    mountedForm = shallow(<Footer {...props} />);
  }
  return mountedForm;
};

describe('Footer Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('footer').length).toBe(1);
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('h5').length).toBe(1);
  });
});
