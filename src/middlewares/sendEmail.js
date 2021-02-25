import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import { template } from '../utils/emailVerificationtemplate';

dotenv.config();

export const sendVerificationEmail = async (firstname, email, token) => {
  const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY
    })
  );

  // email details
  const mailOptions = {
    from: `Barefoot Nomad<${process.env.PROJECTEMAIL}`,
    to: email,
    subject: 'Verification Email',
    html: template(firstname, token),
    mail_settings: {
      sandbox_mode: {
        enable: process.env.NODE_ENV === 'test' ? true : false
      }
    },
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Message sent!!!');
    }
  });
};
