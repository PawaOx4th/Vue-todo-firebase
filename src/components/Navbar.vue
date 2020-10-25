<template>
  <b-navbar type="has-background-info-light">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        <router-link to="/"> Home</router-link>
      </b-navbar-item>

      <b-navbar-item>
        <router-link to="/todo"> Todo</router-link>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <b-button type="is-danger " @click="SignOut">Sign out</b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import * as fb from "firebase/app";

export default {
  methods: {
    SignOut() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("toast/success", `Log out successfully`);
          this.$router.replace({ name: "Home" });
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
