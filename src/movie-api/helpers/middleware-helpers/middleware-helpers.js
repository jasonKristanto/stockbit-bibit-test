const { validateMovieTitleParams } = require('./validate-movie-title-helpers');
const { validateMovieTypeParams } = require('./validate-movie-type-helpers');
const { validateMovieYearParams } = require('./validate-movie-year-helpers');
const { validateMoviePageParams } = require('./validate-movie-page-helpers');
const { validateMoviePlotParams } = require('./validate-movie-plot-helpers');

module.exports = {
  validateMovieTitleParams,
  validateMovieTypeParams,
  validateMovieYearParams,
  validateMoviePageParams,
  validateMoviePlotParams,
};
