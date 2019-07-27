import { cartActionTypes } from '../actionTypes/cartActionTypes';

export const toggleShoppingList = () => ({
  type: cartActionTypes.TOGGLE_SHOPPING_LIST,
});

export const addToCart = itemToAdd => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: itemToAdd,
});

export const removeCartItem = itemToRemove => ({
  type: cartActionTypes.REMOVE_CART_ITEM,
  payload: itemToRemove,
});

export const incQty = id => ({
  type: cartActionTypes.INC_QTY,
  payload: id,
});

export const decQty = id => ({
  type: cartActionTypes.DEC_QTY,
  payload: id,
});
