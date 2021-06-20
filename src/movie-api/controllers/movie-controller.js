const { sendResponse } = require('../helpers/response-helpers');
const MovieServices = require('../services/movie-services');

exports.search = async (req, res) => {
  const myService = new MovieServices();
  const result = await myService.search(req);

  sendResponse(res, result);
};

exports.detail = async (req, res) => {
  const myService = new MovieServices();
  const result = await myService.detail(req);

  sendResponse(res, result);
};

exports.fallback = (req, res) => {
  sendResponse(res, {
    statusCode: 404,
    message: 'Page Not Found',
    data: [],
  });
};
