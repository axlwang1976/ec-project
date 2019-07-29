import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShoppingData = createSelector(
  [selectShop],
  shop => Object.keys(shop.shoppingData).map(key => shop.shoppingData[key])
);

export const selectShoppingDataForCollection = createSelector(
  [selectShop],
  shop => shop.shoppingData
);
