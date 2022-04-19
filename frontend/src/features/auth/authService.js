import axios from "axios";

const API_URL = "/api/users/";

// user registration
const userRegistration = async (userData) => {
  const { data } = await axios.post(API_URL, userData);

  if (data.statusCode === 200 && data.success) {
    localStorage.setItem("authUser", JSON.stringify(data));
  }

  return data;
};

const authService = { userRegistration };
export default authService;
