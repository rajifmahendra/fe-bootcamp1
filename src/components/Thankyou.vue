<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
            <div class="mb-6">
                <!-- Thank You Title -->
                <h1 class="text-3xl font-semibold text-green-500 mb-4">Thank You for Your Purchase!</h1>
                <!-- Order Confirmation Text -->
                <p class="text-lg text-gray-600 mb-6">Your order has been successfully placed. We are processing it and
                    will notify you when it's shipped.</p>

                <!-- Redirect Link -->
                <router-link to="/"
                    class="text-blue-500 hover:text-blue-700 text-sm font-semibold inline-block transition-colors duration-300">
                    Go to Home
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThankYouPage',
};
</script>

<style scoped>
/* General background and layout */
.min-h-screen {
    background-color: #f7fafc;
    /* Soft background for the page */
}

/* Styling for the main card */
.bg-white {
    background-color: #ffffff;
    /* White background for the card */
}

.shadow-xl {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    /* Soft shadow for the card */
}

/* Typography adjustments */
.text-green-500 {
    color: #48bb78;
    /* Custom green color for the heading */
}

.text-gray-600 {
    color: #718096;
    /* Soft gray for the text */
}

.text-blue-500 {
    color: #3182ce;
    /* Blue color for the link */
}

.text-blue-700 {
    color: #2b6cb0;
    /* Darker blue on hover */
}

/* Hover and transition effects for the link */
.hover\:text-blue-700:hover {
    color: #2b6cb0;
}

.transition-colors {
    transition: color 0.3s ease;
}

/* Spacing adjustments */
.mb-4 {
    margin-bottom: 1rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mt-4 {
    margin-top: 1rem;
}
</style>