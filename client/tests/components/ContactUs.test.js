import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ConnectContactUs, { ContactUs } from '../../src/components/ContactUs.jsx';

let mountedForm;
let props;
let wrapper;
const sendMail = jest.fn();
const getComponent = () => {
  if (!mountedForm) {
    props = {
      sendMail
    };
    mountedForm = shallow(<ContactUs {...props} />);
  }
  return mountedForm;
};

describe('Contact Us Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('div').length).toBe(10);
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('input').length).toBe(4);
    expect(wrapper.find('label').length).toBe(5);
  });

  describe('Contact Us inputs', () => {
    beforeEach(() => {});
    it('updates state on input change', () => {
      wrapper.find('#firstName').simulate('change', {
        target: { name: 'firstName', value: 'customerName' }
      });
      expect(wrapper.state().firstName).toBe('customerName');
    });
    it('updates state on input change', () => {
      wrapper.find('#lastName').simulate('change', {
        target: { name: 'lastName', value: 'customerName' }
      });
      expect(wrapper.state().lastName).toBe('customerName');
    });
    it('updates state on input change', () => {
      wrapper.find('#username').simulate('change', {
        target: { name: 'username', value: 'customerName' }
      });
      expect(wrapper.state().username).toBe('customerName');
    });
    it('updates state on input change', () => {
      wrapper.find('#message').simulate('change', {
        target: { name: 'message', value: 'customer query' }
      });
      expect(wrapper.state().message).toBe('customer query');
    });
    it('updates state on input change', () => {
      wrapper.find('#email').simulate('change', {
        target: { name: 'email', value: 'customerName@gmail.com' }
      });
      expect(wrapper.state().email).toBe('customerName@gmail.com');
    });
  });

  describe('Contact Us Component', () => {
    beforeEach(() => {});
    it('testing send mail function', () => {
      wrapper = getComponent();
      wrapper.instance().sendMail();
      expect(sendMail).toHaveBeenCalled();
    });
  });
});
