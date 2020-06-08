<script>
export default {
  props: {
    title: {
      type: String,
      default: "Missing title",
    },
  },
  methods: {
    onClick() {
      this.$emit("changeTitle", {
        newTitle: "GOBE",
      });
    },
  },
  created() {
    console.log("TItle created");
  },
  destroyed() {
    console.log("TItle destroeyd");
  },
};
</script>

<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <button @click="onClick">Change title</button>
  </div>
</template>
