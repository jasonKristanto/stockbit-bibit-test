const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const { SERVER_PORT } = require('./config');

const server = express();

server.use(bodyParser.json());
server.use('/', routes);

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on localhost:${SERVER_PORT}`);
});
