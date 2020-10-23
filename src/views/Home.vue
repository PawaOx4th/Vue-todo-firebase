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
        <div class="box  has-background-info-light">
          <div class="columns is-vcentered">
            <div>
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 28 28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
              >
                <!-- Generator: Sketch Beta 3.3.2 (12041) - http://www.bohemiancoding.com/sketch -->
                <title>alert</title>
                <desc>Created with Sketch Beta.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="green"
                  fill-rule="evenodd"
                  sketch:type="MSPage"
                >
                  <g
                    id="Icon-Set-Filled"
                    sketch:type="MSLayerGroup"
                    transform="translate(-364.000000, -882.000000)"
                    fill="#62BFED"
                  >
                    <path
                      d="M388,900 L388,892 C388,886.478 383.522,882 378,882 C372.478,882 368,886.478 368,892 L368,900 L364,908 L375.184,908 C375.597,909.163 376.695,910 378,910 C379.305,910 380.403,909.163 380.816,908 L392,908 L388,900"
                      id="alert"
                      sketch:type="MSShapeGroup"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <span class="has-text-info pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.
            </span>
          </div>
        </div>
        <b-button type="is-primary " @click="handleCreateMessage()">
          {{ `send to database` | capitalize }}
        </b-button>
        <pre>{{ firebaseData }}</pre>
        <hr />
        <div v-for="data of profiles" :key="data['.key']">
          <p class="has-text-primary p-3">{{ data }}</p>
        </div>
      </div>
      <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import * as fb from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import { db, rdb } from "../firebase";

const realtimeDB = rdb.ref("Profile");

// const documentPath = "Profile";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      isLoading: false,
      dummyProfilePicture:
        "https://images.generated.photos/oYWpxSQdNj8tWOHcfcb07iwZyySSbF5wl5A1nxaSIxw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNzAxNDAuanBn.jpg",
      //
      arrData: [],
      firebaseData: null,
      profiles: []
    };
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase();
    }
  },
  firestore() {
    return {
      firebaseData: db.doc("Profile/test")
    };
  },
  firebase: {
    profiles: realtimeDB
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
      const provider = new fb.auth.GoogleAuthProvider();
      const response = await fb.auth().signInWithPopup(provider);
      this.$store.dispatch("user/setUser", response);
      this.isLoading = false;
    },
    handleCreateMessage() {
      console.log("UUID :", uuidv4());
      realtimeDB.push({
        name: "John",
        createdAt: new Date()
      });
    }
  }
};
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #000000;

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
  .box {
    padding: 2rem;
  }
}
</style>
