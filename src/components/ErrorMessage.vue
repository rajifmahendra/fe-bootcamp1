<template>
    <p class="text-red-500 text-sm mt-2">{{ message }}</p>
  </template>
  
  <script>
  export default {
    name: "ErrorMessage",
    props: {
      message: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Styling for error message */
  </style>
  