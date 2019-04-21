import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAX1aup2Rx4j1I5FjrmKZFSBWfNLoa99XM",
  authDomain: "kolachimart.firebaseapp.com",
  databaseURL: "https://kolachimart.firebaseio.com",
  projectId: "kolachimart",
  storageBucket: "kolachimart.appspot.com",
  messagingSenderId: "756851683626"
};
const app = firebase.initializeApp(config);

export const db = app.database();
