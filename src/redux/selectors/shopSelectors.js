import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShoppingData = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectShoppingDataForCollection = createSelector(
  [selectCollections],
  collections => {
    if (collections) {
      return collections;
    }
    return null;
  }
);
