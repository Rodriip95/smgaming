import firebase from 'firebase/app';
// import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBM9ZoEakrefYJj9hud9JydVAZKcZ1UKoA",
    authDomain: "sanmiguel-gaming.firebaseapp.com",
    projectId: "sanmiguel-gaming",
    storageBucket: "sanmiguel-gaming.appspot.com",
    messagingSenderId: "898298809859",
    appId: "1:898298809859:web:2a2c39c3556c148274c836",
    measurementId: "G-NL4FP9K0K4"
  };

firebase.initializeApp(config)

// export const startFirebase = () => firebase.initializeApp(config)

// export const db = firebase.firestore()