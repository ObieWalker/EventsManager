import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Dashboard from '../../src/components/AdminDashboard/Dashboard';

let mounted;
let props;
let wrapper;

const getComponent = () => {
  if (!mounted) {
    props = {};
    mounted = shallow(<Dashboard {...props} />);
  }
  return mounted;
};

describe('Center Card Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('Admin').length).toBe(0);
  });
});
