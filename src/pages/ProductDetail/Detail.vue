<template>
  <div v-if="product" class="max-w-5xl mx-auto py-10">
    <!-- Hero Section: Product Title & Category -->
    <div class="text-center mb-8 bg-gray-50 p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl font-semibold text-gray-800 mb-2">{{ product.name }}</h1>
      <p class="text-lg text-gray-600 mb-4">{{ product.category }}</p>
    </div>

    <!-- Product Details Section: 2-Column Layout -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <!-- Left Column (Image) -->
      <div class="flex justify-center">
        <img :src="product.image" :alt="product.name"
          class="w-full max-w-md h-[350px] object-cover rounded-lg shadow-xl" />
      </div>

      <!-- Right Column (Description, Price, and Action Buttons) -->
      <div>
        <!-- Product Description & Price -->
        <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Product Description</h2>
          <p class="text-lg text-gray-700 mb-4">{{ product.description }}</p>

          <!-- Price with Yellow Badge -->
          <div class="flex items-center mt-8">
            <p class="text-xl text-gray-800 font-semibold mr-4">Price:</p>
            <span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {{ formatCurrency(product.price) }}
            </span>
          </div>
        </div>

        <!-- Action Buttons (Buy Now & Back) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          <!-- Buy Now Button -->
          <button @click="handleBuy(product)"
            class="w-full sm:w-auto px-3 py-1 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 transition duration-200 mb-4 sm:mb-0">
            Buy Now
          </button>

          <!-- Back Button -->
          <button @click="handleBack"
            class="w-full sm:w-auto px-3 py-1 bg-gray-500 text-white text-lg rounded-md hover:bg-gray-600 transition duration-200">
            Back
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="text-center py-10">
    <p class="text-xl text-gray-500">Loading product details...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';  // Import useRouter
import { showBuyConfirmation } from '@/plugins/swal'; 
import axiosInstance from '@/axios';
import { formatCurrency } from '@/helpers/helpers'; 

export default {
  name: 'ProductDetail',
  props: ['productName'], // To get the product name from the route
  setup() {
    const route = useRoute();
    const router = useRouter();  // Initialize the router for navigation
    const product = ref(null);
    const productName = route.params.productName;

    // Fetch product details on mount
    onMounted(async () => {
      try {
        const response = await axiosInstance.get(`/api/detail-product/${productName}`);
        product.value = response.data.data;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    });

    // Handle the Buy Now button click
    const handleBuy = (product) => {
      showBuyConfirmation(product, formatCurrency).then((result) => {
          router.push({ name: 'thank-you' });
      });
    };

    // Handle the Back button click
    const handleBack = () => {
      window.history.back();
    };

    return {
      product,
      formatCurrency,
      handleBuy,
      handleBack,
    };
  },
};
</script>

<style scoped>
/* Customize the card styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Adjust shadow effects */
.shadow-lg {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.shadow-xl {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
}

/* Add hover effect on the Buy Now button */
button:hover {
  transform: scale(1.05);
}

/* Add some spacing to improve readability */
.bg-white {
  background-color: #ffffff;
}

/* Responsive Flexbox Adjustment for Buttons */
@media (max-width: 640px) {
  .flex-col {
    flex-direction: column;
  }

  .sm\\:flex-row {
    flex-direction: row;
  }

  /* Adjust margin and width for the buttons */
  .w-full {
    width: 100%;
  }

  .sm\\:w-auto {
    width: auto;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .sm\\:mb-0 {
    margin-bottom: 0;
  }
}
</style>
