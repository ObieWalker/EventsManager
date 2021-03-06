export const hostUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://obievents.herokuapp.com'
    : 'http://localhost:3000';

export const paginateData = ({
  res, centers, limit, pageNo
}) => {
  const message = 'Centers have been returned successfully';
  if (centers.count < 1) {
    return res.status(404).json({
      message: 'No centers available'
    });
  } else if (centers.rows.length < 1) {
    return res.status(404).json({
      message: 'No more centers available'
    });
  } else if (pageNo > Math.ceil(centers.count / limit)) {
    return res.status(404).json({
      message: 'No more centers available'
    });
  }
  return res.status(200).json({
    message,
    success: true,
    centers: centers.rows,
    count: centers.count
  });
};

export const paginateEvents = ({
  res, events, limit, pageNo
}) => {
  const message = 'Events have been returned successfully';
  if (events.count < 1) {
    return res.status(404).json({
      message: 'No events available'
    });
  } else if (events.rows.length < 1) {
    return res.status(404).json({
      message: 'No more events availale.'
    });
  } else if (pageNo > Math.ceil(events.count / limit)) {
    return res.status(404).json({
      message: 'No more events available'
    });
  }
  return res.status(200).json({
    message,
    success: true,
    events: events.rows,
    count: events.count
  });
};

export const paginateHistory = ({
  res, events, limit, pageNo
}) => {
  const message = 'Events have been returned successfully';
  if (events.count < 1) {
    return res.status(404).json({
      message: 'No events available'
    });
  } else if (events.rows.length < 1) {
    return res.status(404).json({
      message: 'No more events available'
    });
  } else if (pageNo > Math.ceil(events.count / limit)) {
    return res.status(404).json({
      message: 'No more events available'
    });
  }
  return res.status(200).json({
    message,
    success: true,
    events: events.rows,
    count: events.count
  });
};

export const paginateUsers = ({
  res, users, limit, pageNo
}) => {
  const message = 'Users have been returned successfully';
  if (users.count < 1) {
    return res.status(404).json({
      message: 'No users available'
    });
  } else if (users.rows.length < 1) {
    return res.status(404).json({
      message: 'No more users available'
    });
  } else if (pageNo > Math.ceil(users.count / limit)) {
    return res.status(404).json({
      message: 'No more users available'
    });
  }
  return res.status(200).json({
    message,
    success: true,
    users: users.rows,
    count: users.count
  });
};

export const paramValidator = (id) => {
  const intId = parseInt(id, 10);
  if (
    !Number.isInteger(intId) ||
    !(id.indexOf('.') === -1) ||
    Number.isNaN(id) ||
    (id.match(/[a-z]/i)) ||
    Math.sign(id) === -1 ||
    intId < 1
  ) {
    return true;
  }
  return false;
};
