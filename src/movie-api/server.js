const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const serverPort = 3000;

server.use(bodyParser.json());

server.get('/', ((req, res) => {
  res.status(200).json({
    message: 'hello movie-api',
  });

  res.end();
}));

server.listen(serverPort, () => {
  console.log(`Server is running on localhost:${serverPort}`);
});
