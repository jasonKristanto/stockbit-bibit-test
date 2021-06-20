require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const { DEV, TEST } = require('./config');

const routes = require('./routes');
const { dbTest } = require('./models/connection');

const server = express();
let serverPort = 3000;

server.use(bodyParser.json());
server.use('/', routes);

if (process.env.NODE_ENV === 'test') {
  serverPort = TEST.SERVER_PORT;
  dbTest.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch((error) => {
    console.log('Unable to connect to the database:', error);
  });
} else {
  serverPort = DEV.SERVER_PORT;
}

server.listen(serverPort, () => {
  console.log(`Server is running on localhost:${serverPort}`);
});

module.exports = server;
