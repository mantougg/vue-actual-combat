import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import InputNumber from "../components/input-number/index.vue";
import Tabs from "../views/my-page/tabs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/input-number",
    name: "InputNumber",
    component: InputNumber,
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
