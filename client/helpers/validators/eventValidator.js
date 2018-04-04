import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const eventValidator = (data) => {
  const {
    center,
    eventType,
    email,
    date
  } = data;
  const errors = {};

  console.log(typeof (email));
  console.log(email);

  if (validator.isEmpty(JSON.stringify(center))) {
    errors.email = 'Please select a center';
  }

  if (validator.isEmpty(JSON.stringify(eventType))) {
    errors.eventType = 'Please select the type of event';
  }
  if (!validator.isEmpty(email)) {
    if (!validator.isEmail(email)) {
      errors.email = 'Please input a valid email';
    }
  } else {
    errors.email = 'Please enter your email.';
  }
  // console.log(date);
  if (validator.isEmpty(JSON.stringify(date))) {
    errors.date = 'Please select a date.';
  }

  console.log(errors);
  console.log(isEmpty(errors));
  return { errors, formIsValid: isEmpty(errors) };
};

export default eventValidator;
