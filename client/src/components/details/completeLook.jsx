import React, { Component } from 'react';
import styles from '../../css/completeLook.css';

export default function Options(props) {
  return (
    <div className={styles.completeContent}>
      <div className={styles.completeSection}>
        <div className={styles.completeSelector}>
          <h4 className={styles.completeTitle}> COMPLETE THE LOOK</h4>
          <div className={styles.completeClothingSection}>
            <div className={styles.CompletClothingJustify}>
              <div className={styles.CompleteClothingItemSelector}>
                <div className={styles.CompleteClothingItemImage}>
                  <img
                    className={styles.CompleteClothingItemPic}
                    src="https://loremflickr.com/g/100/100/paris?lock=1"
                    alt=""
                  />
                </div>
                <div className={styles.CompleteClothingItemDetails}>
                  <div className={styles.CompleteClothingDetailsValue}>
                    <span className={styles.CompleteClothingDetailsAmount}>
                      {`$${Math.floor(Math.random() * (150 - 50) + 50)}`}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.CompleteClothingItemSelector}>
                <div className={styles.CompleteClothingItemImage}>
                  <img
                    className={styles.CompleteClothingItemPic}
                    src="https://loremflickr.com/g/100/100/paris?lock=1"
                    alt=""
                  />
                </div>
                <div className={styles.CompleteClothingItemDetails}>
                  <div className={styles.CompleteClothingDetailsValue}>
                    <span className={styles.CompleteClothingDetailsAmount}>
                      {`$${Math.floor(Math.random() * (150 - 50) + 50)}`}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.CompleteClothingItemSelector}>
                <div className={styles.CompleteClothingItemImage}>
                  <img
                    className={styles.CompleteClothingItemPic}
                    src="https://loremflickr.com/g/100/100/paris?lock=1"
                    alt=""
                  />
                </div>
                <div className={styles.CompleteClothingItemDetails}>
                  <div className={styles.CompleteClothingDetailsValue}>
                    <span className={styles.CompleteClothingDetailsAmount}>
                      {`$${Math.floor(Math.random() * (150 - 50) + 50)}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
