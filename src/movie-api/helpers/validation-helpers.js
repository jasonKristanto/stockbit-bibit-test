const typeParamsOptions = ['movie', 'series', 'episode'];
const plotParamsOptions = ['full', 'short'];

function isNumeric(params) {
  return !Number.isNaN(Number(params));
}

function isString(params) {
  return typeof params === 'string';
}

function isParamsExist(params) {
  return (params !== undefined && params !== null);
}

function isParamValidOptions(type, options) {
  return options.includes(type);
}

module.exports = {
  typeParamsOptions,
  plotParamsOptions,
  isNumeric,
  isString,
  isParamsExist,
  isParamValidOptions,
};
