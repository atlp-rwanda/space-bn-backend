import { use, assert,request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'; 


use(chaiHttp);

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).to.be.true;
  });
});

describe('BOOKING TESTS', () => {
  
  it('should fetch all requests', (done) => {
             request(app)
            .get('/')
            .end((err,res) => {
              expect(res).to.have.status(200);
             done();
           })
      });
      
});
