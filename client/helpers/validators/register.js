import validator from 'validator';
import isEmpty from 'lodash/isEmpty';


const formIsValid = (data) => {
  const errors = {};
  console.log(data.verifyPassword);

  if (!validator.isEmail(data.email)) {
    errors.email = 'Invalid email address';
  }
  if (!validator.isEmpty(data.firstName)) {
    if (data.firstName.search(/[^A-Za-z\s]/) !== -1) {
      errors.firstName = 'Your first name can only contain alphabets';
    }
  } else { errors.lastName = 'Your first name is required'; }

  if (!validator.isEmpty(data.lastName)) {
    if (data.lastName.search(/[^A-Za-z\s]/) !== -1) {
      errors.lastName = 'Your last name can only contain alphabets';
    }
  } else { errors.lastName = 'Your last name is required'; }

  if (!validator.isLength(data.firstName, { min: 3, max: undefined })) {
    errors.firstName = 'Your first name has to be more than 2 characters';
  }
  if (!validator.isLength(data.lastName, { min: 3, max: undefined })) {
    errors.lastName = 'Your last name has to be more than 2 characters';
  }
  if (!validator.isLength(data.username, { min: 3, max: undefined })) {
    errors.username = 'Your username has to be more than 2 characters';
  }
  if (!validator.isLength(data.password, { min: 6, max: undefined })) {
    errors.password = 'Password must contain 6 or more characters';
  }

  // if (!validator.isEmpty(data.verifyPassword)) {
  //   if (!validator.isE(
  //     validator.trim(data.verifyPassword),
  //     validator.trim(data.password)
  //   )) {
  //     errors.verifyPassword = 'Password do not match';
  //   }
  // } else { errors.verifyPassword = 'Password confirmation is required'; }

  return { errors, isValid: isEmpty(errors) };
};
export default formIsValid;
