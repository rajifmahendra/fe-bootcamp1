<!-- src/components/LoadingSpinner.vue -->
<template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
        <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin">
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner',
};
</script>

<style scoped>
/* Optionally, add specific styles to the spinner */
</style>