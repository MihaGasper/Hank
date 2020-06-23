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
    console.log(this.$router);

    console.log("created");
    setTimeout(() => {
      this.products = [1, 2, 4];
    }, 1000);
  },
  mounted() {
    console.log("mounted");
  },
  components: {
    "app-title": Title,
    "app-subtitle": Subtitle,
  },
  methods: {
    onChangeTitle(payload) {
      console.log(payload.newTitle);
      this.title = payload.newTitle;
    },
    changeRoute(route) {
      console.log(route);
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
    <!-- <a href @click.prevent="changeRoute('title')">Title</a>
        <a href @click.prevent="changeRoute('subtitle')">Subtitle</a>
        <app-title v-if="route === 'title'"></app-title>
        <app-subtitle v-else-if="route === 'subtitle'"></app-subtitle> -->

    <div>APP COMPONENT</div>

    <button @click="goHome">Go home</button>
    <button @click="nextID">Next ID</button>

    <!-- <button @click.prevent="showRoute = !showRoute">Show route</button> -->

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>
