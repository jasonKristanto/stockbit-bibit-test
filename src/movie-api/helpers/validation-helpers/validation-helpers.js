const { validateMovieTitleImdbParams } = require('./validate-movie-title-imdb-helper');
const { validateMovieYearParams } = require('./validate-movie-year-helper');
const { validateMoviePageParams } = require('./validate-movie-page-helper');
const { validateOptions } = require('./validate-options-helper');

module.exports = {
  validateMovieTitleImdbParams,
  validateMovieYearParams,
  validateMoviePageParams,
  validateOptions,
};
