import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import generateToken from "../utils/genToken";
import { mock } from "sinon";
import { googleFunction } from "../controllers/googleOauth";
import { userToken } from "../routes/googleOuth.route";

var strategy = require("..");
const { expect } = chai;
chai.use(chaiHttp);
const userId = 1;

const mockUser = {
  id: 1,
  firstName: "test1",
  lastName: "test2",
  email: "test@gmail.com",
};
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
  it("should call done once after find or create user", async () => {
    const doneMock = mock();
    const mockUser = {
      _json: {
        first_name: "testuser1",
        last_name: "testuser",
        email: "testUser@gmail.com",
      },
    };

    await googleFunction(null, null, mockUser, doneMock);
  });

  it("Aouth Login", async () => {
    const req = { user: mockUser };
    const res = {
      status: () => ({
        json: () => undefined,
      }),
    };
    const nextMock = mock();
    await userToken(req, res, nextMock);
  });
});
    
