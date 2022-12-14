import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'https://restcountries.com/v2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

