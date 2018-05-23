import isEmpty from 'lodash/isEmpty';

const eventValidator = (data) => {
  const {
    center,
    eventType,
    date,
    guestNo
  } = data;
  const errors = {};
  const eventDate = new Date(date);

  if (center.value === '') {
    errors.center = 'Please select a center';
  }
  if (eventType === '' || eventType === 'Choose the type of event') {
    errors.eventType = 'Please select the type of event';
  }

  if (date === '') {
    errors.date = 'Please select a date.';
  } else if (eventDate < Date.now()) {
    errors.date = 'You cannot select a past date.';
  }

  if (guestNo === '' || guestNo < 1) {
    errors.guestNo = 'Please select a guest estimate.';
  }

  return { errors, formIsValid: isEmpty(errors) };
};

export default eventValidator;
