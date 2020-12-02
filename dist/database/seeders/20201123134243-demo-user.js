"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function up(_x, _x2) {
  return _up.apply(this, arguments);
}

function _up() {
  _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryInterface, Sequelize) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return queryInterface.bulkInsert('exampleTable', [{
              name: 'jemima',
              email: 'jemima@gmail.com',
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: 'mugabo',
              email: 'mugabo@gmail.com',
              createdAt: new Date(),
              updatedAt: new Date()
            }], {});

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _up.apply(this, arguments);
}

function down(_x3, _x4) {
  return _down.apply(this, arguments);
}

function _down() {
  _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryInterface, Sequelize) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryInterface.bulkDelete('exampleTable', null, {});

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _down.apply(this, arguments);
}