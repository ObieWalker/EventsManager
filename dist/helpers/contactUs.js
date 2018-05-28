'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contactUs = function contactUs(firstName, lastName, username, email, message) {
  _nodemailer2.default.createTestAccount(function (err, account) {
    /* eslint-disable-line */
    // create reusable transporter object using the default SMTP transport
    var transporter = _nodemailer2.default.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD
      }
    });
    // setup email data with unicode symbols
    var mailOptions = {
      from: email, // sender address
      to: 'obinnawalker@gmail.com', // receiver
      subject: 'Enquiry/Complaint', // Subject line
      text: message + '\n      from ' + firstName + ' ' + lastName + '\n      with username ' + username + '.' // plain text body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (err) {
        console.log(err);
        return false;
      }
      console.log(info);
      return true;
    });
  });
};

exports.default = contactUs;