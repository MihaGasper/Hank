export default {
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
};
