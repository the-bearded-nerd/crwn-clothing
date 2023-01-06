import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const fetchCategoriesAsync = createAsyncThunk(
  "fetchCategoriesAsync",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments();
      thunkAPI.dispatch(fetchCategoreisSuccess(categoriesArray));
    } catch (error) {
      thunkAPI.dispatch(fetchCategoriesFailed(error));
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    fetchCategoriesStart(state) {
      state.isLoading = true;
    },
    fetchCategoriesFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchCategoreisSuccess(state, action) {
      state.isLoading = false;
      state.categories = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
export const {
  fetchCategoriesFailed,
  fetchCategoreisSuccess,
  fetchCategoriesStart,
} = categoriesSlice.actions;
