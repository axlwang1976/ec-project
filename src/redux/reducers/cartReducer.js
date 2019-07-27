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
    case cartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload
        ),
      };
    case cartActionTypes.INC_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem =>
          cartItem.id === action.payload
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        ),
      };
    case cartActionTypes.DEC_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem => {
          if (cartItem.qty > 0) {
            return cartItem.id === action.payload
              ? { ...cartItem, qty: cartItem.qty - 1 }
              : cartItem;
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
