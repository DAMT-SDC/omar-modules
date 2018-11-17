const postgres = require('pg');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdcTest');
require('dotenv').config();

const productsDb = mongoose.connection;

productsDb.on('error', console.error.bind(console, 'connection error'));
productsDb.once('open', () => {
  console.log('connected to mongodb');
});

module.exports = productsDb;
