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
