import { useReducer } from "react";
import { createContext } from "react";

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

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_DROPDOWN: "TOGGLE_DROPDOWN",
};

const INITIAL_STATE = {
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS: {
      return { ...state, ...payload };
    }
    case CART_ACTION_TYPES.TOGGLE_DROPDOWN: {
      return { ...state, isCartOpen: !state.isCartOpen };
    }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (productToAdd) => {
    updateCartItemsReducer(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    updateCartItemsReducer(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (product) => {
    updateCartItemsReducer(clearCartItem(cartItems, product));
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (prev, curr) => prev + curr.quantity * curr.price,
      0
    );
    const newCartCount = newCartItems.reduce(
      (prev, curr) => prev + curr.quantity,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const toggleIsCartOpen = () => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_DROPDOWN });
  };

  const value = {
    isCartOpen,
    // setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    toggleIsCartOpen,
    clearItemFromCart,
    removeItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
