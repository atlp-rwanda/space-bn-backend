"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var PORT = process.env.PORT || 5000; // eslint-disable-next-line no-console

_app["default"].listen(PORT, function () {
  return console.log("App listening on port ".concat(PORT));
});