import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { addToCart } from '../../redux/actions/cartActions';
import styles from './CollectionItem.module.scss';

function CollectionItem({ item, addToCartConnect }) {
  const { name, price, imageUrl } = item;

  const handleClick = () => addToCartConnect(item);

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
      <Button
        variant="contained"
        color="primary"
        className={styles.button}
        onClick={handleClick}
      >
        Add to cart
      </Button>
    </div>
  );
}

CollectionItem.propTypes = {
  item: PropTypes.object,
  addToCartConnect: PropTypes.func,
};

export default connect(
  null,
  { addToCartConnect: addToCart }
)(CollectionItem);
