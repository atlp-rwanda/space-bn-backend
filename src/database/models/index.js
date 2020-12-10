import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import Config from './../../config/config';


const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = Config[env];
const db = {};

// eslint-disable-next-line import/no-mutable-exports
let sequelize;


if (config.url) {
  sequelize = new Sequelize(config.url, config);

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);

} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {

    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);

    const model = require(path.join(__dirname, file)).default(
      sequelize,
      Sequelize.DataTypes,
    );

    db[model.name] = model;
  });
Object.keys(db).forEach((modelName) => {

import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize from 'sequelize';
import envConfigs from '../config/config';

// import Config from '../config/config';

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
    const model = sequelize['import'](join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {

  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



db.sequelize = sequelize;
db.Sequelize = Sequelize;


export { sequelize };
module.exports = db;

db.sequelize = sequelize


export default db;
