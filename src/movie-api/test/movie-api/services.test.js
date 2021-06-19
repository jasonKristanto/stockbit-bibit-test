const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {
  beforeEach, afterEach, describe, it,
} = require('mocha');

const MovieServices = require('../../services/movie-services');

const { expect } = chai;
chai.use(chaiAsPromised);

const mockSearchData = require('./mock/search-data');
const mockDetailData = require('./mock/detail-data');

describe('Movie Services', () => {
  let stubs;
  const myServices = new MovieServices();

  beforeEach(() => {
    stubs = sinon.stub(myServices, 'sendRequest');
  });

  afterEach(() => {
    stubs.restore();
  });

  describe('Search', () => {
    it('it should GET all the Batman Movies', () => {
      const req = {
        query: {
          title: 'batman',
        },
      };
      stubs.returns(Promise.resolve(mockSearchData));

      const testSearchService = myServices.search(req);

      return expect(testSearchService).to.eventually.be.fulfilled
        .and.to.eventually.equals(mockSearchData);
    });
  });

  describe('Detail', () => {
    it('it should GET Batman movie detail', () => {
      const req = {
        query: {
          title: 'batman',
        },
      };
      stubs.returns(Promise.resolve(mockDetailData));

      const testSearchService = myServices.search(req);

      return expect(testSearchService).to.eventually.be.fulfilled
        .and.to.eventually.equals(mockDetailData);
    });
  });
});
