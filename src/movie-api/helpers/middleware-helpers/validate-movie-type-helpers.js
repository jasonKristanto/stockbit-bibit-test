const validationHelpers = require('../validation-helpers');
const { typeParamsOptions } = require('../validation-helpers');

const validateMovieTypeParams = (type) => {
  if (validationHelpers.isParamsExist(type)) {
    if (!validationHelpers.isString(type)) {
      return {
        status: 'failed',
        message: 'Type parameter must be a string',
      };
    }

    if (!validationHelpers.isParamValidOptions(type, typeParamsOptions)) {
      return {
        status: 'failed',
        message: 'Type parameter only accept value as \'movie \', \'series \', and \'episode\'',
      };
    }
  }

  return {
    status: 'success',
  };
};

module.exports = {
  validateMovieTypeParams,
};
