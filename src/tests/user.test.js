import chai from 'chai';

import http from 'chai-http';

import app from '../app';

chai.use(http);

const expect = chai.expect;


describe('User registration', () => {
  it('should return 201 and confirmation for valid input', (done) => {
    let user_input = {
      "firstname": "keza",
      "lastname": "janet",
      "telephone": "0783977618",
      "email": "keza@gmail.com",
      "password": "1234567avb$#8",
      "role": "Hotel Manager",
      "gender": "Male",
      "origin": "rwandan",
      "profession": "banking",
      "age": "27",
      "identification_type": "ID",
      "identification_number": "1122020333"
    };

        chai.request(app).post('/user/signup').send(user_input).then(res => {
    
            expect(res).to.have.status(201);
            expect(res.body.message).to.be.equal('User registered');
            expect(res.body.user_details.id).to.exist;
            expect(res.body.user_details.firstname).to.exist;
            expect(res.body.user_details.lastname).to.exist;
            expect(res.body.user_details.email).to.exist;
            expect(res.body.user_details.password).to.exist;
            expect(res.body.user_details.role).to.exist;
            expect(res.body.user_details.gender).to.exist;
            expect(res.body.user_details.origin).to.exist;
            expect(res.body.user_details.profession).to.exist;
            expect(res.body.user_details.age).to.exist;
            expect(res.body.user_details.identification_type).to.exist;
            expect(res.body.user_details.identification_number).to.exist;
            done();
          }).catch(err => {
            console.log(err);
          });
    })

    //test for invalid input
    it('should return 422 for invalid email input', (done) => {
        let user_invalid_input = {
                "firstname": "keza",
                "lastname": "janet",
                "telephone": "0783977618",
                "email": "",
                "password": "1234567avb$#8",
                "role": "Hotel Manager",
                "gender": "Male",
                "origin": "rwandan",
                "profession": "banking",
                "age": "27",
                "identification_type": "ID",
                "identification_number": "1122020333"
        }
        chai.request(app).post('/user/signup').send(user_invalid_input).then(res => {
            expect(res).to.have.status(422);
            done();
        }).catch(err => {
            console.log(err);
        });
    });

    //test an existing e-mail
    it('Should return error 409 when email already registered', (done) => {
         let new_user = {
                "firstname": "keza",
                "lastname": "janet",
                "telephone": "0783977618",
                "email": "keza@gmail.com",
                "password": "1234567avb$#8",
                "role": "Hotel Manager",
                "gender": "Male",
                "origin": "rwandan",
                "profession": "banking",
                "age": "27",
                "identification_type": "ID",
                "identification_number": "1122020333"
        }
        chai.request(app).post('/user/signup').send(new_user).then((res) => {
            expect(res).to.have.status(409);
            expect(res.body.message).to.be.equal('Email already registered');
            done();
        }).catch(err => {
            console.log(err.message);
        });
    });    

});

describe('User Signin', () => {

  it('should return error 401 for invalid email', (done) => {
    //mock invalid user input
    const wrong_input = {
      "email": "kez@gmail.com",
      "password": "1234567avb$#8"
    }
    //send request to the server
    chai.request(app).post('/user/signin')
      .send(wrong_input)
        .then((res) => {
          expect(res).to.have.status(401);
          expect(res.body.message).to.be.equal("Authentication failed. User not found.");
          done();
        }).catch(err => {
          console.log(err.message);
        })
  });


  it('should return error 401 for invalid credentials', (done) => {
    //mock invalid user input
    const wrong_input = {
      "email": "keza@gmail.com",
      "password": "invalidPassword"
    }
    //send request to the server
    chai.request(app).post('/user/signin')
      .send(wrong_input)
        .then((res) => {
          //console.log(res.body);
          //assertions
          expect(res).to.have.status(401);
          
          expect(res.body.success).to.be.equal(false);
          expect(res.body.message).to.be.equal('Authentication failed. Wrong password.');
          done();
        }).catch(err => {
          console.log(err.message);
        })
  }); 

  it('should return 200 and token for valid credentials', (done) => {
    //mock invalid user input
    const valid_input = {
      "email": "keza@gmail.com",
      "password": "1234567avb$#8"
    }
    //send request to the server
    chai.request(app).post('/user/signin')
      .send(valid_input)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res.body.token).to.exist;
          expect(res.body.success).to.be.equal(true);
          done();
        }).catch(err => {
          console.log(err);
        })
  });

  it('should return 400 when a bad a request is made', (done) => {
      const bad_request = {
       
      }
      chai.request(app).post('/user/signin')
        .send(bad_request)
          .then((res) => {
            expect(res).to.have.status(400);
            done();
          }).catch(err => {
            console.log(err);
          })
    });
})