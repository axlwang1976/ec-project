import { userActionTypes } from '../actionTypes/userActionTypes';

const INIT_STATE = { currentUser: null, errorMsg: '' };

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGNIN_SUCCESS:
      return { ...state, currentUser: action.payload, errorMsg: '' };
    case userActionTypes.SIGNOUT_SUCCESS:
      return { ...state, currentUser: null, errorMsg: '' };
    case userActionTypes.SIGNIN_FAIL:
    case userActionTypes.SIGNOUT_FAIL:
    case userActionTypes.SIGNUP_FAIL:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

export default userReducer;
