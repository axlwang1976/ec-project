import shopActionTypes from '../actionTypes/shopActionTypes';

export const updateCollections = collectionsMap => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
