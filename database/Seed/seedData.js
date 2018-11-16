const products = require('../models/products');
// const Faker = require('Faker'); //for omar
// const utils = require('../../utils/utils'); //for omar
const fs = require('fs');
const { fake } = require('faker');

console.time();

// example of Faker fake('{{name.lastName}}, {{name.firstName}}'));
// writeFile.write(`name | color | price | image | review_count | options`);
//to handle img arr for options and imgs
const img = [];
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

const writeFile = fs.createWriteStream(
  './database/Seed/fakeData/fakeSeedData2.csv'
);

const imgArr = n => {
  for (let i = 0; i < n; i++) {
    img.push(`https://loremflickr.com/g/320/240/paris?lock=${i}`);
  }
};

imgArr(1000);

const genFakeData = n => {
  for (let i = 0; i < n; i++) {
    const randomPrice = `$${Math.floor(Math.random() * (300 - 100)) + 100}`;
    //to genarate 3 random colors;
    const randomColorArr = color.sort(() => 0.5 - Math.random());
    const selectColor = randomColorArr.slice(0, 3);
    //fake ProductName
    const productName = fake('{{name.lastName}}_{{address.zipCode}}');
    //fake option img
    const random = img.sort(() => 0.5 - Math.random());
    const selectedOption = random.slice(0, 3);
    //fake img
    const selectedImg = random.slice(3, 11);

    const dataGen = `${productName} | ${selectColor} | ${randomPrice} | ${selectedImg} | ${Math.floor(
      Math.random() * (2000 - 5) + 5
    )} | ${selectedOption} \n`;

    writeFile.write(dataGen);
  }

  writeFile.once('drain', () => {
    console.log('draining to write more');
  });
};

genFakeData(3000000);

console.timeEnd();
/*
//this is to recreate table 
const createProduct = () => {
  products
  .create({
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

*/
