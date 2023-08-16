import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuiKjLQEHGEp2UGuVx8wQr6WWiOgPcKe0",
  authDomain: "newbk-c95b6.firebaseapp.com",
  projectId: "newbk-c95b6",
  storageBucket: "newbk-c95b6.appspot.com",
  messagingSenderId: "646915804604",
  appId: "1:646915804604:web:b17beaf198e57e7a73afb9"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
