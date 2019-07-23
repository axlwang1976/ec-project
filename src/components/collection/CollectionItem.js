import React from 'react';
import PropTypes from 'prop-types';
import styles from './CollectionItem.module.scss';

export default function CollectionItem({ name, price, imageUrl }) {
  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.collectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
}

CollectionItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};
