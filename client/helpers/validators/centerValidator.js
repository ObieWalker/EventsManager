import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const centerValidator = (data) => {
  const name = data.name.trim(),
    address = data.address.trim(),
    city = data.city.trim(),
    capacity = data.capacity.trim(),
    facility = data.facility.trim(),
    isAvailable = data.isAvailable.trim(),
    errors = {};

  if (validator.isEmpty(name)) {
    errors.name = 'You have to enter a center name.';
  }

  if (!validator.isEmpty(address)) {
    if (!validator.isLength(address, { min: 5, max: 1000 })) {
      errors.address =
        'Please enter an address that is more descriptive.';
    }
  } else { errors.address = 'The Center must have an addrress'; }

  if (!validator.isEmpty(city)) {
    if (!validator.isLength(city, { min: 1, max: 20 })) {
      if (city.search(/[^A-Za-z\s]/) !== -1) {
        errors.city = 'The city has to have to alphabets only';
      }
      errors.ingredients =
        'Please enter a valid city.';
    }
  } else {
    errors.city = 'Please enter the city of the center';
  }

  if (!validator.isEmpty(capacity)) {
    if (!validator.isInt(capacity, { min: 3, max: undefined })) {
      errors.procedures =
        'The capacity has to be a number';
    }
  } else { errors.procedures = 'Please enter the center capacity'; }

  if (!validator.isAlphanumeric(facility)) {
    errors.procedures = 'Please input valid facility entries';
  }

  if (!validator.isBoolean(isAvailable)) {
    errors.procedures = 'Please indicate true or false';
  }

  return { errors, formIsValid: isEmpty(errors) };
};

export default centerValidator;
