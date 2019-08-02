import shopActionTypes from '../actionTypes/shopActionTypes';

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFail = errorMag => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: errorMag,
});
