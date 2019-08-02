import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userActionTypes } from '../actionTypes/userActionTypes';
import {
  auth,
  googleProvider,
  createUserProfile,
  getCurrentUser,
} from '../../firebase/firebase';
import {
  signinSuccess,
  signinFail,
  signoutSuccess,
  signoutFail,
  signupSuccess,
  signupFail,
} from '../actions/userActions';

function* getSnapshot(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfile, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinFail(error.message));
  }
}

function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshot(user);
  } catch (error) {
    yield put(signinFail(error.message));
  }
}

function* signinWithEmail({ payload }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(
      payload.email,
      payload.password
    );
    yield getSnapshot(user);
  } catch (error) {
    yield put(signinFail(error.message));
  }
}

function* isUserLogin() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshot(userAuth);
  } catch (error) {
    yield put(signinFail(error.message));
  }
}

function* userSignout() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFail(error.message));
  }
}

function* sendSignupData({ payload }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      payload.email,
      payload.password
    );
    yield put(
      signupSuccess({
        user,
        additionalData: payload.displayName,
      })
    );
  } catch (error) {
    yield put(signupFail(error.message));
  }
}

function* signinAfterSignup({ payload }) {
  yield getSnapshot(payload.user, payload.additionalData);
}

function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle);
}

function* onEmailSigninStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signinWithEmail);
}

function* onCheckUser() {
  yield takeLatest(userActionTypes.CHECK_USER, isUserLogin);
}

function* onSignout() {
  yield takeLatest(userActionTypes.SIGNOUT_START, userSignout);
}

function* onSignupStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, sendSignupData);
}

function* onSignupSuccess() {
  yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signinAfterSignup);
}

export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUser),
    call(onSignout),
    call(onSignupStart),
    call(onSignupSuccess),
  ]);
}
