import React, { Component } from 'react';
import Details from './details/details';
import Carousel from './carousel/carousel';
import Complete from './details/completeLook';
import Breadcrum from './breadcrums';
import axios from 'axios';
import styles from '../css/app-style.css';

export default class App extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        product: '',
        featured: '',
        options: [],
        images: [],
        magnify: false,
      });
    axios.defaults.baseURL =
      // 'http://localhost:' + process.env.PORT;
      'http://52.13.190.214:3001';
  }

  componentDidMount() {
    // console.log('http://' + process.env.HOSTNAME + ':' + process.env.PORT);
    this.fetchProduct();
  }

  generateRandomNumber(value) {
    return Math.floor(Math.random() * value);
  }

  fetchProduct() {
    axios
      .get('/api/product')
      .then(response => {
        console.log(response.data);
        console.log(typeof response.data.options);
        this.setState({
          product: response.data,
          options: response.data.options.split(','),
          images: response.data.images.split(','),
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const feature = this.state.images.slice(0, 1);
    console.log(this.state.product);
    return (
      <div className={`moduleMargin ${styles.moduleMargin}`}>
        <Breadcrum />
        <div className={`productDetails ${styles.productDetails}`}>
          <div className={`banner ${styles.banner}`} />
          <div className={`detailsContent ${styles.detailsContent}`}>
            <div className={styles.productCarousel}>
              <Carousel
                featured={feature}
                images={this.state.images}
                magnification={this.magnification}
              />
            </div>
            <div className={`status ${styles.status}`}>NEW</div>
            <div className={`details ${styles.details}`}>
              <Details
                product={this.state.product}
                options={this.state.options}
              />
            </div>
            <Complete product={this.state.product} />
          </div>
        </div>
      </div>
    );
  }
}
