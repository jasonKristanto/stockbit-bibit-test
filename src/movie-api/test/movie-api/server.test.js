const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  beforeEach, afterEach, describe, it,
} = require('mocha');

const server = require('../../server');

const { expect } = chai;
chai.use(chaiHttp);

describe('Movie Server API', () => {
  let stubs;
  let testEndpoint;
  let endpoint;

  afterEach(() => {
    stubs.restore();
  });

  describe('/GET search', () => {
    beforeEach(() => {
      endpoint += '/search';
    });

    it('it should GET all the books', (done) => {
      testEndpoint = `${endpoint}?title=batman`;

      chai.request(server)
        .get(testEndpoint)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equals(200);
          expect(res.body).to.have.property('message').and.equals('Movies found');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('Response').and.equals('True');
          expect(res.body.data).to.have.property('Search');

          done();
        });
    });

    it('it should FAILED without any parameter', (done) => {
      testEndpoint = endpoint;

      chai.request(server)
        .get(testEndpoint)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equals(400);
          expect(res.body).to.have.property('message').and.equals('Title parameter is required');

          done();
        });
    });

    it('it should FAILED with Batman123 as title', (done) => {
      testEndpoint = `${endpoint}?title=batman123`;

      chai.request(server)
        .get(testEndpoint)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equals(404);
          expect(res.body).to.have.property('message').and.equals('Failed to get movie');
          expect(res.body).to.have.property('details').and.equals('Movie not found');

          done();
        });
    });
  });
});
