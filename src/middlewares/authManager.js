/* eslint-disable import/prefer-default-export */
import { verify } from 'jsonwebtoken';
import { config } from 'dotenv';
import roleService from '../services/role';

config();

const { findRoleById } = roleService;

export const authManager = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) return res.status(403).json({ message: 'Please login!' });

    const token = header.split(' ')[1],
      userData = verify(token, process.env.JWT_KEY),
      { roleId } = userData;

    if (roleId === null) return res.status(403).json({ message: 'No role assigned!' });

    const role = await findRoleById(roleId),
      { name } = role;

    if (name !== 'MANAGER') return res.status(403).json({ message: 'Access denied!' });

    next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
