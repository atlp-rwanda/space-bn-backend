process.env.NODE_ENV = 'test'; 

import app from "../app";
import chai from "chai";
import chaiHttp from "chai-http";
const { expect } = chai;
chai.use(chaiHttp);
// create a blog

describe('post/rooms', () => {
  it('it should  POST a room', (done) => {

      let token = " ";

      const valid_input = {
          "email": "gilleskaba@gmail.com",
          "password": "1234567$#8"
      }
        chai.request(app)
        .post('/user/signin')
        .send(valid_input)
        .then((login_response)=>{
            token = 'Bearer ' + login_response.body.token;
            chai.request(app)
            .post('/api/rooms')
            .send({
              hotelId: "005",
              description: "Room for underGround",
              roomType: "First class",
              roomLabel: "label 001",
              status: "double",
            })
            .set('authorization', token)
            .end((err, res) => {
              expect(res.status).to.equal(200);
              done();
            })
        })
  });
});

describe("Get All Rooms", () => {
     it("should return an array of the all Rooms", (done) => {
      chai
        .request(app)
        .get("/rooms")
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);    
          done();
        });
    });
  });

describe("Get Specific Room", () => {
  const idroom = 1;
  it("should return selected room", (done) => {
    chai
      .request(app)
      .get(`/rooms/${idroom}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});


 describe("put/rooms/:id",()=>{
  const idroom = 1;

  it("should update an existing  room ",(done)=>{
       
     let token = " ";

      const valid_input = {
        "email": "gilleskaba@gmail.com",
        "password": "1234567$#8"
      }
      chai.request(app)
        .post('/user/signin')
        .send(valid_input)
        .then((login_response)=>{
          token = 'Bearer ' + login_response.body.token; 
          chai.request(app)
          .put("/api/rooms/" + idroom)
          .set('authorization', token)
          .send({
            description: "Room for VIP",
            roomType: "first class",
            roomLabel: "label 001"
          })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
        })
      })
  }) 

