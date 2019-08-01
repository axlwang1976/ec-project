import shopActionTypes from '../actionTypes/shopActionTypes';

const INIT_STATE = { collections: null, errorMsg: '' };

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload };
    case shopActionTypes.FETCH_COLLECTIONS_FAIL:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
