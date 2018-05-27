const mongoose = require('mongoose');
const Config = require('../config');

module.exports = function () {
  mongoose.Promise = global.Promise;
  const db = mongoose.connect(Config.db, { useMongoClient: true });
  mongoose.connection.on('error', () => {
    console.log('Error: Could not connect to MongoDB'.red);
  }).on('open', () => {
    console.log('Connected to MongoDB');
  });
  return db;
};
