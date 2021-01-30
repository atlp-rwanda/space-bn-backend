process.env.NODE_ENV = 'test';
import app from "../app";
import chai from "chai";

const { expect } = chai;


const _travelAdminPwd = process.env.ADMIN_PASSWORD;
let token='';
let id=1;
let user="";
let travelAdminToken=""
describe("facility endpoint", () => {

  before((done) => {
      const users={
        firstname:"admin",
        lastname:"travel",
        email:"josh@gmail.com",
        password:"@Okayfine123",
        roleId:2
      }
      chai
      .request(app)
      .post('/user/signup')
      .send(users)
      .then((res) => {
        user = res.body.user_details.id;
        done();
      })
      .catch((err) => {
        done(err);
      });

  });

  describe("signin super admin ", () => {

    before((done)=>{
      const admin = {
        email: 'spacenomad@gmail.com',
        password: _travelAdminPwd
      };
      chai
        .request(app)
        .post('/user/signin')
        .send(admin)
        .then((res) => {
          token = res.body.token;
          done();
        })
        .catch((err) => {
          done(err);
        });
    })
    describe("assign role to user",()=>{
      before((done)=>{
        const role = {
          name: 'TRAVEL_ADMIN',
          description: 'travel admin'
        };
        chai
          .request(app)
          .post('/roles/create')
          .set('authorization',token)
          .send(role)
          .end((err, res) => {
            if (err) done(err);
            done();
          });
      });

    describe("create role",()=>{

      before((done)=>{
        
        chai
          .request(app)
          .post('/roles/assign')
          .set('authorization',token)
          .send({
            _userId: `${user}`,
            _roleId: '3'
          })
          .end((err, res) => {
            if (err) done(err);
            done();
          });
      });

      describe("sign in travel admin",()=>{

        before((done)=>{
          const travelAdminLogin = {
            email: 'josh@gmail.com',
            password: '@Okayfine123'
          };
          chai
            .request(app)
            .post('/user/signin')
            .send(travelAdminLogin)
            .then((res) => {
              travelAdminToken=res.body.token;
              console.log(travelAdminToken);
              done();
            })
            .catch((err) => {
              done(err);
            })
        });
        describe("add new facility",async()=>{
          
            it("should add new facilities", (done) => {
              const data={
                location:"test name ",
                address:"test address ev 32'st",
                images:"testImg.jpg",
                roomNumber:"43",
                roomDetails:"{sdlksldks:sdsds,sdsdsds:sdksjdskdj}"
              }
              chai
                .request(app)
                .post("/facilities")
                .set('authorization', travelAdminToken)
                .send(data)
                .end((err, response) => {
                  expect(response).to.have.status(201);
                  expect(response.body).to.be.an("object");
                  done()
                
                });
           
          })

          it("should not add a facility", (done) => {
            const data={
              location:"test  name ",
              address:"test address  ev 32'st",
              images:"testImg.jpg",
              roomNumber:"43",
              roomDetails:"{sdlksldks:sdsds,sdsdsds:sdksjdskdj}"
            }
            chai
              .request(app)
              .post(`/facilities`)
              .send(data)
              .end((err, response) => {
                expect(response).to.have.status(403);
                done();
              
              });
          });
          

            it("should update facility", (done) => {
              const data={
                location:"test updated name ",
                address:"test address ev updated 32'st",
                images:"testImg.jpg",
                roomNumber:"43",
                roomDetails:"{sdlksldks:sdsds,sdsdsds:sdksjdskdj}"
              }
              chai
                .request(app)
                .put(`/facilities/${id}`)
                .set('authorization', travelAdminToken)
                .send(data)
                .end((err, response) => {
                  expect(response).to.have.status(200);
                  expect(response.body).to.be.an("object");
                  done();
                
                });
            
           
          })

          it("should not update facility", (done) => {
            const data={
              location:"test updated name ",
              address:"test address ev updated 32'st",
              images:"testImg.jpg",
              roomNumber:"43",
              roomDetails:"{sdlksldks:sdsds,sdsdsds:sdksjdskdj}"
            }
            chai
              .request(app)
              .put(`/facilities/120`)
              .set('authorization', travelAdminToken)
              .send(data)
              .end((err, response) => {
                expect(response).to.have.status(404);
                done();
              
              });
          
         
        })
          

            it("should delete facility", (done) => {
              const data={
                location:"test updated name ",
                address:"test address ev updated 32'st",
                images:"testImg.jpg",
                roomNumber:"43",
                roomDetails:"{sdlksldks:sdsds,sdsdsds:sdksjdskdj}"
              }
              chai
                .request(app)
                .delete(`/facilities/${id}`)
                .set('authorization', travelAdminToken)
                .end((err, response) => {
                  expect(response).to.have.status(204);
                  done();
                });
          })

          it("should not delete facility", (done) => {
            const data={
              location:"test updated name ",
              address:"test address ev updated 32'st",
              images:"testImg.jpg",
              roomNumber:"43",
              roomDetails:"{sdlksldks:sdsds,sdsdsds:sdksjdskdj}"
            }
            chai
              .request(app)
              .delete(`/facilities/100`)
              .set('authorization', travelAdminToken)
              .end((err, response) => {
                expect(response).to.have.status(404);
                done();
              });
        })

        it("should not delete facility", (done) => {
          const data={
            location:"test updated name ",
            address:"test address ev updated 32'st",
            images:"testImg.jpg",
            roomNumber:"43",
            roomDetails:"{sdlksldks:sdsds,sdsdsds:sdksjdskdj}"
          }
          chai
            .request(app)
            .delete(`/facilities/10-2`)
            .set('authorization', travelAdminToken)
            .end((err, response) => {
              expect(response).to.have.status(404);
              done();
            });
      })

          it("should get all the facilities", (done) => {
            chai
              .request(app)
              .get("/facilities")
              .end((err, response) => {
                expect(response).to.have.status(200);
                expect(response.body).to.be.an("object");
                done()
                
              });
          });

        })         
    
      });
    })
  })
     
  
        
    
         
   
       
      
    
        
    

  });

  // /*
  //  * GET one post using its (ID)
  //  */
  // describe("post facility", () => {
    
  //   it("should post facility by id", () => {
  //     const _travelAdmin={
  //       "email": "spacenomad@gmail.com",
  //         "password": _travelAdminPwd
  //     }
     
  //     chai
  //       .request(app)
  //       .get("/facility/" + id)
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //         response.body.expect.be.a("object");
  //         response.body.expect.have.property("content");
  //         response.body.should.have.property("id").eq(id);
          
  //       });
  //   });

  //   /*
  //    * providing wrong id
  //    */
  //   // it("shouldn't get any post", () => {
  //   //   const id2 = "5f4663e66450ec01f0adeed";
  //   //   chai
  //   //     .request(app)
  //   //     .get("/facility/" + id2)
  //   //     .end((err, response) => {
  //   //       response.expect.have.status(404);
  //   //       response.body.expect.be.a("object");
  //   //       response.body.expect.have.property("error").eq("Post doesn't exist!");
          
  //   //     });
  //   // });
  // });  
});