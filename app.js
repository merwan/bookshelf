const express = require('express');
const winston = require('winston');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  winston.info(`Example app listening on port ${PORT}!`);
});
