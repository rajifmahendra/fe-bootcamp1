<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
    <!-- Loop through the product data -->
    <div v-for="product in products" :key="product.id"
      class="max-w-sm p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <div class="mb-4">
        <h1 class="text-md font-semibold text-gray-800">{{ product.name }}</h1>
      </div>

      <!-- Product Image -->
      <img :src="product.image" :alt="product.name"
        class="w-[253px] h-[158px] object-cover rounded-lg shadow-md mb-4" />

      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <p class="text-sm text-gray-500">Price</p>
          <p class="text-sm font-semibold text-gray-800">{{ formatCurrency(product.price) }}</p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-sm text-gray-500">Category</p>
          <p class="text-sm font-semibold text-gray-800">{{ product.id_category }}</p>
        </div>
      </div>

      <!-- Action Buttons: Buy & Detail -->
      <div class="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
        <!-- Buy Button -->
        <button @click="handleBuy(product)"
          class="w-full px-2 py-1 bg-green-500 text-white text-sm rounded-sm hover:bg-green-600 transition duration-200">
          Buy
        </button>

        <!-- Detail Button -->
        <router-link :to="{ name: 'product-detail', params: { productName: product.slug } }">
          <button
            class="w-full px-2 py-1 bg-gray-500 text-white text-sm rounded-sm hover:bg-gray-600 transition duration-200">
            Detail
          </button>
        </router-link>
      </div>
    </div>

    <!-- Fallback Message when no products are found -->
    <div v-if="!products.length" class="col-span-full text-center py-10">
      <p class="text-xl text-gray-500">Product not found</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        class="w-16 h-16 mx-auto text-gray-400">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18l-1.5 9H5.5L3 3z" />
        <circle cx="9" cy="18" r="2" stroke="currentColor" stroke-width="2" fill="none" />
        <circle cx="16" cy="18" r="2" stroke="currentColor" stroke-width="2" fill="none" />
      </svg>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from '../../helpers/helpers';
import { showBuyConfirmation } from '@/plugins/swal';

export default {
  name: 'CardProduct',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // Handle the Buy button click
    handleBuy(product) {
      showBuyConfirmation(product, formatCurrency);
    },
    // Handle the details button click
    handleDetails(product) {
      alert(`You selected to view details of: ${product.name}`);
    },
    // Format currency function for use inside this component
    formatCurrency,
  },
};
</script>

<style scoped>
/* Hover effect for product cards */
.max-w-sm:hover {
  transform: translateY(-5px);
}

.max-w-sm {
  transition: transform 0.2s ease-in-out;
}

/* Default image placeholder if no image is available */
img {
  object-fit: cover;
}

/* Customize button styling */
button:hover {
  transform: scale(1.05);
}
</style>
