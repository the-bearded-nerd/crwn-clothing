import { createSlice, createAction } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  cartItems: [],
  isCartOpen: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    toggleCartDropdown(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

const addCartItem = (cartItems, productToAdd) => {
  const existingProduct = cartItems.find((elem) => elem.id === productToAdd.id);
  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
    },
  ];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingProduct = cartItems.find(
    (elem) => elem.id === productToRemove.id
  );
  if (existingProduct.quantity === 1) {
    return clearCartItem(cartItems, productToRemove);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const addItemToCart = createAction(
  "cart/setCartItems",
  (cartItems, productToAdd) => {
    return {
      payload: addCartItem(cartItems, productToAdd),
    };
  }
);

export const removeItemFromCart = createAction(
  "cart/setCartItems",
  (cartItems, productToAdd) => {
    return {
      payload: removeCartItem(cartItems, productToAdd),
    };
  }
);

export const clearItemFromCart = createAction(
  "cart/setCartItems",
  (cartItems, productToAdd) => {
    return {
      payload: clearCartItem(cartItems, productToAdd),
    };
  }
);

export default cartSlice.reducer;
export const { setCartItems, toggleCartDropdown } = cartSlice.actions;
