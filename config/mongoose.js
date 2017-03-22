const winston = require('winston');
const mongoose = require('mongoose');

const server = process.env.MONGO_SERVER || 'db';
const database = process.env.MONGO_DB || 'bookshelf';
const uristring = `mongodb://${server}/${database}`;

mongoose.connect(uristring, (err) => {
  if (err) {
    winston.error(`ERROR connecting to: ${uristring}. ${err}`);
  } else {
    winston.info(`Succeeded connected to: ${uristring}`);
  }
});
