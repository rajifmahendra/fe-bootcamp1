import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store';
import axiosInstance from './axios'; // Import the custom Axios instance

const app = createApp(App);

// Set up global properties
app.config.globalProperties.$axios = axiosInstance;  // Now you can use this.$axios anywhere in the app

// Use store and router
app.use(store);  
app.use(router); 

// Mount the app
app.mount('#app');
