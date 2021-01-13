import { use,chai,request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'; 

// import app from "../app";
// import chai from "chai";
// import chaiHttp from "chai-http";
// const { expect } = chai;

use(chaiHttp);

//GETTING REQUEST
describe('GETTING ALL ACCOMMODATION REQUESTS', () => {
   
 it('should fetch all requests', (done) => {
            request(app)
            .get('/')
            .end((err,res) => {
              expect(res).to.have.status(200);
             done();
           })
      });


});

