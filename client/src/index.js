import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var firebase = require("firebase");
var firebaseConfig = {
  apiKey: "AIzaSyBwbOK97yZ-steeSAE88d_2Bru8ApUwKx0",
  authDomain: "lendahand-16931.firebaseapp.com",
  databaseURL: "https://lendahand-16931.firebaseio.com",
  projectId: "lendahand-16931",
  storageBucket: "lendahand-16931.appspot.com",
  messagingSenderId: "939016591032",
  appId: "1:939016591032:web:ed9cdcbc13374d4257c64d",
  measurementId: "G-1WS7VB7Y8S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
