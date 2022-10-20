import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
      return registration;
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

const firebaseConfig = {
  messagingSenderId: "1099315156429",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// notifications title and body

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
