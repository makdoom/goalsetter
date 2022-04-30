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
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.notes.push(action.payload);
      })
      .addCase(createNote.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
    // .addCase(loginUser.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(loginUser.fulfilled, (state, action) => {
    //   state.isSuccess = true;
    //   state.isLoading = false;
    //   state.user = action.payload;
    // })
    // .addCase(loginUser.rejected, (state, action) => {
    //   state.isError = true;
    //   state.isLoading = false;
    //   state.message = action.payload;
    //   state.user = null;
    // });
    // .addCase(logout.fulfilled, (state) => {
    //   state.user = null;
    // });
  },
});

export const selectNote = (state) => state.note;

export const { reset } = noteSlice.actions;

export default noteSlice.reducer;
