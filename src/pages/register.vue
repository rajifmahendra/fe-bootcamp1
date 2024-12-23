<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-xl">
      <h2 class="text-2xl font-semibold text-gray-800 text-center">{{ messages.register.title }}</h2>

      <!-- Success Message -->
      <div v-if="registrationSuccess" class="bg-green-50 border-l-4 border-green-400 p-4 mb-4 text-sm text-green-700">
        <strong>{{ messages.register.successMessage }}</strong>
      </div>

      <!-- Error Message -->
      <div v-if="apiError" class="bg-red-50 border-l-4 border-red-400 p-4 mb-4 text-sm text-red-700">
        <strong>{{ apiError }}</strong>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">{{ messages.register.nameLabel }}</label>
          <input v-model="name" id="name" type="text" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your full name" />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">{{ messages.register.emailLabel }}</label>
          <input v-model="email" id="email" type="email" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email" />
          <p v-if="emailError" class="text-red-500 text-sm mt-2">{{ emailError }}</p>
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">{{ messages.register.passwordLabel }}</label>
          <input v-model="password" id="password" type="password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password" />
          <p v-if="passwordError" class="text-red-500 text-sm mt-2">{{ passwordError }}</p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">{{ messages.register.confirmPasswordLabel }}</label>
          <input v-model="confirmPassword" id="confirmPassword" type="password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Confirm your password" />
          <p v-if="confirmPasswordError" class="text-red-500 text-sm mt-2">{{ confirmPasswordError }}</p>
        </div>

        <!-- Submit Button -->
        <div>
          <button type="submit"
            class="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
            {{ messages.register.submitButton }}
          </button>
        </div>
      </form>

      <div class="text-center text-sm text-gray-500">
        {{ messages.register.alreadyHaveAccount }}
        <router-link to="/login" class="text-indigo-600 hover:text-indigo-700">{{ messages.register.loginLink }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { messages } from '../message'; // Import the centralized messages
import { isValidEmail } from '../helpers/helpers'; // Import the helper function

export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      apiError: "", // To store the API error message
      registrationSuccess: false, // To store registration success state
      messages, // Store the messages object
    };
  },
  methods: {
    handleRegister() {
      // Clear previous errors and success message
      this.emailError = "";
      this.passwordError = "";
      this.confirmPasswordError = "";
      this.apiError = "";  // Clear API error message
      this.registrationSuccess = false; // Clear success message

      // Basic validation
      let isValid = true;

      // Validate email using the helper function
      if (!this.email || !isValidEmail(this.email)) {  // Correct usage of isValidEmail
        this.emailError = this.messages.register.emailError;
        isValid = false;
      }

      // Validate password
      if (!this.password || this.password.length < 6) {
        this.passwordError = this.messages.register.passwordError;
        isValid = false;
      }

      // Validate confirm password
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = this.messages.register.confirmPasswordError;
        isValid = false;
      }

      // If everything is valid, submit the form (this is where you can call your API)
      if (isValid) {
        this.registerUser();
      }
    },
    async registerUser() {
      const userData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      // Start loading (show loading spinner or some indication)
      this.$store.dispatch('startLoading');

      try {
        // Make the API request to register the user using Axios
        const response = await this.$axios.post('/api/register', userData);

        if (response.status === 201) {
          // If registration is successful, show success message
          this.registrationSuccess = true;
        }
      } catch (error) {
        console.error("Error during registration:", error);
        if (error.response && error.response.data) {
          // Display error message from API response if available
          this.apiError = error.response.data.message || this.messages.register.apiError;
        } else {
          this.apiError = this.messages.general.networkError;
        }
      } finally {
        // Stop loading after the request is completed (whether success or failure)
        this.$store.dispatch('stopLoading');
      }
    },
  },
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
