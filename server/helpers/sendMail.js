import nodemailer from 'nodemailer';

const sendMail = (recieverEmail, firstname, date, center) => {
    nodemailer.createTestAccount((err, account) => {/* eslint-disable-line */
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD
      }
    });

    // setup email data with unicode symbols
    const mailOptions = {
      from: 'noreply@eventsmanager.com', // sender address
      to: recieverEmail, // receiver
      subject: 'Event Cancellation', // Subject line
      text: `Hi ${firstname}, 
              We are sad to announce that your event to be held on ${date} \
at ${center} has been cancelled due to extenuating circumstances. \
Please reschedule for a different date or center and you will \
be refunded shortly.
              
Signed,
Accolades Events`, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  });
};

export default sendMail;
