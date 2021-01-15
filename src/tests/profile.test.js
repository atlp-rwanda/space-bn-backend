// import { use, request, expect } from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../app';

// use(chaiHttp);

// let authToken = '';

// describe('Profile APIs', () => {
//   describe('Signup  a new User', () => {
//     before(async () => {
//       const res = await request(app)
//         .post('/user/signup')
//         .send({
//           firstname: 'Keny',
//           lastname: 'The ninja',
//           email: 'keny@live.com',
//           password: 'test@123',
//           gender: 'Male',
//           origin: 'Rwanda',
//           profession: 'Software Engineer',
//           age: 25,
//           identification_type: 'ID',
//           identification_number: '123344aabcef3e'
//         });
//         console.log("Here the response: "+res);

//       authToken = res.body.token;
//       expect(res.status).to.have(201);
//     });

//     describe('Signin User', () => {
//       before(async () => {
//         const res = await request(app)
//           .post('/user/signin')
//           .send({
//             email: 'keny@live.com',
//             password: 'test@123'
//           });

//         authToken = res.body.token;
//       });
// })

// })
// })
// console.log("Admin: "+authToken);



    //   .get('/')
    //   .end((err, res) => {
    //     // eslint-disable-next-line no-undef
    //     expect(res).to.have.status(200);
    //     // eslint-disable-next-line no-undef
    //     expect(res.body.status).to.equals('success');
    //     // eslint-disable-next-line no-undef
    //     expect(res.body.message).to.equals('Welcome to my server');
    //     done();
    //   });
  

import chai from 'chai';
import http from 'chai-http';
import app from '../app';


chai.use(http);
const { expect } = chai;

let token = '';
let userId = '';
let updateProfileRes;
describe('Profile APIs', () => {
  before((done) => {
    const user = {
        firstname: 'Keny',
        lastname: 'The ninja',
        email: 'keny@live.com',
        password: 'test@123',
        gender: 'Male',
        origin: 'Rwanda',
        profession: 'Software Engineer',
        age: 25,
        identification_type: 'ID',
        identification_number: '123344aabcef3e'
    };
    chai
      .request(app)
      .post('/user/signup')
      .send(user)
      .then((res) => {
        token = res.body.token;
        userId = res.body.user_details.id;
        console.log("********************"+userId);
        done();
      })
      .catch((err) => {
        done(err);
      });
  })

  it('Should contain a valid token', ()=> {
      expect(token).to.not.be.null;
  })

 
})

describe('Updating the user profile', ()=> {
    
    // before(async(done) => {
        const updatedProfile = {
            "firstname": {
              "value": "Keny upated",
              "save": true
            },
            "lastname": {
              "value": "The ninja updated",
              "save": true
            },
            "gender": {
              "value": "Male",
              "save": true
            },
            "origin": {
              "value": "Rwanda",
              "save": false
            },
            "profession": {
              "value": "Software designer",
              "save": false
            },
            "age": {
              "value": 20,
              "save": false
            },
            "identification_type": {
              "value": "ID",
              "save": false
            },
            "identification_number": {
              "value": "126edgdgfdj",
              "save": false
            }
    
          }

          
          it('should update the user profile ', (done) => {
            chai
            .request(app)
            .put(`/user/profile/${userId}`)
            .send(updatedProfile)
            .set('authorization', token)
            .then((res) => {
              console.log("OUr response: ....."+JSON.stringify(res));
                expect(res.body.profile).to.not.be.null;
                expect(res.body.profile).to.haveOwnProperty('firstname');
                expect(res.body.profile).to.haveOwnProperty('lastname');
                expect(res.body.profile).to.haveOwnProperty('gender');
                expect(res.body.profile).to.haveOwnProperty('gender');
                expect(res.body.profile).to.haveOwnProperty('profession');
                expect(res.body.profile).to.haveOwnProperty('identification_type');
                expect(res.body.profile).to.haveOwnProperty('identification_number');
                
               done();
            }).
            catch(err => {
              console.log(err);
              done();
            })
          });

          
})

describe('/GET profile', () => {
  it('Should save checked profile details', (done) => {
    chai.request(app)
    .get(`/user/profile/${userId}`)
    .set('authorization', token)
        .end((err, res) => {
              if(err){
               done(err);
              }
              expect(res).to.not.be.null;
              expect(res.body.lastname).to.haveOwnProperty('value');
              expect(res.body.gender).to.haveOwnProperty('value');
              expect(res.body.origin).to.haveOwnProperty('value');
              expect(res.body.profession).to.haveOwnProperty('value');
              // expect(res.body.age).to.haveOwnProperty('value');
              expect(res.body.identification_type).to.haveOwnProperty('value');
              expect(res.body.identification_number).to.haveOwnProperty('value');
              expect(res.body.firstname.save).to.be.true;
              expect(res.body.lastname.save).to.be.true;
          done();
        });
  });
});
