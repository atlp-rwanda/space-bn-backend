import chai from 'chai';
import http from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../app';
import model from '../database/models';

const { expect } = chai;

process.env.NODE_ENV = 'test';
const { ADMIN_PASSWORD } = process.env;

chai.use(http);
let token = '',
  tokenAdmin = '',
  hotelId;

describe('Testing hotel endpoints', () => {
  describe('Signin SuperAdmin', () => {
    before(async () => {
      const res = await chai.request(app)
        .post('/user/signin')
        .send({
          email: 'spacenomad@gmail.com',
          password: ADMIN_PASSWORD
        });
      tokenAdmin = res.body.token;
    });
  
    describe('Create Hotel', () => {
      it('should create hotel', async () => {
        const res = await chai.request(app)
          .post('/hotels')
          .set('authorization', tokenAdmin)
          .send({
              hotelname: 'Marriott',
              location: 'Kigali',
              coordinates: [2.3845, 29.4644],
              pricerange: '$320',
              ranking: 5,
              parking: 'Yes',
              wifi: 'Yes',
              swimmingpool: 'Yes',
              breakfast: 'Yes',
              hotelemail: 'infos@marriott.com'
            });
        hotelId = res.body.id;
        expect(res).to.have.status(201);
      }); 
    });
    
      describe('Getting hotels', () => {
        before(() => {
          const user = {
            email: 'leny@gmail.com',
            password: 'furebo@#'
          };
          token = `JWT ${jwt.sign(JSON.parse(JSON.stringify(user)), process.env.JWT_KEY, { expiresIn: '1h' })}`;
        });
        
        it('should return all hotels', (done) => {
          chai
            .request(app)
            .get('/hotels')
            .end((err, res) => {
              if (err) done(err);
              expect(res).to.have.status(200);
              done();
            });
        });
      });
    
    describe(' Returning selected hotel', () => {
      it('should return selected hotel', (done) => {
        chai
          .request(app)
          .get(`/hotels/1`)
          .set('authorization', token)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
    });
    
    describe(' Update selected hotel', () => {
      it('should update a hotel', (done) => {
        chai
          .request(app)
          .patch(`/hotels/1`)
          .set('authorization', token)
          .send({
            hotelname: 'Amahuwezi Hotel',
            pricerange: '$80',
            location: 'Musanze',
            ranking: '3 star',
            parking: 'Yes',
            wifi: 'Yes',
            swimmingpool: 'no',
            breakfast: 'depends',
            hotelemail: 'five@yahoo.com'
          })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
    });
    describe(' Delete selected hotel', () => {
      before((done) => {
        chai.request(app)
          .post('/hotels')
          .set('authorization', token)
          .send({
            hotelname: 'Serena Hotel',
            pricerange: '$80',
            location: 'Gisenyi',
            ranking: '3 star',
            parking: 'Yes',
            wifi: 'Yes',
            swimmingpool: 'no',
            breakfast: 'Yes',
            hotelemail: 'five@yahoo.com'
          })
          .end((err, res) => {
            expect(res.status).to.equal(201);
            done();
          });
      });
      it('should return 200 if hotel deleted', async () => {
        const allHotels = await model.hotel.findAll();
        const hotelToDelete = allHotels[1].dataValues.id;
        chai
          .request(app)
          .delete(`/hotels/1`)
          .set('authorization', token)
          .end((err, res) => {
            expect(res.status).to.equal(200);
          });
      });
    });
  });
});

