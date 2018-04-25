
export const hostUrl = process.env.NODE_ENV === 'production' ?
  'https://obievents.herokuapp.com' : 'http://localhost:3000';

export const route = '/api/v1/';

export const getMoreUrl = (limit, pageNo, totalCenters, path) =>
  (pageNo + 1 <= Math.ceil(totalCenters / limit) ?
    `${hostUrl}${path}/?page=${pageNo + 1}&limit=${limit}` : null);

export const getMoreEvents = (limit, pageNo, totalEvents, path) =>
  (pageNo + 1 <= Math.ceil(totalEvents / limit) ?
    `${hostUrl}${path}/?page=${pageNo + 1}&limit=${limit}` : null);

export const paginateData = ({
  req, res, centers, limit, pageNo
}) => {
  let info = 'Centers have been returned successfully';
  if (centers.count < 1) {
    info = 'No centers available';
  } else if (centers.rows.length < 1) {
    info = 'No centers in this set';
  } else if (pageNo > Math.ceil(centers.count / limit)) {
    return res.status(404).json({
      info: 'No more centers available'
    });
  }
  return res.status(200).json({
    info,
    success: true,
    centers: centers.rows,
    count: centers.count,
    more: getMoreUrl(limit, pageNo, centers.count, req.path)
  });
};

export const paginateEvents = ({
  req, res, events, limit, pageNo
}) => {
  const info = 'Events have been returned successfully';
  if (events.count < 1) {
    return res.status(404).json({
      info: 'No events available'
    });
  } else if (events.rows.length < 1) {
    return res.status(404).json({
      info: 'No events in this set'
    });
  } else if (pageNo > Math.ceil(events.count / limit)) {
    return res.status(404).json({
      info: 'No more events available'
    });
  }
  return res.status(200).json({
    info,
    success: true,
    events: events.rows,
    count: events.count,
    more: getMoreEvents(limit, pageNo, events.count, req.path)
  });
};

export const paginateUsers = ({
  req, res, users, limit, pageNo
}) => {
  const info = 'Users have been returned successfully';
  if (users.count < 1) {
    return res.status(404).json({
      info: 'No users available'
    });
  } else if (users.rows.length < 1) {
    return res.status(404).json({
      info: 'No users in this set'
    });
  } else if (pageNo > Math.ceil(users.count / limit)) {
    return res.status(404).json({
      info: 'No more users available'
    });
  }
  return res.status(200).json({
    info,
    success: true,
    users: users.rows,
    count: users.count,
    more: getMoreEvents(limit, pageNo, users.count, req.path)
  });
};
