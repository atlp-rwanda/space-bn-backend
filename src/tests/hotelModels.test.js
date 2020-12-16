import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';
import hotels from '../routes/hotelRoute';

use(chaiHttp);
describe('Server!', () => {
  it('Displayes hotels and their details', (done) => {
    request(hotels)
      .get('/allhotels')
      .end((err, res) => {
        // eslint-disable-next-line no-undef
        expect(res).to.have.status(200);
        // eslint-disable-next-line no-undef
        expect(res.body.status).to.equals('success');
        // eslint-disable-next-line no-undef
        expect(res.body.message).to.equals('Succesfully got the hotels');
        done();
      });
  });
});
