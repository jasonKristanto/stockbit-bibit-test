const express = require('express');

const routes = express.Router();

const movieController = require('./controllers/movie-controller');
const { validateRequestParams } = require('./middlewares/validate-request-param');

routes.get('/movie/search', validateRequestParams, movieController.search);
routes.get('/movie/detail', movieController.detail);

routes.use('/', movieController.fallback);

module.exports = routes;
