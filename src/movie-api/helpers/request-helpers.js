const axios = require('axios');

const { OMDB_API_URL } = require('../config');
const { NOT_FOUND } = require('./rc-helpers');
const { sendSuccessResult, sendFailedResult } = require('./response-helpers');

function getMovieApiUrl(params) {
  return `${OMDB_API_URL}${params}`;
}

async function sendRequest(method = 'GET', url, data = null) {
  const param = {
    url,
    method,
    timeout: 1000 * 30,
    cancelToken: axios.CancelToken.source().token,
  };

  if (method.toUpperCase() === 'POST') {
    param.headers = {
      'Content-Type': 'application/json',
    };

    param.data = data;
  }

  return axios(param).then((response) => {
    if (response.data.Response.toLowerCase() === 'false') {
      throw new Error(response.data.Error);
    }

    return sendSuccessResult('Movies found', response.data);
  }).catch((error) => {
    console.log(error);

    let statusCode = 500;
    let { message } = error;

    if (message === 'Movie not found!' || message === 'Incorrect IMDb ID.') {
      statusCode = NOT_FOUND.CODE;
      message = NOT_FOUND.MESSAGE;
    }

    return sendFailedResult(statusCode, 'Failed to get movie', message);
  });
}

module.exports = { getMovieApiUrl, sendRequest };
