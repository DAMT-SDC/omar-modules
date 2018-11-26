import React, { Component } from 'react';
import ImageListItem from './imageListItem';
import styles from '../../css/carousel/imageList.css';

export default function Option(props) {
  return (
    <div>
      <div className={styles.ImageList}>
        <div className={styles.ImageTemplate}>
          <button className={styles.ImageTempalateButton}>
            <img className={styles.ImageTemplateImage} src="" alt="" />
          </button>
        </div>
        {props.images.map(image => (
          <div key={image}>
            <ImageListItem image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
