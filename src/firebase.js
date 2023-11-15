// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// import '../public/firebase-messaging-sw'

const firebaseConfig = {
    apiKey: "AIzaSyA4jTrF6xymzZAm9ofzX_NPu4mHnrITv9k",
authDomain: "sotam-76bd8.firebaseapp.com",
projectId: "sotam-76bd8",
storageBucket: "sotam-76bd8.appspot.com",
messagingSenderId: "1067680195061",
appId: "1:1067680195061:web:b4b1fdc65f2615997400bc",
measurementId: "G-Z9WCTY7629"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('../public/firebase-messaging-sw');
//   });
// }