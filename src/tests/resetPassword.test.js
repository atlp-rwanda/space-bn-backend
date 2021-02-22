import { use, request, expect } from 'chai';
import http from 'chai-http';
import jwt from 'jsonwebtoken';
import { app } from '../app';

use(http);

let resetPasswordToken;
const secretKey = process.env.JWT_KEY;
describe('Testing resetPassword endpoint', () => {
  before(async () => {
    await request(app)
      .post('/user/signup')
      .send({
        firstname: 'herve',
        lastname: 'bardo',
        telephone: '0782026576',
        email: 'hervebardo@gmail.com',
        password: '7654321$#9'
      });
  });

  describe('POST /user/resetpassword', () => {
    it('Should send a link to email', async () => {
      const res = await request(app)
        .post('/user/resetpassword')
        .send({ email: 'hervebardo@gmail.com' });
      resetPasswordToken = res.body.token;
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('message');
      expect(res.body.message).to.match(/Check your email for the reset link/i);
    });
  });

  describe('PUT /user/resetpassword', () => {
    it('Should update to a new password', async () => {
      resetPasswordToken = jwt.sign('hervebardo@gmail.com', secretKey);
      const res = await request(app)
        .patch(`/user/resetpassword?token=${resetPasswordToken}`)
        .send({ password: '123456789$gogo1' });

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('message');
      expect(res.body.message).to.match(/Password was reset successfully/i);
    });
  });
});
