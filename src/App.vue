<template>
  <div id="app">
    <!-- Show loading spinner if the isLoading state is true -->
    <LoadingSpinner v-if="isLoading" />

    <!-- Conditionally render the Navbar only if the route is not /login, /register, or the 404 route -->
    <Navbar v-if="$route.path !== '/login' && $route.path !== '/register' && $route.name !== 'PageNotFound' && $route.name !== 'thank-you' " />
    
    <!-- Render the appropriate page for the current route -->
    <RouterView />
  </div>
</template>

<script>
import { mapState } from 'vuex';  // Import mapState to access Vuex state
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

export default {
  name: 'App',
  components: { Navbar, LoadingSpinner },
  computed: {
    ...mapState(['isLoading']),  // Map the isLoading state from Vuex to computed property
  },
};
</script>
