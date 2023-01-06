import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./user/user.slice";
import categoriesSlice from "./categories/categories.slice";
import cartSlice from "./cart/cart.slice";

export const rootReducer = combineReducers({
  user: userSlice,
  categories: categoriesSlice,
  cart: cartSlice,
});
