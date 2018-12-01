require('newrelic');
require('dotenv').config();

const express = require('express');
const router = require('../../routers/main.js');
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const request = require('request');
const cors = require('cors');
const app = require('../../app.js');

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../../../client/dist')));
server.use('/api', router);

module.exports = server;
