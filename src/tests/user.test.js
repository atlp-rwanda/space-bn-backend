/* eslint-disable no-console */
import chai from 'chai';
import http from 'chai-http';
import app from '../app';
import generateToken from '../utils/genToken';

chai.use(http);
const { expect } = chai;
const userId = 1;
describe('User registration', () => {
  it('should return 201 and confirmation for valid input', (done) => {
    chai.request(app).post('/user/signup')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('firstname', 'keza')
      .field('lastname', 'janet')
      .field('telephone', '0783977618')
      .field('email', 'keza@gmail.com')
      .field('password', '1234567avb$#8')
      .field('gender', 'Male')
      .field('origin', 'rwandan')
      .field('age', 27)
      .field('identification_type', 'ID')
      .field('identification_number', '1122020333')
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.equal('You are registered, Please check your email to verify your account');
        expect(res.body.user_details.id).to.exist;
        expect(res.body.user_details.firstname).to.exist;
        expect(res.body.user_details.lastname).to.exist;
        expect(res.body.user_details.email).to.exist;
        expect(res.body.user_details.password).to.exist;
        expect(res.body.user_details.origin).to.exist;
        expect(res.body.user_details.age).to.exist;
        expect(res.body.user_details.identification_type).to.exist;
        expect(res.body.user_details.identification_number).to.exist;
        expect(res.body.user_details.user_image).to.exist;
        done();
      })
      .catch((err) => {
        throw (err);
      });
  });
  // test for invalid input
  it('should return 422 for invalid email input', (done) => {
    chai.request(app).post('/user/signup')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('firstname', 'keza')
      .field('lastname', 'janet')
      .field('telephone', '0783977618')
      .field('email', '')
      .field('password', '1234567avb$#8')
      .field('gender', 'Male')
      .field('origin', 'rwandan')
      .field('age', '27')
      .field('identification_type', 'ID')
      .field('identification_number', '1122020333')
      .then((res) => {
        expect(res).to.have.status(422);
        done();
      })
      .catch((err) => {
        throw (err);
      });
  });
  // test an existing e-mail
  it('Should return error 409 when email already registered', (done) => {
    chai.request(app).post('/user/signup')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('firstname', 'keza')
      .field('lastname', 'janet')
      .field('telephone', '0783977618')
      .field('email', 'keza@gmail.com')
      .field('password', '1234567avb$#8')
      .field('gender', 'Male')
      .field('origin', 'rwandan')
      .field('age', '27')
      .field('identification_type', 'ID')
      .field('identification_number', '1122020333')
      .then((res) => {
        expect(res).to.have.status(409);
        expect(res.body.message).to.be.equal('Email already registered');
        done();
      })
      .catch((err) => {
        throw (err);
      });
  });
});

describe('User Signin', () => {
  it('should return error 401 for invalid email', (done) => {
    // mock invalid user input
    const wrongInput = {
      email: 'kez@gmail.com',
      password: '1234567avb$#8'
    };
    // send request to the server
    chai.request(app).post('/user/signin')
      .send(wrongInput)
      .then((res) => {
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('Authentication failed. User not found.');
        done();
      })
      .catch((err) => {
        throw (err.message);
      });
  });
  it('should return error 401 for invalid credentials', (done) => {
    // mock invalid user input
    const wrongInput = {
      email: 'keza@gmail.com',
      password: 'invalidPassword'
    };
    // send request to the server
    chai.request(app).post('/user/signin')
      .send(wrongInput)
      .then((res) => {
        expect(res).to.have.status(401);
        expect(res.body.success).to.be.equal(false);
        expect(res.body.message).to.be.equal('Authentication failed. Wrong password.');
        done();
      })
      .catch((err) => {
        throw (err.message);
      });
  });
  it('should return 200 and token for valid credentials', (done) => {
    // mock invalid user input
    const validInput = {
      email: 'keza@gmail.com',
      password: '1234567avb$#8'
    };
    // send request to the server
    chai.request(app).post('/user/signin')
      .send(validInput)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.token).to.exist;
        expect(res.body.success).to.be.equal(true);
        done();
      })
      .catch((err) => {
        throw (err);
      });
  });
  it('should return 400 when a bad a request is made', (done) => {
    const badRequest = {
    };
    chai.request(app).post('/user/signin')
      .send(badRequest)
      .then((res) => {
        expect(res).to.have.status(400);
        done();
      })
      .catch((err) => {
        throw (err);
      });
  });
});
let token = '';
/** Start of crud operations on user */
describe('USERS', () => {
  before(async () => {
    const user = {
      email: 'keza@gmail.com',
      password: 'Kabonoj@#'
    };
    token = await generateToken(user);
  });
  describe('/GET users', () => {
    it('should return all users', (done) => {
      chai.request(app).get('/user').set('Authorization', token)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
describe('/GET/:id users', () => {
  it('it should GET a user by the given id', (done) => {
    chai.request(app)
      .get(`/user/${userId}`)
      .set('Authorization', token)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        done();
      });
  });
  it('it should GET a user by the given id', (done) => {
    chai.request(app)
      .get(`/user/${userId}`)
      .set('Authorization', token)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        done();
      });
  });
});
describe('/PUT/:id users', () => {
  it('it should update a user by the given id', () => {
    chai.request(app)
      .put(`/user/${userId}`)
      .send({ firstname: 'Mussa', lastname: 'wilson', password: '12345678#$' })
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
  });
  it('it should not update the email', () => {
    chai.request(app)
      .put(`/user/${userId}`)
      .send({ email: 'user@gmail.com' })
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body.message).to.equal('You cannot change the email');
      });
  });
});

describe('/GET/:token Test user email verification', () => {
  let tokens = '';
  it('it should verify a user email and return 200.', () => {
    tokens = token.split(' ')[1];
    chai.request(app)
      .get(`/user/verification/${tokens}`)
      .end(async (err, res) => {
        expect(res).to.have.status(200);
      });
  });

  it('it should resend a verification email', () => {
    chai.request(app)
      .post(`/user/resendVerificationEmail`)
      .send({email: 'keza@gmail.com'})
      .end(async (err, res) => {
        expect(res).to.have.status(200);
      });
  });

  it('Resend verification should fail if the email is not registerede', () => {
    chai.request(app)
      .post(`/user/resendVerificationEmail`)
      .send({email: 'unregistered@gmail.com'})
      .end(async (err, res) => {
        expect(res).to.have.status(401);
      });
  });

  it('Resend verification should fail if non email data is given', () => {
    chai.request(app)
      .post(`/user/resendVerificationEmail`)
      .send({email: 1})
      .end(async (err, res) => {
        expect(res).to.have.status(401);
      });
  });

  it('it should fail to verify a user email and return 400.', () => {
    tokens = token.split(' ')[1];
    chai.request(app)
      .get(`/user/verification/${tokens}`)
      .end(async (err, res) => {
        expect(res).to.have.status(400);
      });
  });
});

describe('/DELETE/:id users', () => {
  it('it should delete a user by the given id.', () => {
    chai.request(app)
      .delete(`/user/${userId}`)
      .set('Authorization', token)
      .end(async (err, res) => {
        expect(res).to.have.status(200);
      });
  });
});

describe('Logout user', () => {
  it('it should logout the user', () => {
    chai.request(app)
      .post(`/user/logout`)
      .end(async (err, res) => {
        expect(res).to.have.status(200);
      });
  });
});
