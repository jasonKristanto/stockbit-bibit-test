const { sendMiddlewareFailedResponse } = require('../helpers/response-helpers');

const {
  validateMovieTitleParams,
  validateMovieTypeParams,
  validateMovieYearParams,
  validateMoviePageParams,
} = require('../helpers/middleware-helpers/middleware-helpers');

exports.validateRequestParams = async (req, res, next) => {
  const {
    title, type, year, page,
  } = req.query;

  const movieTitleValidationResult = validateMovieTitleParams(title);
  if (movieTitleValidationResult.status === 'failed') {
    sendMiddlewareFailedResponse(res, 400, movieTitleValidationResult.message);
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

  const moviePageValidationResult = validateMoviePageParams(page);
  if (moviePageValidationResult.status === 'failed') {
    sendMiddlewareFailedResponse(res, 400, moviePageValidationResult.message);
    return;
  }

  next();
};
