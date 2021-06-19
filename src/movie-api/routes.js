const express = require('express');

const routes = express.Router();

const movieController = require('./controllers/movie-controller');
const { validateRequestSearchParams } = require('./middlewares/validate-request-search-param');
const { validateRequestDetailParams } = require('./middlewares/validate-request-detail-param');

routes.get('/movie/search', validateRequestSearchParams, movieController.search);
routes.get('/movie/detail', validateRequestDetailParams, movieController.detail);

routes.use('/', movieController.fallback);

module.exports = routes;
