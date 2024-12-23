import axios from 'axios';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use the base URL from your environment variables
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
