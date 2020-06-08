<script>
import Title from "./Title.vue";

export default {
  // data / reactivity
  props: {
    address: {
      type: String,
    },
  },
  data() {
    return {
      route: 'prices',
      title: "Hello world",
      fname: "Miha",
      lname: "The G",
      products: [],
      age: 0,
      load: true,
    };
  },
  computed: {
    hasAddress() {
      return this.address.indexOf("celovska") !== 1;
    },
    filteredProducts() {
      return this.products.filter((product) => product.length > 4);
    },
  },
  methods: {
    getProductName(id) {
      return this.productData.find((p) => p.id == id).name;
    },
    fetchProducts() {
      setTimeout(() => {
        this.products = ["Telefon", "Komp", "Stol", "Avto-Televizor"];
        this.load = false;
      }, 1000);
    },
    onUpdateTitle({ newTitle }) {
      this.title = newTitle;
    },
  },
  watch: {
    //
  },
  // lifesycle hook
  created() {
    this.fetchProducts();
  },
  mounted() {},
  //
  components: {
    "app-title": Title,
  },
};
</script>

<template>
  <div class="app">
    <app-title
      :title="title"
      @changeTitle="(payload) => onUpdateTitle(payload)"
    ></app-title>


    <a hre @click="chagneRoute('prices')">Prices</a>


    <products v-if="route === 'proudcts'"></products>
    <prices v-if="route === 'price'"></prices>

    <template v-if="load">
      <span>Loading...</span>
      <img />
    </template>
    <template v-if="!load">
      <div v-for="product in gobe" :key="product">
        {{ product }}
      </div>
    </template>

  </div>
</template>
