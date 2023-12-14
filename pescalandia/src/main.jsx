import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3N1hJHim7NoulgshgdApWSmtlxL8MAVc",
  authDomain: "pescalandia-b15ee.firebaseapp.com",
  projectId: "pescalandia-b15ee",
  storageBucket: "pescalandia-b15ee.appspot.com",
  messagingSenderId: "200341281800",
  appId: "1:200341281800:web:c0682ecf70cbe67cdd45bd"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
