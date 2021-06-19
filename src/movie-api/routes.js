const express = require('express');

const routes = express.Router();

const movieController = require('./controllers/movie-controller');

routes.get('/movie/search', movieController.search);
routes.get('/movie/detail', movieController.detail);

routes.use('/', movieController.fallback);

module.exports = routes;
