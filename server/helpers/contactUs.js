import nodemailer from 'nodemailer';

const contactUs = (firstName, lastName, username, email, message) => {
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
      from: email, // sender address
      to: 'obinnawalker@gmail.com', // receiver
      subject: 'Enquiry/Complaint', // Subject line
      text: `${message}
      from ${firstName} ${lastName}
      with username ${username}.` // plain text body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (err) {
        console.log(err);
        return false;
      }
      console.log(info);
      return true;
    });
  });
};

export default contactUs;
