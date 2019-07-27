import { cartActionTypes } from '../actionTypes/cartActionTypes';

export const toggleShoppingList = () => ({
  type: cartActionTypes.TOGGLE_SHOPPING_LIST,
});

export const addToCart = itemToAdd => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: itemToAdd,
});
