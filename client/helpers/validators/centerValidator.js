import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const centerValidator = (data) => {
  const name = data.name.trim(),
    address = data.address.trim(),
    city = data.city.trim(),
    facility = data.facility.trim(),
    errors = {};

  if (validator.isEmpty(name)) {
    errors.name = 'You have to enter a center name.';
  }

  if (!validator.isEmpty(address)) {
    console.log('not empty');
    if (!validator.isLength(address, { min: 5, max: 1000 })) {
      errors.address =
        'Please enter an address that is more descriptive.';
      console.log('short length');
    }
  } else {
    errors.address = 'The Center must have an address';
    console.log('is empty');
  }

  if (!validator.isEmpty(city)) {
    console.log('city is not empty');
    if (!validator.isLength(city, { min: 1, max: 20 })) {
      console.log('city length');
      if (city.search(/[^A-Za-z\s]/) !== -1) {
        errors.city = 'The city has to have to alphabets only';
        console.log('error.city');
      }
      errors.city =
        'Please enter a valid city name .';
      console.log('error.city');
    }
  } else {
    errors.city = 'Please enter the city of the center';
    console.log('error.city');
  }

  if (!validator.isAlphanumeric(facility)) {
    console.log('facility alphnum');
    errors.facility = 'Please input valid facility entries';
  }
  console.log(errors);
  console.log(isEmpty(errors));
  return { errors, formIsValid: isEmpty(errors) };
};

export default centerValidator;
