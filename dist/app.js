"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var app = (0, _express["default"])();
app.use((0, _express.json)());
app.get('/', function (req, res) {
  res.json({
    status: 'success',
    message: 'Welcome to my server'
  });
});
var _default = app;
exports["default"] = _default;