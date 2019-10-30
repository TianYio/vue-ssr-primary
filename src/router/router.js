import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/src/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@src/views/About.vue")
  }
];

export function createRouter() {
  return new VueRouter({
    mode: "history",
    routes
  });
}
