import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShoppingData = createSelector(
  [selectShop],
  shop =>
    shop ? Object.keys(shop.collections).map(key => shop.collections[key]) : []
);

export const selectShoppingDataForCollection = createSelector(
  [selectShop],
  shop => (shop ? shop.collections : null)
);
