const { sendResponse } = require('../helpers/response-helpers');
const movie = require('../services/movie/movie-services');

exports.search = async (req, res) => {
  const result = await movie.searchService(req);

  sendResponse(res, result);
};

exports.detail = async (req, res) => {
  const result = await movie.detailService(req);

  sendResponse(res, result);
};

exports.fallback = (req, res) => {
  sendResponse(res, {
    statusCode: 404,
    message: 'Page Not Found',
    data: [],
  });
};
