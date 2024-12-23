<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-xl">
            <h2 class="text-2xl font-semibold text-gray-800 text-center">Register</h2>
            <form @submit.prevent="handleRegister" class="space-y-6">
                <!-- Name -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input v-model="name" id="name" type="text" required
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your full name" />
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="email" id="email" type="email" required
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your email" />
                    <p v-if="emailError" class="text-red-500 text-sm mt-2">{{ emailError }}</p>
                </div>

                <!-- Password -->
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="password" id="password" type="password" required
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your password" />
                    <p v-if="passwordError" class="text-red-500 text-sm mt-2">{{ passwordError }}</p>
                </div>

                <!-- Confirm Password -->
                <div>
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm
                        Password</label>
                    <input v-model="confirmPassword" id="confirmPassword" type="password" required
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Confirm your password" />
                    <p v-if="confirmPasswordError" class="text-red-500 text-sm mt-2">{{ confirmPasswordError }}</p>
                </div>

                <!-- Submit Button -->
                <div>
                    <button type="submit"
                        class="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                        Register
                    </button>
                </div>
            </form>

            <div class="text-center text-sm text-gray-500">
                Already have an account?
                <router-link to="/login" class="text-indigo-600 hover:text-indigo-700">Login</router-link>
            </div>
        </div>
    </div>
</template>

<script>
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
        };
    },
    methods: {
        handleRegister() {
            // Clear previous errors
            this.emailError = "";
            this.passwordError = "";
            this.confirmPasswordError = "";

            // Basic validation
            let isValid = true;

            // Validate email
            if (!this.email || !this.isValidEmail(this.email)) {
                this.emailError = "Please enter a valid email.";
                isValid = false;
            }

            // Validate password
            if (!this.password || this.password.length < 6) {
                this.passwordError = "Password must be at least 6 characters.";
                isValid = false;
            }

            // Validate confirm password
            if (this.password !== this.confirmPassword) {
                this.confirmPasswordError = "Passwords do not match.";
                isValid = false;
            }

            // If everything is valid, submit the form (this is where you can call your API)
            if (isValid) {
                // You can call your registration API here, for example:
                console.log("Registration Successful", { name: this.name, email: this.email, password: this.password });
            }
        },
        isValidEmail(email) {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return regex.test(email);
        },
    },
};
</script>

<style scoped>
/* Scoped styles if needed */
</style>