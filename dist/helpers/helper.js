'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hostUrl = exports.hostUrl = process.env.NODE_ENV === 'production' ? 'https://obievents.herokuapp.com' : 'http://localhost:3000';

var paginateData = exports.paginateData = function paginateData(_ref) {
  var res = _ref.res,
      centers = _ref.centers,
      limit = _ref.limit,
      pageNo = _ref.pageNo;

  var message = 'Centers have been returned successfully';
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
    message: message,
    success: true,
    centers: centers.rows,
    count: centers.count
  });
};

var paginateEvents = exports.paginateEvents = function paginateEvents(_ref2) {
  var res = _ref2.res,
      events = _ref2.events,
      limit = _ref2.limit,
      pageNo = _ref2.pageNo;

  var message = 'Events have been returned successfully';
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
    message: message,
    success: true,
    events: events.rows,
    count: events.count
  });
};

var paginateHistory = exports.paginateHistory = function paginateHistory(_ref3) {
  var res = _ref3.res,
      events = _ref3.events,
      limit = _ref3.limit,
      pageNo = _ref3.pageNo;

  var message = 'Events have been returned successfully';
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
    message: message,
    success: true,
    events: events.rows,
    count: events.count
  });
};

var paginateUsers = exports.paginateUsers = function paginateUsers(_ref4) {
  var res = _ref4.res,
      users = _ref4.users,
      limit = _ref4.limit,
      pageNo = _ref4.pageNo;

  var message = 'Users have been returned successfully';
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
    message: message,
    success: true,
    users: users.rows,
    count: users.count
  });
};

var paramValidator = exports.paramValidator = function paramValidator(id) {
  var intId = parseInt(id, 10);
  if (!Number.isInteger(intId) || !(id.indexOf('.') === -1) || Number.isNaN(id) || id.match(/[a-z]/i) || Math.sign(id) === -1 || intId < 1) {
    return true;
  }
  return false;
};