import { use,chai,request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'; 

// import app from "../app";
// import chai from "chai";
// import chaiHttp from "chai-http";
// const { expect } = chai;

use(chaiHttp);


//POSTING REQUEST
describe('POSTING AN ACCOMMODATION REQUEST TEST', () => {

  it('it should  POST a request', (done) => {

      const token = " ";

      const valid_input = {
          email: "jemima1@gmail.com",
          password: "1234567$#8"
      }
        chai.request(app)
        .post('/user/signin')
        .send(valid_input)
        .then((login_response)=>{
            token = 'Bearer ' + login_response.body.token;
            chai.request(app)
            .post('/')
            .set('authorization', token)
            .send({
              dateStart:"01-13-2020",
              dateEnd: "12-10-2021" ,
              idRoom:3, 
            })
            .end((err, res) => {
              expect(res.status).to.equal(200);
              done();
            })
        })
  });
});

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

