const products = require('../../database/models/products');
const utils = require('../../utils/utils');

const controller = {
  get: (req, res) => {
    var recordId = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
    // let recordId = 50;
    products
      .findById(recordId)
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
