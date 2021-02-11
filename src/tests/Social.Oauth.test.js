import chai from 'chai';
import http from 'chai-http';
import app from '../app';
import { mock } from "sinon";
import 'dotenv/config';
import model from "../database/models"
import fakeUsers from "./mock.data";

chai.use(http);
const { expect } = chai;

let Fake_User = {
    id: 1,
    firstname: "hkl;",
    lastname: "hjkli",
    roleId:5
  };

describe("LOGIN WITH FACEBOOK",() =>{
    it('should create and login new user with facebook account', async() =>{
        process.env.FAKE_USER= JSON.stringify(fakeUsers.facebookUsers[0]);
        const mockProvider = 'facebook';
        const res = await chai.request(app).get(`/auth/${mockProvider}`);
         expect(res.status).to.equal(201); 
         expect (res.body.user).to.have.property('firstname', 'maliza');
         
    });
    it('should login user with facebook account', async() =>{
        process.env.FAKE_USER= JSON.stringify(fakeUsers.facebookUsers[0]);
        const mockProvider = 'facebook';
        const res = await chai.request(app).get(`/auth/${mockProvider}`);
         expect(res.status).to.equal(200); 
         expect (res.body.user).to.have.property('firstname', 'maliza');
         
    });
     
    
})