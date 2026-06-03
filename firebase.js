// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARYD5I-VL7NgpV4kCbNjXjusbz2s6EOHY",
    authDomain: "everday-9e93a.firebaseapp.com",
    projectId: "everday-9e93a",
    storageBucket: "everday-9e93a.firebasestorage.app",
    messagingSenderId: "616903818782",
    appId: "1:616903818782:web:06c18e86d647334fee780f",
    measurementId: "G-0N0TV9FZRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
