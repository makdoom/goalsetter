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

// Login User
const login = async (userData) => {
  const { data } = await axios.post(`${API_URL}login`, userData);

  if (data.statusCode === 200 && data.success) {
    localStorage.setItem("authUser", JSON.stringify(data));
  }

  return data;
};

// Logout User
const logout = async () => {
  localStorage.removeItem("authUser");
};

const authService = { userRegistration, login, logout };
export default authService;
