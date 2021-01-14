import jwt from 'jsonwebtoken';
import config from '../config/config';

export const signToken = (data) => {
  const { JWTKEY } = config;
  const {
    email, password
  } = data;
  try {
    return jwt.sign(
      {
        email, password
      },
      JWTKEY,
      { expiresIn: '1d' }
    );
  } catch (error) {
    throw new Error('No token');
  }
};
