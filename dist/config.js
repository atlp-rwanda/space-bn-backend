"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _pg = _interopRequireDefault(require("pg"));

_dotenv["default"].config();

var client = new _pg["default"].Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE_URL
});
exports.client = client;