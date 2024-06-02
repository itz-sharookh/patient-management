import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: "",
  },
  reducers: {
    addLogin(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    removeLogin(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
