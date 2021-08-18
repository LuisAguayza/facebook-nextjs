import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLbW_zSqzeg1R3H3tQTrpJqA7aocbdvz0",
  authDomain: "feisbuk-react.firebaseapp.com",
  projectId: "feisbuk-react",
  storageBucket: "feisbuk-react.appspot.com",
  messagingSenderId: "741127205650",
  appId: "1:741127205650:web:7e1bff179f87fe7243f9cb",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
