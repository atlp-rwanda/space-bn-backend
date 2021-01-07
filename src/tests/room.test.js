process.env.NODE_ENV = 'test'; 

import app from "../app";
import chai from "chai";
import chaiHttp from "chai-http";
const { expect } = chai;
chai.use(chaiHttp);
// create a room

describe('post/rooms', () => {
  it('it should  POST a room', () => {

      const token = " ";

      const valid_input = {
          "email": "furebo@gmail.com",
          "password": "furebo@#"
      }
        chai.request(app)
        .post('/user/signin')
        .send(valid_input)
        .then((login_response)=>{
            token = 'Bearer ' + login_response.body.token;
            chai.request(app)
            .post('/rooms')
            .set('Authorization', token)
            .send({
              hotelId: 1,
              description: "Room for underGround",
              roomType: "First class",
              roomLabel: "label 001",
              status: "double",
            })
            .end((err, res) => {
              expect(res.status).to.equal(200);
            })
        })
  });
});

describe("put/rooms/:idroom",()=>{
  
  it("should update an existing  room ",(done)=>{

     const token = " ";

      const valid_input = {
        "email": "furebo@gmail.com",
        "password": "furebo@#"
      }
      chai.request(app)
        .post('/user/signin')
        .send(valid_input)
        .then((login_response)=>{

          const idroom = 1;

          token = 'Bearer ' + login_response.body.token; 
          chai.request(app)
          .put(`/api/rooms/${idroom}`)
          .set('Authorization', token)
          .send({
            description: "Room for VIP"
          })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
        })
      })
  }) 

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
  const roomId = 1;
  it("should return selected room", () => {
    chai
      .request(app)
      .get(`/rooms/${roomId}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
      });
  });
});



