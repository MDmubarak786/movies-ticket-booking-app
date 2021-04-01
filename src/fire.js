import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBKQtbETmmQ_0-3di2q3jo5yIqZq0W3KdM",
    authDomain: "movies-booking-site.firebaseapp.com",
    projectId: "movies-booking-site",
    storageBucket: "movies-booking-site.appspot.com",
    messagingSenderId: "1056173213255",
    appId: "1:1056173213255:web:6b2bcccdbce25aa5e31362"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore()