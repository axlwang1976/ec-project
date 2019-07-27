import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleShoppingList } from '../../redux/actions/cartActions';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

function CartIcon({ toggleShoppingListConnect, cartItemsCount }) {
  return (
    <div
      className={styles.cartIcon}
      onClick={toggleShoppingListConnect}
      onKeyPress={() => {}}
      role="button"
      tabIndex={0}
    >
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>{cartItemsCount}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

CartIcon.propTypes = {
  toggleShoppingListConnect: PropTypes.func,
  cartItemsCount: PropTypes.number,
};

export default connect(
  mapStateToProps,
  { toggleShoppingListConnect: toggleShoppingList }
)(CartIcon);
