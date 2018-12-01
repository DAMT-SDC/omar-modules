require('newrelic');
const { ProductPostgres } = require('../../database/models/products');
const utils = require('../../utils/utils');

const controller = {
  get: (req, res) => {
    const recordId = Math.floor(Math.random() * (7000000 - 6000000) + 9000000);
    // var recordId = Math.floor(Math.random() * 1000);
    // let recordId = 1;
    ProductPostgres.findById(recordId)
      .then(response => {
        console.log(response.dataValues);
        res.status(200).send(response.dataValues);
      })
      .catch(err => {
        console.log(err);
      });
  },

  post: (req, res) => {
    console.log('hello from post');
  },

  delete: (req, res) => {
    console.log('something');
  },
};

module.exports = controller;
