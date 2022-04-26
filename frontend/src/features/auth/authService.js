import axios from "axios";

const API_URL = "/api/v1/users/";

const register = async (userData) => {
  try {
    const { data } = await axios.post(API_URL, userData);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const authService = { register };
export default authService;
