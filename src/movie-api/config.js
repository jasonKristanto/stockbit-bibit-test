require('dotenv').config();

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT,
  OMDB_API_URL: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&`,
  DB_CONFIG: {
    DIALECT: process.env.DB_DIALECT,
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
  },
};
