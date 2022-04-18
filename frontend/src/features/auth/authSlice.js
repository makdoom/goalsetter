import { createSlice } from "@reduxjs/toolkit";

// Get user from localstorage
const user = JSON.parse(localStorage.getItem(auth));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // reducers goes here
    reset: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
