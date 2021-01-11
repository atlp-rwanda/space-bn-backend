import chai from 'chai';

import http from 'chai-http';

import app from '../app';

// import { token } from './fixtures/defaultData';

process.env.NODE_ENV = 'test';

let hotelId = 1;

let token = '';

const { expect } = chai;

chai.use(http);

describe('Testing hotel endpoints', () => {
  before((done) => {
    const logged_user = {
      email: 'gilleskaba@gmail.com',
      password: '1234567$#8',
    };
    chai.request(app)
      .post('/user/signin')
      .send(logged_user)
      .then((login_response) => {
        token = `JWT ${login_response.body.token.split[1]}`;
      });
    done();
  });
  describe('Returning all hotels', () => {
    it('should return all hotels', (done) => {
      chai
        .request(app)
        .get('/api/v1/hotels/allHotels')
        .set('authorization', token)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should return the created hotel ', (done) => {
      chai
        .request(app)
        .post('/api/v1/hotels/createHotel')
        .set('Authorization', token)
        .send({
          hotelname: 'Umubavu Hotel',
          pricerange: '$80',
          location: 'Musanze',
          ranking: '3 star',
          parking: 'Yes',
          wifi: 'Yes',
          swimmingpool: 'no',
          breakfast: 'Yes',
          rooms: ['Double rooms', 'Single rooms', 'complex rooms'],
          images: ['www.unsplash.com/umubavu', 'www.gettyimages/umubavuhotel'],
          hotelemail: 'five@yahoo.com'
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          console.log('===========$$$$$$$', res.body.hotel.hotelId);
          hotelId = res.body.hotel.hotelId;
          done();
        });
    });
  });

  describe(' Returning selected hotel', () => {
    // const id = hotelId;
    it('should return selected hotel', (done) => {
      chai
        .request(app)
        .get(`/api/v1/hotels/hotel/${hotelId}`)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });

  describe(' Update selected hotel', () => {
    // const id = hotelId;
    it('should update a hotel', (done) => {
      chai
        .request(app)
        .patch(`/api/v1/hotels/updateHotel/${hotelId}`)
        .set('Authorization', token)
        .send({
          hotelname: 'Amahuwezi Hotel',
          pricerange: '$80',
          location: 'Musanze',
          ranking: '3 star',
          parking: 'Yes',
          wifi: 'Yes',
          swimmingpool: 'no',
          breakfast: 'depends',
          rooms: ['Double rooms', 'Single rooms', 'complex rooms'],
          images: ['www.unsplash.com/umubavu', 'www.gettyimages/umubavuhotel'],
          hotelemail: 'five@yahoo.com'
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });

  describe(' Delete endpoint selected hotel', () => {
  // const id = hotelId;
    it('should delete selected hotel', (done) => {
      chai
        .request(app)
        .delete(`/api/v1/hotels/deleteHotel/${hotelId}`)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});
