const { getMovieApiUrl, sendRequest } = require('../../helpers/request-helpers');
const { sendSuccessResult, sendFailedResult } = require('../../helpers/response-helpers');

module.exports = {
  detailService: async (req) => {
    const url = getMovieApiUrl('t=Batman%3A+The+Killing+Joke');
    return sendRequest('GET', url)
      .then((response) => sendSuccessResult('Movies found.', response.data))
      .catch((error) => {
        console.log(error);
        return sendFailedResult(500, 'Failed to get movies');
      });
  },
};
