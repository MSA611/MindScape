import axios from "axios";

const Base_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
const api = axios.create({
  baseURL: Base_URL,
});

export default api;
