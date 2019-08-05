import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartItem.module.scss';

function CartItem({ name, price, imageUrl, qty }) {
  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt="name" />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {qty} x ${price}
        </span>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  qty: PropTypes.number,
};

export default React.memo(CartItem);
