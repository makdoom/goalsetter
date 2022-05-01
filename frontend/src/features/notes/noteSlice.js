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

// Create new note
export const getNotes = createAsyncThunk(
  "note/getNotes",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await noteService.fetch(token);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

// Update Note
export const updateNote = createAsyncThunk(
  "note/updateNote",
  async ({ id, note }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await noteService.update(id, note, token);
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
      })
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.notes = action.payload;
      })
      .addCase(updateNote.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const selectNote = (state) => state.note;

export const { reset } = noteSlice.actions;

export default noteSlice.reducer;
