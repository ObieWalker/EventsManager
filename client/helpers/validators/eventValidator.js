import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const eventValidator = (data) => {
  const center = data.center.trim(),
    date = data.date.trim(),
    eventType = data.city.trim(),
    guestNo = data.facility.trim(),
    email = data.facility.trim(),
    errors = {};


  if (validator.isEmpty(center)) {
    errors.name = 'You have to select a center name.';
  }

  if (!validator.isEmpty(date)) {
    console.log('not empty');
    if (!validator.toDate(date)) {
      errors.date =
        'Please pick a valid date.';
      console.log('short length');
    }
  } else {
    errors.address = 'Your event must have a date';
    console.log('is empty');
  }

  if (validator.isEmpty(eventType)) {
    errors.city = 'Please select the type of event.';
  }

  if (!validator.isEmail(email)) {
    errors.email = 'Please input a valid email';
  }

  if (validator.isEmpty(guestNo)) {
    errors.email = 'Please enter a guest estimate';
  }
  console.log(errors);
  console.log(isEmpty(errors));
  return { errors, formIsValid: isEmpty(errors) };
};

export default eventValidator;
