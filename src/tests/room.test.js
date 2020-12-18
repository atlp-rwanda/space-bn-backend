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
