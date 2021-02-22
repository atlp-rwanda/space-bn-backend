import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import { findUser, updateUser } from '../services/user';
import mailer from '../utils/mailer';

config();

const secretKey = process.env.JWT_KEY;
export const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await findUser(email);
    if (!user) return res.status(404).json({ message: res.__('There is no user with that email')});
    const token = jwt.sign(email, secretKey);
    await mailer(['reset-password', {
      email,
      resetBody: `${process.env.HOST}/users/resetpassword?token=${token}`
    }, email
    ]);

    res.status(200).json({ message: res.__('Check your email for the reset link') });
  } catch (error) {
    return res.status(500).json({ message: res.__('Internal server error!') });
  }
};

export const createNewPassword = async (req, res) => {
  try {
    // verifying the token sended to the user email
    const email = jwt.verify(req.query.token, secretKey);
    // check if the user exist using his or her email
    const exist = await findUser(email);
    if (!exist) return res.status(404).json({ message: res.__('There is no user with that email') });

    // new password recorded
    const { password } = req.body;
    if (!password) return res.status(400).json({ message: res.__('Password cannot be empty') });

    // hashed the user new password
    const hashedPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    // updating the old password with the new one
    await updateUser(email, { password: hashedPassword });

    return res.status(200).json({ message: res.__('Password was reset successfully') });
  } catch (error) {
    return res.status(500).json({ message: res.__('Internal server error!') });
  }
};
