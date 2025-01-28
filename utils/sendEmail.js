// utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email, code) => {
  // Configure your SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., Gmail, Outlook
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Account',
    text: `Your verification code is: ${code}`,
    html: `<p>Your verification code is: <b>${code}</b></p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmail;
