import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase';
import shopActionTypes from '../actionTypes/shopActionTypes';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFail,
} from '../actions/shopActions';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const colletionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(colletionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
