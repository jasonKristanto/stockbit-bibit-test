const { sendMiddlewareFailedResponse } = require('../helpers/response-helpers');
const { insertApiLogData } = require('../helpers/model-helpers/api-log/insert-data-helper');

const {
  validateMovieTitleImdbParams,
  validateMovieYearParams,
  validateOptions,
} = require('../helpers/validation-helpers/validation-helpers');

exports.validateRequestDetailParams = async (req, res, next) => {
  const {
    title, type, year, imdb, plot,
  } = req.query;

  await insertApiLogData(req);

  const movieImdbValidationResult = validateMovieTitleImdbParams(imdb, 'Imdb');
  const movieTitleValidationResult = validateMovieTitleImdbParams(title);

  if (movieImdbValidationResult.status === 'failed' && movieTitleValidationResult.status === 'failed') {
    sendMiddlewareFailedResponse(res, 400, movieImdbValidationResult.message);
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

  const moviePlotValidationResult = validateOptions(plot, 'plot');
  if (moviePlotValidationResult.status === 'failed') {
    sendMiddlewareFailedResponse(res, 400, moviePlotValidationResult.message);
    return;
  }

  next();
};
