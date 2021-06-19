const { getMovieApiUrl, sendRequest } = require('../../helpers/request-helpers');

module.exports = {
  searchService: async (req) => {
    const {
      title, type, year, page,
    } = req.query;

    let urlParams = `s=${encodeURIComponent(title)}`;

    if (type !== undefined) {
      urlParams += `&type=${encodeURIComponent(type)}`;
    }

    if (year !== undefined) {
      urlParams += `&y=${encodeURIComponent(year)}`;
    }

    if (page !== undefined) {
      urlParams += `&page=${encodeURIComponent(page)}`;
    }

    const url = getMovieApiUrl(urlParams);

    return sendRequest('GET', url);
  },
};
