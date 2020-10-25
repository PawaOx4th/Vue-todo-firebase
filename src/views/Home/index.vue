<template>
  <div class="home">
    <section class="hero has-background-info is-fullheight ">
      <div class="hero-body ">
        <div class="columns is-vcentered">
          <div class="column is-8">
            <img src="../../assets/img/urban-line-316.png" loanding="lazy" />
          </div>
          <div class="column is-4 form">
            <h1 class="title has-text-white has-text-centered ">Sign in</h1>

            <b-field :message="valid.email.msg" :type="valid.email.type">
              <b-input v-model="email" placeholder="Email"></b-input>
            </b-field>
            <b-field>
              <b-input
                v-model="password"
                placeholder="Password"
                type="password"
                password-reveal
              ></b-input>
            </b-field>

            <b-button
              type="is-success"
              class="mt-5 is-uppercase has-text-weight-medium"
              :disabled="validateInput"
              expanded
            >
              SIGN IN
            </b-button>
            <b-button
              type="is-danger"
              class="btn--google  is-uppercase has-text-weight-medium"
              @click="handleLogIn"
              expanded
            >
              <div class="google-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 49">
                  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g fill="#ffffff" transform="translate(-400.000000, -860.000000)">
                      <path
                        d="M424.337382,879.648515 L424.337382,889.351485 C424.337382,889.351485 433.687756,889.338871 437.49499,889.338871 C435.4333,895.629064 432.227513,899.054455 424.337382,899.054455 C416.352552,899.054455 410.120495,892.538183 410.120495,884.5 C410.120495,876.461817 416.352552,869.945545 424.337382,869.945545 C428.559074,869.945545 431.285584,871.439317 433.786551,873.521332 C435.788481,871.506025 435.621252,871.218817 440.714512,866.376792 C436.390892,862.415069 430.644378,860 424.337382,860 C410.896159,860 400,870.968965 400,884.5 C400,898.030792 410.896159,909 424.337382,909 C444.428252,909 449.338861,891.389109 447.710907,879.648515 L424.337382,879.648515 L424.337382,879.648515 Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <strong class="pl-2"> Google</strong>
            </b-button>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src
import * as fb from "firebase/app";
import { v4 as uuidv4 } from "uuid";

import { db, rdb } from "@/firebase";

const realtimeDB = rdb.ref("Profile");

// const documentPath = "Profile";

export default {
  name: "Home",
  data() {
    return {
      // validateInput: false,
      isLoading: false,
      valid: {
        email: {}
      },
      logoImg: "./../../assets/img/SitReadingDoodle.png",
      dummyProfilePicture:
        "https://images.generated.photos/oYWpxSQdNj8tWOHcfcb07iwZyySSbF5wl5A1nxaSIxw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNzAxNDAuanBn.jpg",
      //
      arrData: [],
      email: "",
      password: "",
      name: "",
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
    },
    validateEmail() {
      return /\S+@\S+\.\S+/.test(this.email);
    },
    validatePassword() {
      return this.password && this.password.length > 8;
    },

    validateInput() {
      return !(this.validateEmail && this.validatePassword);
    }
  },
  watch: {
    validateEmail() {
      if (this.validateEmail) {
        this.valid.email.msg = "";
        this.valid.email.type = "is-success";
      } else {
        this.valid.email.msg = "Please enter the email is format";
        this.valid.email.type = "is-danger";
      }
    }
  },

  mounted() {},
  methods: {
    async handleLogIn() {
      this.isLoading = true;
      const provider = new fb.auth.GoogleAuthProvider();
      await fb
        .auth()
        .signInWithPopup(provider)
        .then(response => {
          this.$store.dispatch("toast/success", `${response.user.displayName} : Login successful`);
          this.$store.dispatch("user/setUser", response);
          this.isLoading = false;
          this.$router.push({ name: "Todo" });
        })
        .catch(error => {
          console.log("Err", error);
        });
    },
    handleCreateMessage() {
      console.log("UUID :", uuidv4());
      realtimeDB
        .push({
          name: this.name,
          id: uuidv4(),
          createdAt: new Date()
        })
        .then(() => {
          this.name = "";
        });
    }
    // success() {
    //   this.$buefy.toast.open({
    //     message: "Something happened correctly!",
    //     type: "is-success"
    //   });
    // }
  }
};
</script>

<style lang="scss">
.home {
  // min-height: 100vh;
  font-family: "Roboto", sans-serif;

  .hero-body {
    .form {
      .btn--google {
        margin-top: 1rem;
        span {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          .google-logo {
            display: flex;
          }
        }
      }
    }
  }
}
</style>
