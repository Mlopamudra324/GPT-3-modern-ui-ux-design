import React from 'react';
import ReactDOM from 'react-dom/client';
// this above line allow us to hook our application to index.html

import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

