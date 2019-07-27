import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShoppingList } from '../../redux/actions/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

function CartIcon({ toggleShoppingListConnect }) {
  return (
    <div
      className={styles.cartIcon}
      onClick={toggleShoppingListConnect}
      onKeyPress={() => {}}
      role="button"
      tabIndex={0}
    >
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>0</span>
    </div>
  );
}

CartIcon.propTypes = {
  toggleShoppingListConnect: PropTypes.func,
};

export default connect(
  null,
  { toggleShoppingListConnect: toggleShoppingList }
)(CartIcon);
