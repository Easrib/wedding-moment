// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW0QQABT_pnpNNcYbmSTjtPkt7jRCcPZA",
    authDomain: "wedding-moment-ad9ea.firebaseapp.com",
    projectId: "wedding-moment-ad9ea",
    storageBucket: "wedding-moment-ad9ea.appspot.com",
    messagingSenderId: "864897447568",
    appId: "1:864897447568:web:ce4bbc125e1b4ddf6b8a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;