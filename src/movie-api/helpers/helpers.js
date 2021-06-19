function isNumeric(params) {
  return !Number.isNaN(Number(params));
}

function isString(params) {
  return typeof params === 'string';
}

function isExist(params) {
  return (params !== undefined && params !== null);
}

function isOptionValid(type, options) {
  return type in options;
}

module.exports = {
  isNumeric,
  isString,
  isExist,
  isOptionValid,
};
