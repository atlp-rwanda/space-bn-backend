import chai from 'chai'
import http from 'chai-http';
import app from '../app';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { request as Request, User, Comment } from '../database/models';
chai.use(http);
const expect =chai.expect;

describe("Comments", () => {

const token = jwt.sign({ id: 1}, process.env.JWT_KEY, { expiresIn: '1h' });
  beforeEach(async () => {
    await Request.destroy({ where: { idUser: 1} });
  });
  afterEach(async () => {
    await Request.destroy({ where: { idUser: 1} });
    
  });
  after(async () => {
    
    await Comment.destroy({ where: { comment: "yes yes" } });
  });
  it("should get all comments", async() => {
    const user = await User.create({
      firstname: 'Maliza',
      lastname: 'Constantine',
      telephone: '',
      email: 'malizacoco4@gmail.com',
      password: '1234567$#8',
      gender: 'Female',
      origin: '',
      profession: '',
      age: 23,
      identification_type: '',
      identification_number: '',
      user_image: '',
      createdAt: new Date(),
      updatedAt: new Date()
});
   const request = await Request.create({ 
     idUser: user.id, 
     idRoom: 1, 
     dateStart: new Date(), 
     dateEnd: new Date(), 
     requestStatus: 'Pending', 
     createdAt: new Date(), 
     updatedAt: new Date() 
   });
    const res = await chai
      .request(app)
      .get(`/request/${request.id}/comments`)
      .set('authorization',`Bearer ${token}`)

    expect(res).to.have.status(200);    
    
   });

   it("should post comment", async() =>{
   const request = await Request.create({ 
     idUser: 1, 
     idRoom: 1, 
     dateStart: new Date(), 
     dateEnd: new Date(), 
     requestStatus: 'Pending', 
     createdAt: new Date(), 
     updatedAt: new Date() 
   });
     const res = await chai
        .request(app)
        .post(`/request/${request.id}/comment`)
        .set('authorization',`Bearer ${token}`)
        .send({ comment: "yes yes" })
     expect(res.status).to.equal(201);
   })
   it("should not  post comment on not found request", async () =>{
    const res = await chai
     .request(app)
     .post(`/request/100000/comment`)
     .set('authorization',`Bearer ${token}`)
    expect(res.status).to.equal(404);
   });


   it("should post comment", async() =>{
    const request = await Request.create({ 
      idUser: 1, 
      idRoom: 1, 
      dateStart: new Date(), 
      dateEnd: new Date(), 
      requestStatus: 'Pending', 
      createdAt: new Date(), 
      updatedAt: new Date() 
    });
      const res = await chai
         .request(app)
         .post(`/request/${request.id}/comment`)
         .set('authorization',`Bearer ${token}`)
        
      expect(res.status).to.equal(500);
    })
 });