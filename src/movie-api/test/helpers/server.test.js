const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it, beforeEach } = require('mocha');

const server = require('../../server');

const { expect } = chai;
chai.use(chaiHttp);

const testServerHelpers = (endpoint) => {
  describe('Start testing API', () => {
    let testEndpoint;
    let baseEndpoint;

    beforeEach(() => {
      baseEndpoint = `/movie${endpoint}`;
    });

    it('it should GET data successfully', (done) => {
      testEndpoint = `${baseEndpoint}?title=batman&page=1&year=2016&type=movie`;
      console.log(testEndpoint);

      chai.request(server)
        .get(testEndpoint)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equals(200);
          expect(res.body).to.have.property('message').and.equals('Movies found');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('Response').and.equals('True');

          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });

    it('it should FAILED without any parameter', (done) => {
      testEndpoint = baseEndpoint;

      chai.request(server)
        .get(testEndpoint)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equals(400);

          if (endpoint === '/detail') {
            expect(res.body).to.have.property('message').and.equals('Imdb parameter is required');
          } else {
            expect(res.body).to.have.property('message').and.equals('Title parameter is required');
          }

          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });

    it('it should FAILED with Batman123 as title', (done) => {
      testEndpoint = `${baseEndpoint}?title=batman123`;

      chai.request(server)
        .get(testEndpoint)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equals(404);
          expect(res.body).to.have.property('message').and.equals('Failed to get movie');
          expect(res.body).to.have.property('details').and.equals('Movie not found');

          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });

    it('it should FAILED with invalid type options', (done) => {
      testEndpoint = `${baseEndpoint}?title=batman&type=testing`;

      chai.request(server)
        .get(testEndpoint)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equals(400);
          expect(res.body).to.have.property('message').and.equals('Type parameter only accept value as movie, series, episode');

          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });

    it('it should FAILED with string type year', (done) => {
      testEndpoint = `${baseEndpoint}?title=batman&year=testing`;

      chai.request(server)
        .get(testEndpoint)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equals(400);
          expect(res.body).to.have.property('message').and.equals('Year parameter must be a number');

          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });
  });
};

module.exports = { testServerHelpers };
