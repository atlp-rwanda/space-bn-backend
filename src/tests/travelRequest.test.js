import chai from 'chai';
import http from 'chai-http';
import jwt from 'jsonwebtoken';
// eslint-disable-next-line import/no-named-as-default
import app from '../app';
import 'dotenv/config';
import model from '../database/models';

chai.use(http);
const { expect } = chai;

describe('Get all Travel Request', () => {
  const token = jwt.sign({ id: 1 }, process.env.JWT_KEY, { expiresIn: '1h' });
  it('should get all travelRequest', async () => {
    const user = await model.User.create({
      firstname: 'Maliza',
      lastname: 'Constantine',
      telephone: '',
      email: 'malizacoco4@gmail.com',
      password: '1234567$#8',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const res = await chai
      .request(app)
      .get('/travelRequests')
      .set('authorization', `Bearer ${token}`);
    expect(res).to.have.status(200);
    after(async () => {
      await model.User.destroy({ where: { id: user.id } });
    });
  });
  it('Create get all travelRequest', async () => {
    const user = await model.User.create({
      firstname: 'Maliza',
      lastname: 'Constantine',
      telephone: '',
      email: 'malizacoco4@gmail.com',
      password: '1234567$#8',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await model.TravelRequest.create({
      requesterId: user.id
    });

    const res = await chai
      .request(app)
      .post('/travelRequest')
      .set('authorization', `Bearer ${token}`)
      .send(
        {
          destinations: [{name: "Gicumbi", arrivalTime: "2021-02-18", departureTime: "2021-02-20", 
                          accomodation:{hotelId: 1, roomId: 1 }},
                          {name: "Nyamata", arrivalTime: "2021-02-22", departureTime: "2021-02-25"}
                          ]
      }
      );
    expect(res).to.have.status(201);
    after(async () => {
      await model.User.destroy({ where: { id: user.id } });
    });
  });
});
