import chai from 'chai';

import http from 'chai-http';

import app from '../app';

import data from './util';

process.env.NODE_ENV = 'test';

let hotelId = 1;

const { expect } = chai;

const should = chai.should();

chai.use(http);

describe('Hotel models', () => {
  describe('All hotels', () => {
    it('should return all hotels', (done) => {
      chai
        .request(app)
        .get('/api/v1/hotels/allHotels')
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('When the Admin try to create a hotel --/createHotel', () => {
    it('should return the created hotel ', (done) => {
      chai
        .request(app)
        .post('/api/v1/hotels/createHotel')
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

  describe('Get Specific hotel', () => {
    const id = hotelId;
    it('should return selected hotel', (done) => {
      chai
        .request(app)
        .get(`/api/v1/hotels/hotel/${hotelId}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });

  describe('Update specific hotel', () => {
    // const id = hotelId;
    it('should update a hotel', (done) => {
      chai
        .request(app)
        .patch(`/api/v1/hotels/updateHotel/${hotelId}`)
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
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});
