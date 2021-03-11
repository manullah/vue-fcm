import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Initialize Firebase
import firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDMUEGFVNUoPT4f4muN95DElNu-200Q4D4",
  authDomain: "vue-fcm-286ef.firebaseapp.com",
  projectId: "vue-fcm-286ef",
  storageBucket: "vue-fcm-286ef.appspot.com",
  messagingSenderId: "296939962790",
  appId: "1:296939962790:web:29d5c45dc7c89eb5258f67",
  measurementId: "G-EXP2HL0HNZ",
});

navigator.serviceWorker
  .register("firebase-messaging-sw.js", {
    scope: "firebase-cloud-messaging-push-scope",
  })
  .then((registration) => {
    const messaging = firebase.messaging();
    messaging.useServiceWorker(registration);
  })
  .catch((err) => {
    console.log(err);
  });
// fiebase configs end

// Vue Toast
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
Vue.use(VueToast);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
