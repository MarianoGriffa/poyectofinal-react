import React from 'react';
import ReactDOM from 'react-dom/client';
import { initFirebase } from './config/firebase';
import App from './App'; 

initFirebase() 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode> 
);
