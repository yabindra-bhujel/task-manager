import axios from "axios";
import { getCookie } from "./apiToken";

const BaseUrl = () => {
  return `http://127.0.0.1:8000/api/`;
};

const instance = axios.create({
  baseURL: BaseUrl(),
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
