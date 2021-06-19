const { sendMiddlewareFailedResponse } = require('../helpers/response-helpers');
const { insertApiLogData } = require('../helpers/model-helpers/api-log/insert-api-log-helper');

const {
  validateMovieTitleParams,
  validateMovieTypeParams,
  validateMovieYearParams,
  validateMoviePageParams,
} = require('../helpers/middleware-helpers/middleware-helpers');

exports.validateRequestSearchParams = async (req, res, next) => {
  const {
    title, type, year, page,
  } = req.query;

  await insertApiLogData(req);

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
