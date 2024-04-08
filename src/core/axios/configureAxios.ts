import { AxiosInstance } from "axios";
import authService from "../services/AuthService";

const configureAxios = (axiosInstance: AxiosInstance): void => {
  axiosInstance.interceptors.request.use((config) => {
    const token = authService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        authService.clearToken();
        // Redirect to login page or re-authenticate
      }
      return Promise.reject(error);
    },
  );
};

export default configureAxios;
