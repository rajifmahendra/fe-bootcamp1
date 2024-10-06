import { createRouter, createWebHistory } from "vue-router";
import HomeIndex from '../pages/home/index.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "HomeIndex",
			component: HomeIndex,
		},
	],
});

export default router;
