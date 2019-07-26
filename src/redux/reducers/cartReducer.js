import { cartActionTypes } from '../actionTypes/cartActionTypes';

const INIT_STATE = { isShowing: false };

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_SHOPPING_LIST:
      return { ...state, isShowing: !state.isShowing };
    default:
      return state;
  }
};

export default cartReducer;
