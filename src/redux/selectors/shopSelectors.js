import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShoppingData = createSelector(
  [selectShop],
  shop => shop.shoppingData
);
