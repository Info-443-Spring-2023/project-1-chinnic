import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { initializeApp } from 'firebase/app';
import App from './Components/App.js';
//import data from './data/bathrooms.json'


// App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsxMGShaG5bL09NPWbASGQHwz_EgxXRMQ",
  authDomain: "dub-dumps-8ef51.firebaseapp.com",
  databaseURL: "https://dub-dumps-8ef51-default-rtdb.firebaseio.com",
  projectId: "dub-dumps-8ef51",
  storageBucket: "dub-dumps-8ef51.appspot.com",
  messagingSenderId: "855023568256",
  appId: "1:855023568256:web:dda6641589273e0f212d65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

fetch("./data/bathrooms.json")
  .then((response) => {
    return response.json();
  })
  .then((data => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App data={data} />
      </React.StrictMode>
    );
  }));





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
