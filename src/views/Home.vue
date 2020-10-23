<template>
  <div class="home">
    <!--  -->
    <section class="hero has-background-info ">
      <div class="hero-body ">
        <div class="container ">
          <div class="columns is-vcentered">
            <div class="column is-2">
              <b-image
                :src="user_profile ? user_profile : dummyProfilePicture"
                alt="The Buefy Logo"
                class="image "
                ratio="1by1"
                :rounded="true"
              ></b-image>
            </div>
            <div class="column is-8">
              <h1 class="title has-text-white ">
                {{ user_name ? user_name : "Username" }}
              </h1>
              <h2 class="subtitle has-text-white">
                {{ user_email ? user_email : "Email" }}
              </h2>
            </div>
            <div class="column is-1">
              <b-button
                type="is-success"
                size="is-smaill"
                class="btn--login"
                @click="handleLogIn()"
              >
                {{ `singin` | capitalize }}
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <section>
      <div class="container pt-6">
        <div class="box has-background-info-light has-text-info ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.
        </div>
        <b-button type="is-primary " @click="handleCreateMessage()">{{
          `send to database` | capitalize
        }}</b-button>
        <pre></pre>
      </div>
      <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import * as firebase from "firebase/app";
import { v4 as uuidv4 } from "uuid";
// import db from "../firebase";

// console.log("db", db.ref("Profile"));

export default {
  name: "Home",
  components: {},
  data() {
    return {
      isLoading: false,
      //
      dummyProfilePicture:
        "https://images.generated.photos/oYWpxSQdNj8tWOHcfcb07iwZyySSbF5wl5A1nxaSIxw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNzAxNDAuanBn.jpg"
    };
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase();
    }
  },

  computed: {
    user_name() {
      return this.$store.getters["user/getUserName"];
    },
    user_email() {
      return this.$store.getters["user/getUserEmail"];
    },
    user_profile() {
      return this.$store.getters["user/getUserProfiles"];
    }
  },
  mounted() {},
  methods: {
    async handleLogIn() {
      this.isLoading = true;
      const provider = new firebase.auth.GoogleAuthProvider();
      const response = await firebase.auth().signInWithPopup(provider);
      this.$store.dispatch("user/setUser", response);
      this.isLoading = false;
    },
    handleCreateMessage() {
      console.log("UUID :", uuidv4());

      // await this.db.ref(`Profile/${uuidv4()}`).set({
      //   createAt: Date.now(),
      //   data: {
      //     name: "Morris Heak",
      //     age: 30
      //   }
      // });
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
