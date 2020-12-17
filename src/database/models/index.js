<<<<<<< HEAD
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import envConfigs from './../../config/config';
=======
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const envConfigs =  require('../config/config');
>>>>>>> 2127b20... created routes for rooms

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
<<<<<<< HEAD
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
=======

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
>>>>>>> 2127b20... created routes for rooms
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
<<<<<<< HEAD
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
=======
>>>>>>> 2127b20... created routes for rooms

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


<<<<<<< HEAD
=======
/*
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import envConfigs from '../config/config';

const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

*/
>>>>>>> 2127b20... created routes for rooms
