import React, { Component } from 'react';
import styles from '../../css/options-style.css';
import Checkmark from './checkmark';

export default function Options(props) {
  console.log(props.options);
  return (
    <div className={`OptionSelection ${styles.OptinoSection}`}>
      <h5 className={`OptionTitle ${styles.OptionTitle}`}>AVAILABLE COLORS</h5>
      <div className={`OptionColorList ${styles.OptionColorList}`}>
        {props.product.colors}
      </div>
      <div className={`OptionColorSection ${styles.OptionColorSection}`}>
        <div className={`OptionsColorIcons ${styles.OptionsColorIcons}`}>
          {props.options.map(option => (
            <div
              className={`OptionsColorIconItem ${styles.OptionsColorIconItem}`}
              key={option}
            >
              <a
                className={`OptionsColorIconBackground ${
                  styles.OptionsColorIconBackground
                }`}
                href=""
              >
                <img
                  className={`OptionsColorsIconsPic ${
                    styles.OptionsColorsIconsPic
                  }`}
                  src={option}
                  alt=""
                />
              </a>
            </div>
          ))}
          {/* <div style={styles.OptionsColorIconItem}>
            <Checkmark />
            <a style={styles.OptionsColorIconBackground} href="">
              <div style={styles.OptionsColorsIconsPic}></div>
            </a>
          </div>
          <div style={styles.OptionsColorIconItem}>
            <a style={styles.OptionsColorIconBackground} href="">
              <div style={styles.OptionsColorsIconsPic}></div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
