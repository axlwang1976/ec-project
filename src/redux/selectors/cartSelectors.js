import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectIsShowing = createSelector(
  [selectCart],
  cart => cart.isShowing
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accu, next) => accu + next.qty, 0)
);
