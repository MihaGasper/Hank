import Vue from "vue";
import App from "./components/App.vue";
import Title from "./components/Title.vue";

import Plugin from "./PluginExample.js";

///

// PLUGINS
Vue.use({
  install(Vue) {
    // 1. register global component
    Vue.component("datepicker", {
      template: `<span class="date">This is the datepicker</span>`,
    });

    // 2. Add "global" methods
    Vue.prototype.$getDate = () => {
      return new Date();
    };
  },
});
// Vue.use(Plugin)

Vue.component("app-title", Title);

//

new Vue({
  el: "#app",
  created() {
    this.$getDate();
  },
  template: `
    <div>
    <app-tiel>
      <span>{{ $getDate() }}</span>
    </div>
  `,
  //render: (h) => h(App),
});
