import { userActionTypes } from '../actionTypes/userActionTypes';

export const googleSigninStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSigninStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signinSuccess = user => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signinFail = errorMsg => ({
  type: userActionTypes.SIGNIN_FAIL,
  payload: errorMsg,
});

export const checkUser = errorMsg => ({
  type: userActionTypes.CHECK_USER,
});

export const signoutStart = () => ({
  type: userActionTypes.SIGNOUT_START,
});

export const signoutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS,
});

export const signoutFail = errorMsg => ({
  type: userActionTypes.SIGNOUT_FAIL,
  payload: errorMsg,
});

export const signupStart = user => ({
  type: userActionTypes.SIGNUP_START,
  payload: user,
});

export const signupSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData },
});

export const signupFail = errorMsg => ({
  type: userActionTypes.SIGNUP_FAIL,
  payload: errorMsg,
});
