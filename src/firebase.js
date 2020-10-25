import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database"
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey:process.env.VUE_APP_API_KEY,
  authDomain:process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL:process.env.VUE_APP_DATABASE_URL,
  projectId:process.env.VUE_APP_PROJECT_ID,
  storageBucket:process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.VUE_APP_MESSAGING_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
})


const auth = firebaseApp.auth()

// Firestore Database
const db = firebaseApp.firestore()

// Firebase RealTime Database
const rdb = firebaseApp.database()

// eslint-disable-next-line import/prefer-default-export
export { db, rdb, auth }