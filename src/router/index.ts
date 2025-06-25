// Composables
import { createRouter, createWebHistory } from "vue-router"; // for local
//import { createRouter, createWebHashHistory } from "vue-router"; // for server

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/main.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // for local
  //history: createWebHashHistory(process.env.BASE_URL), // for server
  routes,
});

export default router;
