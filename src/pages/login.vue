<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-xl">
      <h2 class="text-2xl font-semibold text-gray-800 text-center">{{ messages.login.title }}</h2>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">{{ messages.login.emailLabel }}</label>
          <input v-model="email" id="email" type="email" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email" />
          <p v-if="emailError" class="text-red-500 text-sm mt-2">{{ emailError }}</p>
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">{{ messages.login.passwordLabel }}</label>
          <input v-model="password" id="password" type="password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password" />
          <p v-if="passwordError" class="text-red-500 text-sm mt-2">{{ passwordError }}</p>
        </div>

        <!-- Submit Button -->
        <div>
          <button type="submit"
            class="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
            {{ messages.login.submitButton }}
          </button>
        </div>
      </form>

      <!-- Redirect to Register Page -->
      <div class="text-center text-sm text-gray-500">
        {{ messages.login.noAccount }}
        <router-link to="/register" class="text-indigo-600 hover:text-indigo-700">{{ messages.login.signUpLink }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { messages } from '../message'; // Import messages from message.js
import axios from 'axios'; // Import axios for API calls
import { mapState } from 'vuex';
import { isValidEmail } from '../helpers/helpers'; // Import the helper function


export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      apiError: "",
      showSuccessMessage: false, // To display the success message
      messages, // Store the messages object
    };
  },
  computed: {
    ...mapState(['isLoading']), // Vuex state for loading
  },
  methods: {
    async handleLogin() {
      let isValid = true;
      this.emailError = "";
      this.passwordError = "";
      this.apiError = "";

      // Validate Email and Password
      if (!this.email || !isValidEmail(this.email)) {
        this.emailError = messages.login.emailError;
        isValid = false;
      }
      if (!this.password || this.password.length < 6) {
        this.passwordError = messages.login.passwordError;
        isValid = false;
      }

      if (isValid) {
        this.$store.dispatch('startLoading'); // Show loading spinner

        try {
          const response = await axios.post('api/login', {
            email: this.email,
            password: this.password,
          });

          if (response.data.message === 'success') {
            // Store the access token in localStorage
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.data));

            // Show success message
            this.showSuccessMessage = true;
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3000); // Hide after 3 seconds

            // Redirect user to home
            this.$router.push('/');
          }
        } catch (error) {
          console.error("Login error:", error);
          this.apiError = messages.login.apiError;
        } finally {
          this.$store.dispatch('stopLoading'); // Hide loading spinner
        }
      }
    },
    // // Validate email format
    // isValidEmail(email) {
    //   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //   return regex.test(email);
    // },
  },
};
</script>

<style scoped>
/* Optional: Custom styles for success message */
</style>
