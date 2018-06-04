import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CenterForm from '../../src/components/CenterForm';
import { centers } from '../__mocks__/centersData';

let mountedForm;
let props;
let wrapper, defaultCenterName;
const center = centers.center1;
const centerNameValue = '';
const addressValue = '';
const defaultAddressValue = '';
const cityValue = '';
const defaultCityValue = '';
let capacityValue, defaultCapacityValue;
const facilityValue = '';
const defaultFacilityValue = '';

const createCenter = jest.fn();
const modifyOnClick = jest.fn();
const onFocus = jest.fn();
const onChange = jest.fn();
const getComponent = () => {
  if (!mountedForm) {
    props = {
      center,
      defaultCenterName,
      onFocus,
      onChange,
      centerNameValue,
      addressValue,
      defaultAddressValue,
      cityValue,
      defaultCityValue,
      capacityValue,
      defaultCapacityValue,
      facilityValue,
      defaultFacilityValue,
      modifyOnClick,
      createCenter
    };
    mountedForm = shallow(<CenterForm {...props} />);
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
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('label').length).toBe(5);
    expect(wrapper.find('input').length).toBe(6);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('div').length).toBe(12);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('textarea').length).toBe(1);
  });
});
