const { OMDB_API_URL } = require('../config');
const { sendApiRequest } = require('../helpers/request-helpers');

function prepareParams(queryParams, reqParams) {
  return `${queryParams}=${encodeURIComponent(reqParams)}`;
}

class MovieServices {
  constructor() {
    this.url = OMDB_API_URL;
  }

  getUrl(params) {
    return `${this.url}${params}`;
  }

  async sendRequest(params) {
    return sendApiRequest('GET', this.getUrl(params));
  }

  async search(req) {
    const {
      title, type, year, page,
    } = req.query;

    let urlParams = prepareParams('s', title);

    if (type !== undefined) {
      urlParams += `&${prepareParams('type', type)}`;
    }

    if (year !== undefined) {
      urlParams += `&${prepareParams('y', year)}`;
    }

    if (page !== undefined) {
      urlParams += `&${prepareParams('page', page)}`;
    }

    return this.sendRequest(urlParams);
  }

  async detail(req) {
    const {
      imdb, title, type, year, plot,
    } = req.query;

    let urlParams = '';

    if (imdb !== undefined) {
      urlParams += `&${prepareParams('i', imdb)}`;
    }

    if (title !== undefined) {
      urlParams += `&${prepareParams('t', title)}`;
    }

    if (type !== undefined) {
      urlParams += `&${prepareParams('type', type)}`;
    }

    if (year !== undefined) {
      urlParams += `&${prepareParams('y', year)}`;
    }

    if (plot !== undefined) {
      urlParams += `&${prepareParams('plot', plot)}`;
    }

    return this.sendRequest(urlParams);
  }
}

module.exports = MovieServices;
