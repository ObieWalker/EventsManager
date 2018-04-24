import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const centerValidator = (data) => {
  const name = data.name.trim(),
    address = data.address.trim(),
    city = data.city.trim(),
    { capacity } = data,
    errors = {};

  if (validator.isEmpty(name)) {
    errors.name = 'You have to enter a center name.';
  }

  if (!validator.isEmpty(address)) {
    if (!validator.isLength(address, { min: 5, max: 1000 })) {
      errors.address =
        'Please enter an address that is more descriptive.';
    }
  } else {
    errors.address = 'The Center must have an address';
  }

  if (!validator.isEmpty(city)) {
    if (!validator.isLength(city, { min: 1, max: 20 })) {
      if (city.search(/[^A-Za-z\s]/) !== -1) {
        errors.city = 'The city has to have to alphabets only';
      }
      errors.city =
        'Please enter a valid city name .';
    }
  } else {
    errors.city = 'Please enter the city of the center';
  }

  if (!validator.isNumeric(capacity)) {
    errors.name = 'You have to enter a numeric value.';
  }

  return { errors, formIsValid: isEmpty(errors) };
};

export default centerValidator;
