import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;
