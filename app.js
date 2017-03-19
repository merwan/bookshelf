const express = require('express');
const winston = require('winston');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  winston.info('Example app listening on port 3000!');
});
