process.env.NODE_ENV = 'test'; 

import app from "../app";
import chai from "chai";
import chaiHttp from "chai-http";
const { expect } = chai;
chai.use(chaiHttp);
// create a room

describe('post/rooms', () => {
<<<<<<< HEAD
  it('it should  POST a room', () => {

      const token = " ";

      const valid_input = {
          "email": "furebo@gmail.com",
          "password": "furebo@#"
=======
  it('it should  POST a room', (done) => {

      let token = " ";

      const valid_input = {
          "email": "gilleskaba@gmail.com",
          "password": "1234567$#8"
>>>>>>> ee7c22b... Authentication and writes tests for protected endpoints
      }
        chai.request(app)
        .post('/user/signin')
        .send(valid_input)
        .then((login_response)=>{
            token = 'Bearer ' + login_response.body.token;
            chai.request(app)
<<<<<<< HEAD
            .post('/rooms')
            .set('Authorization', token)
            .send({
              hotelId: 1,
=======
            .post('/api/rooms')
            .send({
              hotelId: "005",
>>>>>>> ee7c22b... Authentication and writes tests for protected endpoints
              description: "Room for underGround",
              roomType: "First class",
              roomLabel: "label 001",
              status: "double",
            })
<<<<<<< HEAD
            .end((err, res) => {
              expect(res.status).to.equal(200);
            })
        })
  });
});

describe('post/rooms', () => {
  it('it should Not POST a room', () => {

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
              hotelId: "1",
              description: "Room for underGround",
              roomType: "First class",
              roomLabel: "label 001",
              status: "double",
            })
            .end((err, res) => {
              expect(res.status).to.equal(500);
=======
            .set('authorization', token)
            .end((err, res) => {
              expect(res.status).to.equal(200);
              done();
>>>>>>> ee7c22b... Authentication and writes tests for protected endpoints
            })
        })
  });
});

<<<<<<< HEAD
describe("put/rooms/:idroom",()=>{
  
  it("should update an existing  room ",()=>{

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
          .put(`/rooms/${idroom}`)
          .set('Authorization', token)
          .send({
            description: "Room for VIP"
          })
          .end((err, res) => {
            expect(res.status).to.equal(200);
          });
        })
      })
  }) 

  describe("put/rooms/:idroom",()=>{
  
    it("should Not update an existing  room ",()=>{
  
       const token = " ";
  
        const valid_input = {
          "email": "furebo@gmail.com",
          "password": "furebo@#"
        }
        chai.request(app)
          .post('/user/signin')
          .send(valid_input)
          .then((login_response)=>{
  
            const idroom = "0";
  
            token = 'Bearer ' + login_response.body.token; 
            chai.request(app)
            .put(`/rooms/${idroom}`)
            .set('Authorization', token)
            .send({
              description: "Room for VIP"
            })
            .end((err, res) => {
              expect(res.status).to.equal(500);
            });
          })
        })
    }) 

=======
>>>>>>> ee7c22b... Authentication and writes tests for protected endpoints
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> ee7c22b... Authentication and writes tests for protected endpoints
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
/*
  describe("Room Endpoints", () => {
      const idroom = 1;
    it("should update a Room", (done) => {
      chai
        .request(app)
        .put(`/rooms/${idroom}`)
        .send({
          hotelId: "001",
          description: "Room for VIP",
          roomType: "first class",
          roomLabel: "label 001",
          status: "double",
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
  */

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

 /* 
describe(" Room endpoint --/rooms/id" ,() => {
    //const idroom = 44;
 it("should delete selected room", (done) => {

    chai
      .request(app)
      .delete(`/rooms/${idroom}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
*/
>>>>>>> 8a244a6... Implementation for rooms CRUD operations
