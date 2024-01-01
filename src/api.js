import axios from "axios";
import { DB_URL } from "./config";

const api = axios.create({
  baseURL: DB_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;