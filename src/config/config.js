require('dotenv').config()

export const development = {
  url: process.env.DEV_DATABASE_URL,
  dialect: 'postgres',
}
export const test = {
  url: process.env.TEST_DATABASE_URL,
  database: process.env.TEST_DATABASE_URL,
  password: process.env.TEST_DB_PASSWORD,
  username: process.env.TEST_DB_USERNAME,
  dialect: 'postgres',
}
export const production = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
}
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
export const development = {
  url: process.env.DEV_DATABASE_URL,
  dialect: 'postgres',
};
export const test = {
  url: process.env.TEST_DATABASE_URL,
  dialect: 'postgres',
};
export const production = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
};
