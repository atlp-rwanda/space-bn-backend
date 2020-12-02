"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = require("chai");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

// const { expect } = chai;
(0, _chai.use)(_chaiHttp["default"]);
describe('Server!', function () {
  it('welcomes user to the api', function (done) {
    (0, _chai.request)(_app["default"]).get('/').end(function (err, res) {
      // eslint-disable-next-line no-undef
      (0, _chai.expect)(res).to.have.status(200); // eslint-disable-next-line no-undef

      (0, _chai.expect)(res.body.status).to.equals('success'); // eslint-disable-next-line no-undef

      (0, _chai.expect)(res.body.message).to.equals('Welcome to my server');
      done();
    });
  });
});