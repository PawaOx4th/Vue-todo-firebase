import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database"
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDpABYBLw_RlvMHmae4tpQDJL_R85C41bM",
//   authDomain: "illusion-36497.firebaseapp.com",
//   databaseURL: "https://illusion-36497.firebaseio.com",
//   projectId: "illusion-36497",
//   storageBucket: "illusion-36497.appspot.com",
//   messagingSenderId: "211142277848",
//   appId: "1:211142277848:web:7c9356be814238480835ad",
//   measurementId: "G-2Y5GFJ3071"
// };

// firebase.initializeApp(firebaseConfig);


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpABYBLw_RlvMHmae4tpQDJL_R85C41bM",
  authDomain: "illusion-36497.firebaseapp.com",
  databaseURL: "https://illusion-36497.firebaseio.com",
  projectId: "illusion-36497",
  storageBucket: "illusion-36497.appspot.com",
  messagingSenderId: "211142277848",
  appId: "1:211142277848:web:7c9356be814238480835ad",
  measurementId: "G-2Y5GFJ3071"
})

const db = firebaseApp.firestore()
const rdb = firebaseApp.database()

// eslint-disable-next-line import/prefer-default-export
export { db, rdb }