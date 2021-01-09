import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import room from "../controllers/googleOauth.controler";

const { expect } = chai;
chai.use(chaiHttp);

describe("Get Specific user", () => {
//   const iduser = ;
  it("should return selected user", (done) => {
    chai
      .request(app)
      .get(`/google`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
