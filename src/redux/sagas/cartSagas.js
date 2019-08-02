import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userActionTypes } from '../actionTypes/userActionTypes';
import { clearCart } from '../actions/cartActions';

function* clearCartOnSignout() {
  yield put(clearCart());
}

function* onSignoutSuccess() {
  yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
