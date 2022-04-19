import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {},
});

export const { reset } = goalSlice.actions;

export default goalSlice.reducer;
