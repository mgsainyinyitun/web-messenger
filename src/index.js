import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import store from './store';



var firebaseConfig = {
  apiKey: "AIzaSyC8J8n8xCsHVQ9sjuRz4vhN4uwDHqtcHrs",
  authDomain: "web-messenger-sainyi-068390.firebaseapp.com",
  databaseURL: "https://web-messenger-sainyi-068390.firebaseio.com",
  projectId: "web-messenger-sainyi-068390",
  storageBucket: "web-messenger-sainyi-068390.appspot.com",
  messagingSenderId: "1009602292230",
  appId: "1:1009602292230:web:594313587f605bdf147187",
  measurementId: "G-43PWLJJNB1"
};

firebase.initializeApp(firebaseConfig);
window.store = store;


ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
