const axios = require('axios');

const { OMDB_API_URL } = require('../config');

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

  return axios(param);
}

module.exports = { getMovieApiUrl, sendRequest };
