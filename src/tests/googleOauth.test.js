import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import generateToken from "../utils/genToken";

var strategy = require("..");
const { expect } = chai;
chai.use(chaiHttp);

describe("passport-oauth", function () {
  it("should alias Strategy to OAuthStrategy", function () {
    expect(strategy.Strategy).to.equal(strategy.OAuthStrategy);
     });
   });
describe("Google Endpoints", () => {

  it("should login using google acount", (done) => {
    chai
      .request(app)
      .get(`/google`)
      .end((err, res) => {
      expect(res.status).to.equal(200);
        done();
      });
  });
    it("should return selected user", (done) => {
      chai
        .request(app)
        .get(`/google/callback`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  })

