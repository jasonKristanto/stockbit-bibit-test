const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const db = require('./models/connection');

const { SERVER_PORT } = require('./config');

const server = express();

server.use(bodyParser.json());
server.use('/', routes);

db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.log('Unable to connect to the database:', error);
});

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on localhost:${SERVER_PORT}`);
});
