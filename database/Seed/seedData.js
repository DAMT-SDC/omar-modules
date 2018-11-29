const { ProductPostgres } = require('../models/products');
// const test = require('../models/test');
const Faker = require('Faker'); //for omar
const utils = require('../../utils/utils'); //for omars
const fs = require('fs');
const { fake } = require('faker');

// example of Faker fake('{{name.lastName}}, {{name.firstName}}'));
// writeFile.write(`name | color | price | image | review_count | options`);
// to handle img arr for options and imgs

const color = [
  'red',
  'blue',
  'orange',
  'purple',
  'green',
  'yellow',
  'brown',
  'white',
  'black',
];

/*
const writeFile = fs.createWriteStream(
  './database/Seed/fakeData/fakeSeedData4.csv'
);

const imgArr = n => {
  const img = [];
  for (let i = 0; i < n; i++) {
    img.push(
      `https://loremflickr.com/g/320/240/paris?lock=${Math.floor(
        Math.random() * 1000
      )}`
    );
  }
  return img;
};

const genData = function(writer, encoding, callback) {
  let i = 2000000;
  console.time('Time this');
  const test = function() {
    let ok = true;

    while (i > 0 && ok) {
      const randomPrice = `$${Math.floor(Math.random() * (300 - 100)) + 100}`;
      //to genarate 3 random colors;
      const randomColorArr = color.sort(() => 0.5 - Math.random());
      const selectColor = randomColorArr.slice(0, 3);
      //fake ProductName
      const productName = fake('{{name.lastName}}_{{address.zipCode}}');
      //fake option img
      const selectedOption = imgArr(3);
      //fake img
      const selectedImg = imgArr(9);
      const dataGen = `${productName} | ${selectColor} | ${randomPrice} | ${selectedImg} | ${Math.floor(
        Math.random() * (2000 - 5) + 5
      )} | ${selectedOption} \n`;

      i -= 1;
      if (i === 0) {
        writer.write(dataGen, encoding, callback);
        console.timeEnd('Time this');
      } else {
        ok = writer.write(dataGen, encoding);
      }
    }

    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', test);
    }
  };
  test();
};

genData(writeFile, 'utf8', err => {
  if (err) console.error(err);
});
*/

//this is to recreate table
const createProduct = () => {
  ProductPostgres.create({
    name: fake(`{{name.lastName}}_{{address.zipCode}}`),
    colors:
      color[utils.generateRandomNumber(color.length)] +
      ' / ' +
      color[utils.generateRandomNumber(color.length)] +
      ' / ' +
      color[utils.generateRandomNumber(color.length)],
    price: utils.generateRandomNumber(501),
    images: 'mature',
    review_count: utils.generateRandomNumber(1001),
    options: 'please stop',
  })
    .then(() => {
      console.log('posted');
    })
    .catch(err => {
      console.log(err);
    });
};

createProduct();
