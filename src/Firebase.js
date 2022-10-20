import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBMl9OCIiAYrlOGoTeZJ2N3ipteHUQqNyE",
  authDomain: "mern-stack-bd309.firebaseapp.com",
  projectId: "mern-stack-bd309",
  storageBucket: "mern-stack-bd309.appspot.com",
  messagingSenderId: "1099315156429",
  appId: "1:1099315156429:web:c5c8618df1e96520586084",
  measurementId: "G-782KJZH65M",    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const messaging = getMessaging(app);

// notify permission

function requestPermission() {
  Notification.requestPermission().then((Permission) => {
    if (Permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Notification permission not granted.");
    }
  });
}

requestPermission();

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

getToken(messaging, {
  vapidKey:
    "BEvj8nqSv3ka_uSmCJqqcQW2Rsw_AONezxqGX-vKCfkWlKNCPI-1-pEIty63P-IUUPo6PPpuDEDtam7KwIMJUd0",
})
  .then((token) => {
    if (token) {
      console.log(token);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });
