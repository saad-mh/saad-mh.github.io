import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // ✅ Make sure this file exists in src/

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
