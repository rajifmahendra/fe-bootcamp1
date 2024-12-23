import { createRouter, createWebHistory } from 'vue-router';

// Import the components
import HomeIndex from '../pages/home/index.vue';
import LoginPage from '../pages/login.vue';
import RegisterPage from '../pages/register.vue';
import PageNotFound from '../pages/PageNotFound.vue'; // Assuming you have a 404 page

// Import the authentication middleware
import { authMiddleware } from '../middleware/auth';
import Detail from '@/pages/ProductDetail/Detail.vue';

const routes = [
  {
    path: '/',
    name: 'HomeIndex',
    component: HomeIndex,
    meta: { requiresAuth: true },  // This page requires authentication
  },
  {
    path: '/product-detail/:productName',
    name: 'product-detail',
    component: Detail,
    props: true, // Pass route params as props to the component
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: { guestOnly: true }, // This page should only be accessible to guests
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: { guestOnly: true }, // This page should only be accessible to guests
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,  // Fallback for any undefined routes
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Apply the middleware using beforeEach
router.beforeEach(authMiddleware);

export default router;
