import isEmpty from 'lodash/isEmpty';

const eventValidator = (data) => {
  const {
    center,
    eventType,
    date,
    guestNo
  } = data;
  const errors = {};
  const eventDate = new Date(date.date);


  if (center.value === '') {
    errors.center = 'Please select a center';
  }
  if (eventType === '') {
    errors.eventType = 'Please select the type of event';
  }

  if (date === '') {
    errors.date = 'Please select a date.';
  } else if (eventDate < Date.now()) {
    errors.date = 'Please select a date in the future.';
  }

  if (guestNo === '') {
    errors.guestNo = 'Please select a guest estimate.';
  }

  return { errors, formIsValid: isEmpty(errors) };
};

export default eventValidator;
