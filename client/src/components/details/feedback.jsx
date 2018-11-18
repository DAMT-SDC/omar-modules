import React, { Component } from 'react';
import styles from '../../css/feedback-style.css';

export default function Feedback(props) {
  return (
    <div>
      <div className={styles.detailsFeedback}>
        <span className={styles.ratings}>
          <img
            className={styles.ratingStar}
            src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"
            alt=""
          />
          <img
            className={styles.ratingStar}
            src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"
            alt=""
          />
          <img
            className={styles.ratingStar}
            src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"
            alt=""
          />
          <img
            className={styles.ratingStar}
            src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"
            alt=""
          />
          <img
            className={styles.ratingStar}
            src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"
            alt=""
          />
        </span>
        <span className={styles.detailReviews}>
          <a href=".">Read all {props.product.review_count} reviews</a>
        </span>
      </div>
      <div className={styles.productCategory}>
        <div className={styles.productCategoryItem}>
          {props.product.category}
        </div>
      </div>
      <h1 className={styles.productName}>{props.product.name}</h1>
      <div className={styles.productPrice}>
        <span>{props.product.price}</span>
      </div>
    </div>
  );
}
