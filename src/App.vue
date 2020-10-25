<template>
  <div id="app">
    <!--  -->
    <Navbar />
    <!--  -->
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar")
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";

#app {
  font-family: "IntroDemoCondLight";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>
