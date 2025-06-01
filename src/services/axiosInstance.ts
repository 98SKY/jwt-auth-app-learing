import axios from "axios";
import { logoutAndRedirect } from "./authUtils";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      logoutAndRedirect(); // force logout
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
