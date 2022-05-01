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
const fetch = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(API_URL, config);

  if (data.statusCode === 200 && data.success) return data.notes;
};

// Update Notes
const update = async (id, note, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios.put(`${API_URL}/${id}`, note, config);

  const { data } = await axios.get(API_URL, config);
  console.log(data);

  if (data.statusCode === 200 && data.success) return data.notes;
};

const noteService = { create, fetch, update };
export default noteService;
