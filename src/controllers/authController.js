import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Sequelize, Model, DataTypes } from 'sequelize';

const model = require('../database/models');

export async function register(req, res) {
  const {
    username, email, password, confirmpassword
  } = req.body;

  if (password !== confirmpassword) {
    res.send({
      status: 404,
      message: 'password do not match'
    });
  } else {
    const hashedpassword = await hash(password, 8);
    getConnection((err, connection) => {
      if (err) throw err;
      connection.query('INSERT INTO users SET ? ', {
        username,
        email,
        password: hashedpassword
      }, (err, results) => {
        if (err) throw err;
        else {
          res.send({
            status: 200,
            message: 'user created '
          });
        }
        connection.release();
      });
    });
  }
}

export function login(req, res) {
  const { email, password } = req.body;
  getConnection((err, connection) => {
    if (err) throw err;
    else {
      connection.query('SELECT * FROM users WHERE email =?', [email], async (err, results) => {
        if (err) throw err;
        console.log(results);

        if (results.lenght < 1) {
          res.send({
            message: 'user do not exist'
          });
        } else if (!(await compare(password, results[0].password))) {
          res.send({
            message: 'wrong password'
          });
        } else {
          const { username, id } = results[0];
          const token = sign({ username, id }, 'thiIs');
          res.send({
            token,
            message: 'now logged in'
          });
        }
        connection.release();
      });
    }
  });
}

export function allHotels(req, res) {
  getConnection((err, connection) => {
    if (err) throw err;
    else {
      connection.query('SELECT * FROM hotels', (err, results) => {
        if (err) throw err;
        else {
          res.send({
            data: results
          });
        }
        connection.release();
      });
    }
  });
}
