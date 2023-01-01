import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_CONTENT:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
};
