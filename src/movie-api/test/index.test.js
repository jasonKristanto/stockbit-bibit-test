const { describe } = require('mocha');

const { movieServerTest } = require('./server.test');
const { movieServiceTest } = require('./services.test');

describe('Movie API Test', () => {
  describe('Movie Service Test', movieServiceTest.bind(this));
  describe('Movie Server API Test', movieServerTest.bind(this));
});
