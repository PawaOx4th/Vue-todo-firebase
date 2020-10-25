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
  computed: {
    checkUser() {
      return this.$store.getters["user/getUser"];
    }
  },
  mounted() {
    if (!this.checkUser) {
      this.$router.replace({ name: "Home" });
    }
  }
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
