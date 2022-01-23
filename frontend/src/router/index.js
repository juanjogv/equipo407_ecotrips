import { createRouter, createWebHistory } from "vue-router";
import Introduction from "../views/Introduction.vue";

const routes = [
	{
		path: "/",
		name: "Introduction",
		component: Introduction,
	},
	{
		path: "/auth",
		name: "AuthForms",
		component: () => import(/* webpackChunkName: "auth" */ "../views/AuthForm.vue"),
	},
	{
		path: "/home",
		name: "Home",
		component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
	},
	{
		path: "/product",
		name: "Product",
		component: () => import(/* webpackChunkName: "home" */ "../views/Product.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
