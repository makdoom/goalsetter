import axios from "axios";

const API_URL = "/api/v1/users/";

// User Register API service
const register = async (userData) => {
  const { data } = await axios.post(API_URL, userData);
  console.log(data);

  if (data.statusCode === 200 && data.success) {
    localStorage.setItem(
      "authUser",
      JSON.stringify({
        email: data.email,
        name: data.name,
        token: data.token,
      })
    );
  }

  return data;
};

const authService = { register };
export default authService;
