const validationHelpers = require('../validation-helpers');

const validateMovieTitleParams = (title) => {
  if (!validationHelpers.isParamsExist(title)) {
    return {
      status: 'failed',
      message: 'Title parameter is required',
    };
  }

  if (!validationHelpers.isString(title)) {
    return {
      status: 'failed',
      message: 'Title parameter must be a string',
    };
  }

  return {
    status: 'success',
  };
};

module.exports = {
  validateMovieTitleParams,
};
