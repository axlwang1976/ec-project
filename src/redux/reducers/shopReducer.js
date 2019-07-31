import shopActionTypes from '../actionTypes/shopActionTypes';

const INIT_STATE = null;

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
