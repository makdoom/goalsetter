import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

// Getting user from localstorage
const user = JSON.parse(localStorage.getItem("authUser"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      await authService.register(userData);
    } catch (error) {
      console.log(error.response);
      // return thunkAPI.rejectWithValue()
    }
  }
);

// AuthSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
});

export const selectedUser = (state) => state.auth;

export const { reset } = authSlice.actions;

export default authSlice.reducer;
