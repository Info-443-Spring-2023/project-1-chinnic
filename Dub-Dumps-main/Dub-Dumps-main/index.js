import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './css/style.css'; //import css file!

import bathroom from './data/bathrooms.json'; //the data to display

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={bathroom} />
  </React.StrictMode>  
);