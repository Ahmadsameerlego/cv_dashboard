
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);


const firebaseConfig = {
   apiKey: "AIzaSyA4jTrF6xymzZAm9ofzX_NPu4mHnrITv9k",
authDomain: "sotam-76bd8.firebaseapp.com",
projectId: "sotam-76bd8",
storageBucket: "sotam-76bd8.appspot.com",
messagingSenderId: "1067680195061",
appId: "1:1067680195061:web:b4b1fdc65f2615997400bc",
measurementId: "G-Z9WCTY7629"
};
    // eslint-disable-next-line
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };



  self.registration.showNotification(notificationTitle, notificationOptions);

});
/* eslint-enable */