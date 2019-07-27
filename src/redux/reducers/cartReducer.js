import { cartActionTypes } from '../actionTypes/cartActionTypes';
import { addToCartHelper } from '../helpers/cartHelper';

const INIT_STATE = { isShowing: false, cartItems: [] };

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_SHOPPING_LIST:
      return { ...state, isShowing: !state.isShowing };
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCartHelper(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
