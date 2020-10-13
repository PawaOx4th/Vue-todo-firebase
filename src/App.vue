<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/font.scss";

#app {
  //   font-family: Avenir, Helvetica, Arial, sans-serif;
  //   font-family: $extend $font-main;
  //   @extend .font-main;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #455054;
}
</style>
