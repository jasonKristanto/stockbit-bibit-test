const { sendMiddlewareFailedResponse } = require('../helpers/response-helpers');

const {
  validateMovieTitleParams,
  validateMovieTypeParams,
  validateMovieYearParams,
  validateMoviePlotParams,
} = require('../helpers/middleware-helpers/middleware-helpers');

exports.validateRequestDetailParams = async (req, res, next) => {
  const {
    title, type, year, imdb, plot,
  } = req.query;

  const movieImdbValidationResult = validateMovieTitleParams(imdb);
  const movieTitleValidationResult = validateMovieTitleParams(title);

  if (movieImdbValidationResult.status === 'failed' && movieTitleValidationResult.status === 'failed') {
    sendMiddlewareFailedResponse(res, 400, movieImdbValidationResult.message);
    return;
  }

  const movieTypeValidationResult = validateMovieTypeParams(type);
  if (movieTypeValidationResult.status === 'failed') {
    sendMiddlewareFailedResponse(res, 400, movieTypeValidationResult.message);
    return;
  }

  const movieYearValidationResult = validateMovieYearParams(year);
  if (movieYearValidationResult.status === 'failed') {
    sendMiddlewareFailedResponse(res, 400, movieYearValidationResult.message);
    return;
  }

  const moviePlotValidationResult = validateMoviePlotParams(plot);
  if (moviePlotValidationResult.status === 'failed') {
    sendMiddlewareFailedResponse(res, 400, moviePlotValidationResult.message);
    return;
  }

  next();
};
