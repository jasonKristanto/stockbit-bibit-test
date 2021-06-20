const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');

const { testServerHelpers } = require('./helpers/server.test');

chai.use(chaiHttp);

describe('Movie Server API', () => {
  describe('/GET search', () => {
    testServerHelpers('/search');
  });

  describe('/GET detail', () => {
    testServerHelpers('/detail');
  });
});
