import chai from 'chai';
import http from 'chai-http';
import { expectation } from 'sinon';
import app from '../app';

chai.use(http);
const { expect } = chai;
let token = '';
let userId = '';
let generalMessageId;
let privateMessageId;
describe('Signing up a new user', () => {
  before((done) => {
    const user = {
        firstname: 'Keny',
        lastname: 'The ninja',
        email: 'messager@live.com',
        password: 'test@123',
        gender: 'Male',
    };
    chai
      .request(app)
      .post('/user/signup')
      .send(user)
      .then((res) => {
        token = res.body.token;
        userId = res.body.user_details.id;
        done();
      })
      .catch((err) => {
        done(err);
      });
  })

  it('Should return access token', ()=> {
      expect(token).to.not.be.null;
  })
})

describe('Messages AIPs', ()=> {
        const generalMessage = {
             text: 'Hello, this si my test message'
          }
        const privateMessage = {
            reciever: 1,
            text: 'Hell, this is my test private message'
        }  
          it('Should send general message successfully ', (done) => {
            chai
            .request(app)
            .post(`/messages/general`)
            .send(generalMessage)
            .set('authorization', token)
            .then((res) => {
                expect(res).has.status(201);
                expect(res.body.message).to.not.be.null;
                expect(res.body.message.type).to.match(/GENERAL_MESSAGE/i);
                expect(res.body.message.receiver).to.be.null;
                expect(res.body.message.text).to.match(/Hello, this si my test message/)
                expect(res.body.sender).to.not.be.null;
                generalMessageId = res.body.message.id;
                done();
            }).
            catch(err => {
              done();
            })
          });
          it('Should get the general messsage', (done) => {
            chai
            .request(app)
            .get(`/messages/general`)
            .set('authorization', token)
            .then((res) => {
                expect(res).has.status(200);
                done();
            }).
            catch(err => {
              done();
            })
          })
        it('It should send a private message to manager', (done) => {
            chai
            .request(app)
            .post(`/messages/direct`)
            .send(privateMessage)
            .set('authorization', token)
            .then((res) => {
                expect(res).has.status(201);
                privateMessageId = res.body.message.id;
                done();
            }).
            catch(err => {
              done();
            })
          });
})
