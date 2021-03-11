// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDMUEGFVNUoPT4f4muN95DElNu-200Q4D4",
  authDomain: "vue-fcm-286ef.firebaseapp.com",
  projectId: "vue-fcm-286ef",
  storageBucket: "vue-fcm-286ef.appspot.com",
  messagingSenderId: "296939962790",
  appId: "1:296939962790:web:29d5c45dc7c89eb5258f67",
  measurementId: "G-EXP2HL0HNZ",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
