<script>
import Title from "./Title.vue";
import Subtitle from "./Subtitle.vue";

export default {
  data() {
    return {
      title: "My title",
      fName: 4,
      lName: "ga",
      products: [],
      route: "title",
      showRoute: false,
    };
  },
  computed: {
    isMiha() {
      return String(this.fName).indexOf("miha") !== -1;
    },
    filterdProd() {
      return this.products.filter((p) => p >= 2);
    },
  },
  created() {
    setTimeout(() => {
      this.products = [1, 2, 4];
    }, 1000);
  },
  mounted() {
    //
  },
  components: {
    "app-title": Title,
    "app-subtitle": Subtitle,
  },
  methods: {
    onChangeTitle(payload) {
      this.title = payload.newTitle;
    },
    changeRoute(route) {
      this.route = route;
    },
    goHome() {
      this.$router.push({ name: "home", query: { subtitle: "miha" } });
    },
    nextID() {
      this.$router.replace({
        name: "my-path",
        params: { id: String(parseInt(this.$route.params.id) + 1) },
      });
    },
  },
};
</script>

<template>
  <div id="app">
    <div>APP COMPONENT</div>
    <hr />

    <router-link :to="{ name: 'home' }">Go to parent</router-link>
    <router-link :to="{ name: 'home-child' }">Go to child</router-link>

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>
