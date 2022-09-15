import axios from "axios";
const serverUrl = "http://fraud-protection.ecompropeller.com/";
const localHost = "http://localhost:8001/";
const axiosInstance = axios.create({
  baseURL: serverUrl,
});

export default axiosInstance;
