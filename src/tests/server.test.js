import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';
import hotels from '../routes/hotelRoute';

use(chaiHttp);
describe('Server!', () => {
  it('welcomes user to the api', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        if (err) done(err);
        // eslint-disable-next-line no-undef
        expect(res).to.have.status(200);
        // eslint-disable-next-line no-undef
        expect(res.body.status).to.equals('success');
        // eslint-disable-next-line no-undef
        expect(res.body.message).to.equals('Welcome to my server');
        done();
      });
});
  it('should list a SINGLE hotel on /api/v1/hotels/hotel/<id> GET');
  it('should add a SINGLE hotel on /api/v1/hotels/createHotel POST');
  it('should update a SINGLE hotel on /api/v1/hotels/updateHotel/<id> PATCH');
  it('should delete a SINGLE hotel on /api/v1/hotels/deleteHotel/<id> DELETE');
});
