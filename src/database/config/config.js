// require('dotenv').config()

import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
<<<<<<< HEAD
};
=======
}

*/
//require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config();

export const development = {
  url: process.env.DEV_DATABASE_URL,
  dialect: 'postgres',
}
export const test = {
  url: process.env.TEST_DATABASE_URL,
  dialect: 'postgres',
}
export const production = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
}

>>>>>>> 73cec4b... Implementation for rooms CRUD operations
