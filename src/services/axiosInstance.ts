import axios from "axios";

// Create a new Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8081/api", // your API base URL
});

// Add a request interceptor to attach token
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

export default axiosInstance;
