process.env.NODE_ENV = 'test';

import chai from 'chai';

import http from 'chai-http';

import app from '../app';

import db from '../database/config/test_db';

import data from './util';

const should = chai.should();

chai.use(http);

const { expect } = chai;

// describe('User registration', () => {
//   before('clear database', () => {
//     db.query('DELETE FROM hotels', (err, results) => {
//       if (err) throw err;
//       // eslint-disable-next-line no-console
//       else console.log('OK!!!!');
//     });
//   });
//   it('create a hotel on /api/v1/hotels/createHotel POST', (done) => {
//     chai.request(app)
//       .post('/api/v1/hotels/createHotel')
//       .send(data.postHotel)
//       .then((res) => {
//         expect(res).to.have.status(201);
//         res.should.be.json;
//         // expect(res.body.message).to.be.equal('User registered');
//         // expect(res.body.postHotel.id).to.exist;
//         expect(res.body.postHotel.hotelname).to.exist;
//         expect(res.body.postHotel.priceRange).to.exist;
//         expect(res.body.postHotel.location).to.exist;
//         expect(res.body.postHotel.ranking).to.exist;
//         expect(res.body.postHotel.parking).to.exist;
//         expect(res.body.postHotel.wifi).to.exist;
//         expect(res.body.postHotel.swimmingPool).to.exist;
//         expect(res.body.postHotel.breakfast).to.exist;
//         expect(res.body.postHotel.rooms).to.exist;
//         expect(res.body.postHotel.avatar).to.exist;
//         done();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// });

describe('hotels', () => {
  it('should list All hotels on /api/v1/hotels/allHotels GET', function(done) {
    chai.request(app)
      .get('/api/v1/hotels/allHotels')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
});
  it('should list a SINGLE hotel on /api/v1/hotels/hotel/<id> GET');
  it('should add a SINGLE hotel on /api/v1/hotels/createHotel POST');
  it('should update a SINGLE hotel on /api/v1/hotels/updateHotel/<id> PATCH');
  it('should delete a SINGLE hotel on /api/v1/hotels/deleteHotel/<id> DELETE');
});
