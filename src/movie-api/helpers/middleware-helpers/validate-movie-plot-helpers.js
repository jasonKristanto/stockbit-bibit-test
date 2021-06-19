const validationHelpers = require('../validation-helpers');
const { plotParamsOptions } = require('../validation-helpers');

const validateMoviePlotParams = (type) => {
  if (validationHelpers.isParamsExist(type)) {
    if (!validationHelpers.isString(type)) {
      return {
        status: 'failed',
        message: 'Plot parameter must be a string',
      };
    }

    if (!validationHelpers.isParamValidOptions(type, plotParamsOptions)) {
      return {
        status: 'failed',
        message: 'Plot parameter only accept value as \'full \' and \'short\'',
      };
    }
  }

  return {
    status: 'success',
  };
};

module.exports = {
  validateMoviePlotParams,
};
