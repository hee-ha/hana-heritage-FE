import axios from "axios";
import { signOut } from "./auth";

export const getAccessToken = () => {
  return localStorage.getItem("jwtToken");
};

export const resetTokenAndReattemptRequest = async (error) => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      signOut();
      return Promise.reject(error);
    }

    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/reissue`,
      { refreshToken },
    );
    const { accessToken } = response.data;
    localStorage.setItem("jwtToken", accessToken);

    error.response.config.headers.Authorization = `Bearer ${accessToken}`;
    return axios(error.response.config);
  } catch (err) {
    signOut();
    return Promise.reject(err);
  }
};
