const { sendMiddlewareFailedResponse } = require('../helpers/response-helpers');
const { insertApiLogData } = require('../helpers/model-helpers/api-log/insert-data-helper');

const {
  validateMovieTitleImdbParams,
  validateMovieYearParams,
  validateMoviePageParams,
  validateOptions,
} = require('../helpers/validation-helpers/validation-helpers');

exports.validateRequestSearchParams = async (req, res, next) => {
  const {
    title, type, year, page,
  } = req.query;

  await insertApiLogData(req);

  const movieTitleValidationResult = validateMovieTitleImdbParams(title);
  if (movieTitleValidationResult.status === 'failed') {
    sendMiddlewareFailedResponse(res, 400, movieTitleValidationResult.message);
    return;
  }

  const movieTypeValidationResult = validateOptions(type, 'type');
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
