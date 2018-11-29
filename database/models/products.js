const { postgres } = require('../index.js');
const seq = require('sequelize');

const ProductPostgres = postgres.define(
  'product',
  {
    _id: {
      type: seq.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: { type: seq.STRING, allowNull: false },
    colors: { type: seq.STRING },
    price: { type: seq.STRING, allowNull: false },
    images: { type: seq.TEXT },
    review_count: { type: seq.INTEGER },
    options: { type: seq.TEXT },
  },
  {
    timestamps: false,
  },
  postgres
    .sync()
    .then(() => {
      console.log('product model set for postgres');
    })
    .catch(err => {
      console.log(err);
    })
);

module.exports = { ProductPostgres };
