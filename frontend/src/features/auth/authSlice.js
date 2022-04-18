import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localstorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.registerUser(user);
    } catch (error) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
});

export const selectUser = (state) => state.auth;
export const { reset } = authSlice.actions;

export default authSlice.reducer;

// // Register a user
// export const userRegistration = createAsyncThunk(
//   "auth/register",
//   async (user, thunkAPI) => {
//     // ::user will pass from register component while dispatching register

//     try {
//       return await authService.registerUser(user);
//     } catch (error) {
//       const message =
//         (error.response && error.response.data && error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
