import shopActionTypes from '../actionTypes/shopActionTypes';

const INIT_STATE = { collections: null, errorMsg: '', isLoading: false };

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isLoading: true };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isLoading: false };
    case shopActionTypes.FETCH_COLLECTIONS_FAIL:
      return { ...state, errorMsg: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default shopReducer;
