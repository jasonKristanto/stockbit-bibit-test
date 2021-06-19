const validationHelpers = require('../helpers');

const validateMovieTitleImdbParams = (title) => {
  if (!validationHelpers.isExist(title)) {
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
  validateMovieTitleImdbParams,
};
