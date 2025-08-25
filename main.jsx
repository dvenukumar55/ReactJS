import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './style.css';
import Import from './import.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Import />
  </React.StrictMode>,
);
  
