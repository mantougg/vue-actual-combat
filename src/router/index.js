import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import InputNumber from "../views/my-page/input-number.vue";
import Tabs from "../views/my-page/tabs.vue";
import GetDirectiveValue from "../views/my-page/directive-value.vue";
import Menu from "../views/my-page/menu.vue";
import RenderDom from "../views/my-page/render-dom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
    children: [
      {
        path: "",
        name: "InputNumber",
        component: InputNumber,
      },
      {
        path: "tabs",
        name: "Tabs",
        component: Tabs,
      },
      {
        path: "render-dom",
        name: "RenderDom",
        component: RenderDom,
      },
      {
        path: "custom",
        name: "GetDirectiveValue",
        component: GetDirectiveValue,
      },
      {
        path: "input-number",
        name: "InputNumber",
        component: InputNumber,
      },
    ],
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
