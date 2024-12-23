<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-xl">
      <h2 class="text-2xl font-semibold text-gray-800 text-center">{{ messages.login.title }}</h2>

      <!-- Display API error message with Tailwind CSS styles for error -->
      <div v-if="apiError" class="bg-red-50 border-l-4 border-red-400 p-4 mb-4 text-sm text-red-700">
        <strong>{{ apiError }}</strong>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">{{ messages.login.emailLabel }}</label>
          <input v-model="email" id="email" type="email" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email" />
          <ErrorMessage v-if="emailError" :message="emailError" />
        </div>

        <!-- Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">{{ messages.login.passwordLabel
            }}</label>
          <input v-model="password" id="password" type="password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password" />
          <ErrorMessage v-if="passwordError" :message="passwordError" />
        </div>

        <!-- Submit Button -->
        <div>
          <button type="submit"
            class="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
            {{ messages.login.submitButton }}
          </button>
        </div>
      </form>

      <div class="text-center text-sm text-gray-500">
        {{ messages.login.noAccount }}
        <router-link to="/register" class="text-indigo-600 hover:text-indigo-700">
          {{ messages.login.signUpLink }}
        </router-link>
      </div>


    </div>
  </div>
</template>

<script>
import { messages } from '../message'; 
import { mapState } from 'vuex';
import { isValidEmail } from '../helpers/helpers'; 
import ErrorMessage from '@/components/ErrorMessage.vue'; 

export default {
  name: "LoginPage",
  components: {
    ErrorMessage, // Registering the ErrorMessage component
  },
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      apiError: "",
      showSuccessMessage: false,
      messages,
    };
  },
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    async handleLogin() {
      this.resetErrors();

      if (!this.isValidInput()) return;

      const userData = { email: this.email, password: this.password };

      this.$store.dispatch('startLoading');

      try {
        const response = await this.loginRequest(userData);
        this.handleLoginSuccess(response);
      } catch (error) {
        this.handleLoginError(error);
      } finally {
        this.$store.dispatch('stopLoading');
      }
    },

    resetErrors() {
      this.emailError = "";
      this.passwordError = "";
      this.apiError = "";
    },

    isValidInput() {
      let isValid = true;

      if (!this.email || !isValidEmail(this.email)) {
        this.emailError = messages.login.emailError;
        isValid = false;
      }
      if (!this.password || this.password.length < 6) {
        this.passwordError = messages.login.passwordError;
        isValid = false;
      }

      return isValid;
    },

    async loginRequest(userData) {
      try {
        const response = await this.$axios.post('/api/login', userData);
        return response;
      } catch (error) {
        // Handle 401 Unauthorized error with specific message
        if (error.response && error.response.status === 401) {
          throw new Error(error.response.data.message || 'Invalid login details');
        }
        // Handle other errors
        throw error;
      }
    },

    handleLoginSuccess(response) {
      if (response.data.message === 'success') {
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.data));

        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);

        this.$router.push('/');
      }
    },

    handleLoginError(error) {
      console.error("Login error:", error);
      this.apiError = error.message || messages.login.apiError;
    },
  },
};
</script>