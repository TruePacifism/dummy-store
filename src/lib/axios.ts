import axios from "axios";
import { useAuthStore } from "@/store/auth";

const instance = axios.create({
  baseURL: "https://dummyjson.com/",
});

instance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().user?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
