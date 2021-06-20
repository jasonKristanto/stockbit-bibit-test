const validationHelpers = require('../helpers');

const options = {
  type: ['movie', 'series', 'episode'],
  plot: ['full', 'short'],
};

const attributeNames = {
  type: 'Type',
  plot: 'Plot',
};

const validateOptions = (optionParams, attribute) => {
  if (validationHelpers.isExist(optionParams)) {
    if (!validationHelpers.isString(optionParams)) {
      return {
        status: 'failed',
        message: `${attributeNames[attribute]} parameter must be a string`,
      };
    }

    if (!validationHelpers.isOptionValid(optionParams, options[attribute])) {
      return {
        status: 'failed',
        message: `${attributeNames[attribute]} parameter only accept value as ${options[attribute].join(', ')}`,
      };
    }
  }

  return {
    status: 'success',
  };
};

module.exports = {
  validateOptions,
};
