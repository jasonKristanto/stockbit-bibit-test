const { getMovieApiUrl, sendRequest } = require('../../helpers/request-helpers');

module.exports = {
  detailService: async (req) => {
    const {
      imdb, title, type, year, plot,
    } = req.query;

    let urlParams = '';

    if (imdb !== undefined) {
      urlParams += `i=${encodeURIComponent(imdb)}`;
    }

    if (title !== undefined) {
      urlParams += `t=${encodeURIComponent(title)}`;
    }

    if (type !== undefined) {
      urlParams += `&type=${encodeURIComponent(type)}`;
    }

    if (year !== undefined) {
      urlParams += `&y=${encodeURIComponent(year)}`;
    }

    if (plot !== undefined) {
      urlParams += `&plot=${encodeURIComponent(plot)}`;
    }

    const url = getMovieApiUrl(urlParams);

    return sendRequest('GET', url);
  },
};
