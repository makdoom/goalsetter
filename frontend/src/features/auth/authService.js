import axios from "axios";

const API_URL = "/api/users/";

// Register user
const registerUser = (userData) => async (dispatch) => {
  const response = await axios.post(API_URL, userData);

  console.log(response);

  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }

  // return response.data;
};

const authService = { registerUser };

export default authService;
