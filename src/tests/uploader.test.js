import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../app';
import model from '../database/models';

use(chaiHttp);

process.env.NODE_ENV = 'test';
const { ADMIN_PASSWORD } = process.env;

let tokenAdmin = '';

describe('Upload endpoints', () => {
  describe('Signin SuperAdmin', () => {
    before(async () => {
      const res = await request(app)
        .post('/user/signin')
        .send({
          email: 'spacenomad@gmail.com',
          password: ADMIN_PASSWORD
        });
      tokenAdmin = res.body.token;
    });
  
    it('should create hotel', async () => {
      const res = await request(app)
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
          hotelemail: 'infos@marriott.com',
          image: ''
        });
      expect(res).to.have.status(500);
    }); 
  });
});
