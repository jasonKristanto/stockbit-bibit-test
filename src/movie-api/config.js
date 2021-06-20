require('dotenv').config();

module.exports = {
  OMDB_API_URL: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&`,
  DEV: {
    SERVER_PORT: process.env.SERVER_PORT,
    DB_CONFIG: {
      DIALECT: process.env.DB_DIALECT,
      HOST: process.env.DB_HOST,
      USER: process.env.DB_USER,
      PASSWORD: process.env.DB_PASSWORD,
      DB: process.env.DB_NAME,
    },
  },
  TEST: {
    SERVER_PORT: process.env.SERVER_PORT_TEST,
    DB_CONFIG: {
      DIALECT: process.env.DB_DIALECT_TEST,
      HOST: process.env.DB_HOST_TEST,
      USER: process.env.DB_USER_TEST,
      PASSWORD: process.env.DB_PASSWORD_TEST,
      DB: process.env.DB_NAME_TEST,
    },
  },
};
