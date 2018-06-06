import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import NotFound from '../../src/components/NotFound.jsx';

let mountedForm;
let props;
let wrapper;

const getComponent = () => {
  if (!mountedForm) {
    props = {};
    mountedForm = shallow(<NotFound {...props} />);
  }
  return mountedForm;
};

describe('Not Found Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('Link').length).toBe(1);
    expect(wrapper.find('center').length).toBe(1);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('img').length).toBe(1);
  });
});
