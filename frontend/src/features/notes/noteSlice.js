import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from "./noteService";

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new note
export const createNote = createAsyncThunk(
  "note/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await noteService.create(data, token);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

// Notes slice
const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
});

export const selectNote = (state) => state.note;

// export const { reset } = authSlice.actions;

export default noteSlice.reducer;
