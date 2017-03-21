const express = require('express');
const winston = require('winston');
const mongoose = require('mongoose');

const server = process.env.MONGO_SERVER || 'db';
const database = process.env.MONGO_DB || 'bookshelf';
const uristring = `mongodb://${server}/${database}`;

const PORT = process.env.PORT || 3000;

mongoose.connect(uristring, (err) => {
  if (err) {
    winston.error(`ERROR connecting to: ${uristring}. ${err}`);
  } else {
    winston.info(`Succeeded connected to: ${uristring}`);
  }
});

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  winston.info(`Example app listening on port ${PORT}!`);
});
