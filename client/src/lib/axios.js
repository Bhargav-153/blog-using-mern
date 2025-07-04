import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // ✅ uses the env variable
  withCredentials: true, // optional, only if you're using cookies/auth
});

export default instance;
