import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

use(chaiHttp);

const { ADMIN_PASSWORD } = process.env;

let tokenAdmin = '',
  tokenManager = '',
  tokenUser = '',
  userId = '';

describe('MANAGER ENDPOINTS', () => {
  describe('Signup a User', () => {
    before(async () => {
      const res = await request(app)
        .post('/user/signup')
        .send({
          firstname: 'Space',
          lastname: 'Manager',
          email: 'spacemanager@bn.com',
          password: 'Test123.',
          gender: 'Male',
          roleId: '2',
          origin: 'Rwanda',
          profession: 'Software Engineer',
          age: 2021,
          identification_type: 'Passport',
          identification_number: 'PC 321211'
        });

      tokenUser = res.body.token;
      userId = res.body.user_details;
    });

    describe('Signin Admin', () => {
      before(async () => {
        const res = await request(app)
          .post('/user/signin')
          .send({
            email: 'spacenomad@gmail.com',
            password: ADMIN_PASSWORD
          });

        tokenAdmin = res.body.token;
      });

      describe('Create a Manager Role', () => {
        before(async () => {
          const res = await request(app)
            .post('/roles/create')
            .set('authorization', tokenAdmin)
            .send({
              name: 'MANAGER',
              description: 'This is manager role.'
            });

          expect(res).has.status(201);
        });

        describe('Get Roles', () => {
          before(async () => {
            const res = await request(app)
              .get('/roles')
              .set('authorization', tokenAdmin);

            userId = res.body.roles[1].id;
            expect(res).has.status(200);
          });

          describe('Assign Manager Role', () => {
            before(async () => {
              const res = await request(app)
                .post('/roles/assign')
                .set('authorization', tokenAdmin)
                .send({
                  _userId: `${userId}`,
                  _roleId: `${userId}`
                });

              console.log(res.body);
              expect(res).has.status(200);
            });

            describe('Signin Manager', () => {
              before(async () => {
                const res = await request(app)
                  .post('/user/signin')
                  .send({
                    email: 'spacemanager@bn.com',
                    password: 'Test123.'
                  });

                tokenManager = res.body.token;
              });

              describe('GET /manager/requests', () => {
                it('Manager should get all requests', async () => {
                  const res = await request(app)
                    .get('/manager/requests')
                    .set('authorization', tokenManager);

                  expect(res).to.have.status(200);
                });

                it('Manager should get "Access denied!" message', async () => {
                  const res = await request(app)
                    .get('/manager/requests')
                    .set('authorization', tokenAdmin);

                  expect(res).to.have.status(403);
                  expect(res.body.message).to.match(/Access denied!/i);
                });

                it('Manager should get "No role assigned!" message', async () => {
                  const res = await request(app)
                    .get('/manager/requests')
                    .set('authorization', tokenUser);

                  expect(res).to.have.status(403);
                  expect(res.body.message).to.match(/No role assigned!/i);
                });

                it('Manager should get "Please login!" message', async () => {
                  const res = await request(app)
                    .get('/manager/requests');

                  expect(res).to.have.status(403);
                  expect(res.body).to.have.property('message');
                  expect(res.body.message).to.match(/Please login!/i);
                });

                it('Manager should get "undefined token" message', async () => {
                  const res = await request(app)
                    .get('/manager/requests')
                    .set('authorization', `auth-token ${tokenUser}bad`);

                  expect(res).to.have.status(400);
                  expect(res.body.message).to.match(/undefined/i);
                });
              });

              describe('POST /manager/requests', () => {
                it('Manager should add a request', async () => {
                  const res = await request(app)
                    .post('/manager/requests')
                    .set('authorization', tokenManager)
                    .send({
                      idRoom: 500,
                      dateStart: '2021-01-25',
                      dateEnd: '2021-01-30'
                    });

                  expect(res).to.have.status(201);
                  expect(res.body).to.have.property('message');
                  expect(res.body.message).to.match(/Request added successfully!/i);
                });

                it('Manager should get "Access denied!" message', async () => {
                  const res = await request(app)
                    .post('/manager/requests')
                    .set('authorization', tokenAdmin)
                    .send({
                      idRoom: 500,
                      dateStart: '2021-01-25',
                      dateEnd: '2021-01-30'
                    });

                  expect(res).to.have.status(403);
                  expect(res.body).to.have.property('message');
                  expect(res.body.message).to.match(/Access denied!/i);
                });
              });

              describe('GET/:id /manager/requests/:id', () => {
                it('Manager should get one request', async () => {
                  const res = await request(app)
                    .get('/manager/requests/1')
                    .set('authorization', tokenManager);

                  expect(res).to.have.status(200);
                  expect(res.body).to.have.property('message');
                  expect(res.body.message).to.match(/Request found successfully!/i);
                });

                it('Manager should get "Request does not exist" message', async () => {
                  const res = await request(app)
                    .get('/manager/requests/2')
                    .set('authorization', tokenManager);

                  expect(res).to.have.status(400);
                  expect(res.body).to.have.property('message');
                  expect(res.body.message).to.match(/Request does not exist./i);
                });

                it('Manager should get "Error" message', async () => {
                  const res = await request(app)
                    .get('/manager/requests/:id')
                    .set('authorization', tokenManager);

                  expect(res).to.have.status(500);
                  expect(res.body).to.have.property('error');
                  expect(res.body.message).to.match(/undefined/i);
                });
              });

              describe('PUT/:id /manager/requests/:id', () => {
                it('Manager should update a request', async () => {
                  const res = await request(app)
                    .put('/manager/requests/1')
                    .set('authorization', tokenManager)
                    .send({
                      requestStatus: 'REJECTED',
                      idRoom: 500,
                      dateStart: '2021-01-25',
                      dateEnd: '2021-01-30'
                    });

                  expect(res).to.have.status(200);
                  expect(res.body).to.have.property('message');
                  expect(res.body.message).to.match(/Request updated successfully!/i);
                });
              });
            });
          });
        });
      });
    });
  });
});
