<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="scss">
@import "./assets/scss/font.scss";
// @import "./assets/scss/global.scss";

#app {
  //   font-family: Avenir, Helvetica, Arial, sans-serif;
  //   font-family: $extend $font-main;
  //   @extend .font-main;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
