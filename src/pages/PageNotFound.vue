<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-gray-700">404</h1>
        <p class="text-xl text-gray-500 mt-4">Page Not Found</p>
        <router-link to="/" class="mt-6 inline-block text-indigo-600 hover:text-indigo-700">Go back to Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageNotFound',
  };
  </script>
  
  <style scoped>
  /* Custom styles for the 404 page (optional) */
  </style>
  