<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-xl">
      <h2 class="text-2xl font-semibold text-gray-800 text-center">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            v-model="email"
            id="email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input 
            v-model="password"
            id="password"
            type="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>

        <!-- Submit Button -->
        <div>
          <button 
            type="submit"
            class="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            Login
          </button>
        </div>
      </form>
      <button @click="checkEnv">
        test vuex loading
      </button>
      
      <!-- Redirect to Register Page -->
      <div class="text-center text-sm text-gray-500">
        Don't have an account? 
        <router-link to="/register" class="text-indigo-600 hover:text-indigo-700">Sign up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  },
  computed: {
    ...mapState(['isLoading']),  // Map Vuex state to computed property
  },
  methods: {
    handleLogin() {
      let isValid = true;
      if (!this.email || !this.isValidEmail(this.email)) {
        this.emailError = "Please enter a valid email.";
        isValid = false;
      }
      if (!this.password || this.password.length < 6) {
        this.passwordError = "Password must be at least 6 characters.";
        isValid = false;
      }

      if (isValid) {
        console.log("Login successful", { email: this.email, password: this.password });
        this.$router.push('/');
      }
    },
    isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    },
    checkEnv() {
      this.$store.dispatch('startLoading');
      setTimeout(() => {
        console.log(process.env.VITE_API_URL);
        this.$store.dispatch('stopLoading');
      }, 2000);
    },
  },
};
</script>
