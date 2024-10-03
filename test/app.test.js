const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /api/', () => {
  it('should return API is running', (done) => {
    chai.request(app)
      .get('/api/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('API is running');
        done();
      });
  });
});