const validationHelpers = require('../helpers');

const validateMovieTitleImdbParams = (title, attributes = 'Title') => {
  if (!validationHelpers.isExist(title)) {
    return {
      status: 'failed',
      message: `${attributes} parameter is required`,
    };
  }

  if (!validationHelpers.isString(title)) {
    return {
      status: 'failed',
      message: `${attributes} parameter must be a string`,
    };
  }

  return {
    status: 'success',
  };
};

module.exports = {
  validateMovieTitleImdbParams,
};
