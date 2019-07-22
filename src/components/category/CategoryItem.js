import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryItem.module.scss';

export default function CategoryItem({ title, imageUrl, size }) {
  return (
    <div
      className={`${styles.menuItem} ${size && styles.large}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
}

CategoryItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
};
