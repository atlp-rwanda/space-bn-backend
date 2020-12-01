import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
<<<<<<< HEAD
import Config from './../../config/config';
=======
import Config from '../config/config';
>>>>>>> fixing bugs associated with Travis-ci

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = Config[env];
const db = {};

// eslint-disable-next-line import/no-mutable-exports
let sequelize;

<<<<<<< HEAD
if (config.url) {
  sequelize = new Sequelize(config.url, config);
=======
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
>>>>>>> fixing bugs associated with Travis-ci
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
<<<<<<< HEAD
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
=======
    const model = require(path.join(__dirname, file)).default(
      sequelize,
      Sequelize.DataTypes,
    );
>>>>>>> fixing bugs associated with Travis-ci
    db[model.name] = model;
  });
Object.keys(db).forEach((modelName) => {
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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { sequelize };
module.exports = db;
=======
db.sequelize = sequelize
>>>>>>> fixing bugs associated with Travis-ci
