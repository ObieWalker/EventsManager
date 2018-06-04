import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import EventForm from '../../src/components/EventFormModal.jsx';

let mountedForm;
let props;
let wrapper, guestValue, sliderMax, sliderStep, guestDefaultValue;

const getComponent = () => {
  if (!mountedForm) {
    props = {
      errors: {},
      center: {},
      event: {},
      eventCenter: '',
      centerName: '',
      eventTypeValue: '',
      bookCenterValue: '',
      eventTypeDefaultValue: '',
      onChange: jest.fn(),
      onFocus: jest.fn(),
      dateValue: '',
      bookDateValue: '',
      dateDefaultValue: '',
      guestValue,
      sliderMax,
      sliderStep,
      guestDefaultValue,
      sliderOnChange: jest.fn(),
      onAfterChange: jest.fn(),
      submitOnClick: jest.fn(),
      bookOnSubmit: jest.fn()
    };
    mountedForm = shallow(<EventForm {...props} />);
  }
  return mountedForm;
};

describe('Center Form Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('select').length).toBe(1);
  });
});
