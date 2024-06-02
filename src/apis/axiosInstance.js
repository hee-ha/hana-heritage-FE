import axios from "axios";
import { resetTokenAndReattemptRequest } from "../utils/tokenService";

const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "http://127.0.0.1",
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(config.headers.Authorization); //TODO: 지우기
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return resetTokenAndReattemptRequest(error);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
