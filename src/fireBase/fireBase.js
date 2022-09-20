// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD__4nRkUCBRFuPTgyyl_uN4K61VXUJ5JE",
    authDomain: "case5-73c7a.firebaseapp.com",
    projectId: "case5-73c7a",
    storageBucket: "case5-73c7a.appspot.com",
    messagingSenderId: "80589148010",
    appId: "1:80589148010:web:0167bdea56874ea8335f13",
    measurementId: "G-6709KSP66N"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);