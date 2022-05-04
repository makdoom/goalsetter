import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from "./noteService";

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  searchTerm: "",
  bookmarkedNote: 0,
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

// Delete Note
export const deleteNote = createAsyncThunk(
  "note/deleteNote",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await noteService.remove(id, token);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

// Bookmark Note
export const bookmarkNote = createAsyncThunk(
  "note/bookmarkNote",
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      thunkAPI.rejectWithValue("Hello");
      return await noteService.bookmark(id, token, data);
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
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
    },
    setSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
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
        state.message = "Note added successfully";
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
        state.bookmarkedNote = action.payload.filter(
          (note) => note.isBookmarked
        ).length;
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
        state.message = "Note updated successfully";
      })
      .addCase(updateNote.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.notes = action.payload;
        state.message = "Note deleted successfully";
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(bookmarkNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bookmarkNote.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.notes = action.payload.notes;
        state.bookmarkedNote = action.payload.notes.filter(
          (note) => note.isBookmarked
        ).length;
        state.message = action.payload.message;
      })
      .addCase(bookmarkNote.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const selectNote = (state) => state.note;

export const { reset, setSearch } = noteSlice.actions;

export default noteSlice.reducer;
