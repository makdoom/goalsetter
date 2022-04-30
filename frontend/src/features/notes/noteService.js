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
  console.log("Note Created", data);
};

const noteService = { create };
export default noteService;
