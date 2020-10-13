<template>
  <div class="home">
    <div class="container home">
      <div><img alt="Vue logo" src="../assets/logo.png" /></div>

      <b-button type="is-danger" size="is-medium" class="btn--login" @click="handleLogIn()">
        <ion-icon name="logo-google" class="mr-2"></ion-icon>
        {{ `singin` | capitalize }}
      </b-button>
      <div v-if="profilePicture"><img alt="Vue logo" :src="profilePicture" /></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as firebase from "firebase/app";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      profilePicture: false
    };
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase();
    }
  },
  methods: {
    handleLogIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          console.log(res);
          this.profilePicture = res.user.photoURL;
        });
    }
  }
};
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  color: #fff;
  font-family: "Roboto", sans-serif;

  .btn {
    &--login {
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        //   font-weight: bold;
        font-family: "Roboto", sans-serif;
        letter-spacing: 1.5px;
      }
    }
  }
}
</style>
