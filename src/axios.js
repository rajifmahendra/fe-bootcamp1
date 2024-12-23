import axios from 'axios';
import store from '@/store'; // Import the Vuex store directly

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use the base URL from environment variables
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add Axios request interceptor to attach token in Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getters.getAccessToken; // Get the token from Vuex store

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Attach the token to the request
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
