require('dotenv').config();

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT,
  OMDB_API_URL: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&`,
};
