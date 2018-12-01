const postgres = require('pg');
const mysql = require('mysql');
const seq = require('sequelize');
require('dotenv').config();

const connectionPostgres = new seq(
  'addidas',
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    // host: 'localhost',
    host: '35.161.248.127',
    port: 5432,
    dialect: 'postgres',
  }
);

connectionPostgres
  .authenticate()
  .then(() => {
    console.log('postgres connected');
  })
  .catch(err => {
    console.log('error with server');
    console.log(err);
  });

module.exports.postgres = connectionPostgres;
