const validationHelpers = require('../helpers');

const validateMovieYearParams = (year) => {
  if (validationHelpers.isExist(year)) {
    if (!validationHelpers.isNumeric(year)) {
      return {
        status: 'failed',
        message: 'Year parameter must be a number',
      };
    }
  }

  return {
    status: 'success',
  };
};

module.exports = {
  validateMovieYearParams,
};
