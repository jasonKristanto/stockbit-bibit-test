const typeParamsOptions = ['movie', 'series', 'episode'];

function isNumeric(params) {
  return !Number.isNaN(Number(params));
}

function isString(params) {
  return typeof params === 'string';
}

function isParamsExist(params) {
  return (params !== undefined && params !== null);
}

function isTypeParamValid(type) {
  return typeParamsOptions.includes(type);
}

module.exports = {
  isNumeric, isString, isParamsExist, isTypeParamValid,
};
