const { getMovieApiUrl, sendRequest } = require('../../helpers/request-helpers');
const { sendSuccessResult, sendFailedResult } = require('../../helpers/response-helpers');

module.exports = {
  searchService: async (req) => {
    const url = getMovieApiUrl('s=Batman');
    return sendRequest('GET', url)
      .then((response) => sendSuccessResult('Movies found.', response.data))
      .catch((error) => {
        console.log(error);
        return sendFailedResult(500, 'Failed to get movies');
      });
  },
};
