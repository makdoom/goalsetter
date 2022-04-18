import axios from "axios";
import { setError, setLoading, setMessage, setUser } from "./authSlice";

const API_URL = "/api/users/";

export const userRegistration = (userData) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await axios.post(API_URL, userData);

    if (data.statusCode === 200 && data.success) {
      localStorage.setItem("authUser", JSON.stringify(data));
      dispatch(setLoading(false));
      dispatch(setUser(data));
    }
  } catch (error) {
    dispatch(setMessage(error?.response?.data?.error));
    dispatch(setError(true));
    dispatch(setUser(null));
  }
};
