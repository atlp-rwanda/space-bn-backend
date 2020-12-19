process.env.NODE_ENV = 'test'
/*
import {chai} from 'chai';

import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

use(chaiHttp);
describe('Server!', () => {
  it('welcomes user to the api', (done) => {
    request(app)
      .get('/api')
      .end((err, res) => {
        if (err) done(err);
        // eslint-disable-next-line no-undef
        expect(res).to.have.status(200);
        // eslint-disable-next-line no-undef
        expect(res.body.status).to.equals('success');
        // eslint-disable-next-line no-undef
        expect(res.body.message).to.equals('Welcome to my server');
        done();
      });
  });
});
<<<<<<< HEAD
*/
import {chai} from 'chai';
import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).to.be.true;
  });
});

use(chaiHttp);

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).to.be.true;
=======
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
>>>>>>> 8a244a6... Implementation for rooms CRUD operations
  });
});

describe('get/getAllRooms', () => {
  it('should fetch all rooms', (done) => {
             request(app)
            .get('/api/rooms')
            .end((err,res) => {
              expect(res).to.have.status(200);
             done();
           })
      });
});


//testing getting a room by id

it('should fetch a single room', async () => {
  const id = 15;
  const res = await request(app).get(`/api/rooms/${id}`);
  expect(res).to.have.status(200);
});
