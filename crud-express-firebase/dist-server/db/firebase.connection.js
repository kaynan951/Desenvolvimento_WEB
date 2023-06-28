"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAgYv33x6eg-tD5pyDf5dOh47dTZ87LFuk",
  authDomain: "webt03-2023-1-606b5.firebaseapp.com",
  projectId: "webt03-2023-1-606b5",
  storageBucket: "webt03-2023-1-606b5.appspot.com",
  messagingSenderId: "843986445843",
  appId: "1:843986445843:web:3c3c42399c7c1a3da2c1e6"
};
// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);
// getFirestore service
var db = (0, _firestore.getFirestore)(app);
var _default = db;
exports["default"] = _default;