function isNumeric(params) {
  return !Number.isNaN(Number(params));
}

function isString(params) {
  return typeof params === 'string';
}

function isExist(params) {
  return (params !== undefined && params !== null);
}

function isOptionValid(params, options) {
  return options.includes(params);
}

module.exports = {
  isNumeric,
  isString,
  isExist,
  isOptionValid,
};
