import axios from "axios";

const API_URL = "/api/v1/notes";

// Create note
const create = async (noteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(API_URL, noteData, config);
  console.log(data);

  if (data.statusCode === 200 && data.success) return data.note;
};

// Fetch all notes
const fetchNotes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(API_URL, config);

  if (data.statusCode === 200 && data.success) return data.notes;
};

const noteService = { create, fetchNotes };
export default noteService;
