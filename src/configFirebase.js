// import external modules
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASXEItCuOe1fJrofRgNxxRp0fyRgxpQqI",
  authDomain: "et-fashion-7539d.firebaseapp.com",
  databaseURL: "https://et-fashion-7539d.firebaseio.com",
  projectId: "et-fashion-7539d",
  storageBucket: "et-fashion-7539d.appspot.com",
  messagingSenderId: "60132888375",
  appId: "1:60132888375:web:868a06adabb8a0a5b6d4b2",
  measurementId: "G-KKM9Z02WV9"
};

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

const enablePersistence = firebase
  .firestore()
  .enablePersistence()
  .catch(function(err) {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
      console.log(
        "Mensaje: Estas en el modo sin internet, solo 1 pestaña debe ser abierta."
      );
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.log(
        "Mensaje: Estas en el modo sin conexión a internet, este modo solo es compatible con los navegadores web Chrome, Firefox y Safari."
      );
    }
  });

export default enablePersistence;
