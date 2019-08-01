import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase';
import shopActionTypes from '../actionTypes/shopActionTypes';

const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

const fetchCollectionsFail = errorMag => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: errorMag,
});

export const fetchCollectionsAsync = () => dispatch => {
  const collectionRef = firestore.collection('collections');

  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchCollectionsFail(error.message)));
};
