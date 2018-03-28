import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const eventValidator = (data) => {
  const { email } = data;
  const errors = {};


  if (!validator.isEmail(email)) {
    errors.email = 'Please input a valid email';
  }

  console.log(errors);
  console.log(isEmpty(errors));
  return { errors, formIsValid: isEmpty(errors) };
};

export default eventValidator;
