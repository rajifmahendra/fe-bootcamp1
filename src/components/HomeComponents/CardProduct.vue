<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
      <!-- Loop through the product data -->
      <div 
        v-for="(product, index) in products" 
        :key="index" 
        class="max-w-sm p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
      >
        <!-- Card Header -->
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-lg font-semibold text-gray-800">{{ product.title }}</h1>
          <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200">Button</button>
        </div>
        
        <!-- Card Image -->
        <div class="mb-4">
          <img :src="product.image" alt="Product Image" class="w-full h-auto rounded-lg shadow-md object-cover" />
        </div>
  
        <!-- Product Info -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <p class="text-sm text-gray-500">Product Price</p>
            <p class="text-sm font-semibold text-gray-800">{{ product.price }}</p>
          </div>
  
          <div class="flex justify-between items-center">
            <p class="text-sm text-gray-500">Product Rating</p>
            <p class="text-sm font-semibold text-green-600">{{ product.rating }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardProducts',
    data() {
      return {
        products: [
          { title: "Product 1", price: "Rp. 1000", rating: "5/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
          { title: "Product 2", price: "Rp. 1500", rating: "4.5/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
          { title: "Product 3", price: "Rp. 1200", rating: "4.8/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
          { title: "Product 4", price: "Rp. 1400", rating: "4.9/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
          { title: "Product 5", price: "Rp. 1300", rating: "4.7/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
          { title: "Product 6", price: "Rp. 1100", rating: "4.6/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
          { title: "Product 7", price: "Rp. 1700", rating: "5/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
          { title: "Product 8", price: "Rp. 1800", rating: "4.3/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
          { title: "Product 9", price: "Rp. 2000", rating: "4.8/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
          { title: "Product 10", price: "Rp. 2200", rating: "4.9/5", image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" }
        ]
      };
    }
  };
  </script>
  