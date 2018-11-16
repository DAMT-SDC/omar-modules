const server = require('./bin/www/index.js');
const express = require('express');
const normalize = require('normalize-port');
const databases = require('../database/index.js');
require('dotenv').config();

const listenPort = 3001;
server.listen(listenPort, () => {
  console.log(`server is running at http://localhost:${listenPort}`);
});

module.exports = server;
