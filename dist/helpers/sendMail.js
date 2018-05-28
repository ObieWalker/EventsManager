'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendMail = function sendMail(receiverEmail, firstname, date, center, address) {
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
      from: 'noreply@eventsmanager.com', // sender address
      to: receiverEmail, // receiver
      subject: 'Event Cancellation', // Subject line
      text: 'Hi ' + firstname + ', \n              We are sad to announce that your event  on ' + date + ' at ' + center + ', ' + address + ' has been cancelled due to extenuating circumstances. Please reschedule for a different date or center and you will be refunded shortly.\n              \nSigned,\nAccolades Events' // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  });
};

exports.default = sendMail;