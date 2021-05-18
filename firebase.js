import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcXY8iMhXO7zC7ik3pS17JTjbZy509tFA",
  authDomain: "fbclone-a9219.firebaseapp.com",
  projectId: "fbclone-a9219",
  storageBucket: "fbclone-a9219.appspot.com",
  messagingSenderId: "900445523232",
  appId: "1:900445523232:web:fe22fae4a969e752cf5b45",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
