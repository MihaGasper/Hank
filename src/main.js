import Vue from "vue";
import App from "./components/App.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import ParentRoute from "./components/ParentRoute.vue";
import ChildRoute from "./components/ChildRoute.vue";

//

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: ParentRoute,
      children: [
        {
          path: "child",
          name: "home-child",
          component: ChildRoute
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("--- Global route hook");
  next();
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
