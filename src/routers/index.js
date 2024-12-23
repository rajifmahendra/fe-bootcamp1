import { createRouter, createWebHistory } from 'vue-router';

// Import the components
import HomeIndex from '../pages/home/index.vue';
import LoginPage from '../pages/login.vue';
import RegisterPage from '../pages/register.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
    },
  ],
});

export default router;
