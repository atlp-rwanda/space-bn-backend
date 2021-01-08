require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
    callBackUrl: process.env.CALLBACKURL,
    clientSecret: process.env.CLIENTSECRET,
    clientID: process.env.CLIENTID,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    database: process.env.TEST_DATABASE_URL,
    password: process.env.TEST_DB_PASSWORD,
    username: process.env.TEST_DB_USERNAME,
    dialect: "postgres",
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};