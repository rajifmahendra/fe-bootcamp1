import { createRouter, createWebHistory } from 'vue-router';

// Import the components
import HomeIndex from '../pages/home/index.vue';
import LoginPage from '../pages/login.vue';
import RegisterPage from '../pages/register.vue';
import PageNotFound from '../pages/PageNotFound.vue'; // Assuming you have a 404 page

const routes = [
  {
    path: '/',
    name: 'HomeIndex',
    component: HomeIndex,
    meta: { requiresAuth: true },  // Add this if the route requires authentication
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: { guestOnly: true }, // Only accessible to guests (not logged in)
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: { guestOnly: true }, // Only accessible to guests (not logged in)
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('access_token');  // Check if token exists in localStorage
  
  if (to.meta.guestOnly && isAuthenticated) {
    // If the route requires guests only and the user is authenticated, redirect to home
    return next('/');
  }
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // If the route requires authentication and the user is not authenticated, redirect to login
    return next('/login');
  }

  next();  // Allow the navigation
});

export default router;
