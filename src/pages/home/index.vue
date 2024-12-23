<template>
    <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
      <section>
        <Banner />
      </section>
      <div class="w-full">
        <!-- Show loading state if `isLoading` is true -->
        <div v-if="isLoading" class="text-center py-8">
          <p>Loading products...</p>
        </div>
  
        <!-- Show products once loaded -->
        <CardProduct :products="products" v-if="!isLoading" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed } from 'vue';
  import { useStore } from 'vuex'; 
  import CardProduct from '@/components/HomeComponents/CardProduct.vue';
  import Banner from '@/components/HomeComponents/Banner.vue';
  import axiosInstance from '@/axios';
  
  export default {
    name: 'HomeIndex',
    components: { CardProduct, Banner },
    setup() {
      const store = useStore(); 
      const products = ref([]);
      const isLoading = computed(() => store.state.isLoading); // Access isLoading state from Vuex
  
      // Fetch data from API when component is mounted
      onMounted(async () => {
        store.dispatch('startLoading'); // Dispatch to start loading
  
        try {
          const { data } = await axiosInstance.get('/api/get-Product'); // Use Axios instance for API request
          if (data.message === 'Products fetched successfully') {
            products.value = data.data;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          store.dispatch('stopLoading'); // Dispatch to stop loading
        }
      });
  
      return { products, isLoading }; // Return reactive variables
    },
  };
  </script>
  