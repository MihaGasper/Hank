import Vue from "vue";
import App from "./components/App.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import ExampleRoute from "./components/ExampleRoute.vue";
import ExampleRoute2 from "./components/ExampleRoute2.vue";

//

new Vue({
  render: (h) => h(App),
  router: new VueRouter({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "home",
        component: {
          render: (h) => h("div", "We are home"),
        },
      },
      {
        path: "/example/:id",
        name: "my-path",
        component: ExampleRoute,
        props: true,
      },
      {
        path: "*",
        name: "404",
        component: {
          render: (h) => h("div", "404 Route component"),
        },
      },
    ],
  }),
}).$mount("#app");
