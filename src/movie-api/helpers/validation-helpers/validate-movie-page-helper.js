const validationHelpers = require('../helpers');

const pageMin = 1;
const pageMax = 100;

const validateMoviePageParams = (page) => {
  if (validationHelpers.isExist(page)) {
    if (!validationHelpers.isNumeric(page)) {
      return {
        status: 'failed',
        message: 'Page parameter must be a number',
      };
    }

    if (!(page >= pageMin && page <= pageMax)) {
      return {
        status: 'failed',
        message: 'Page parameter must be in range 1 to 100',
      };
    }
  }

  return {
    status: 'success',
  };
};

module.exports = {
  validateMoviePageParams,
};
