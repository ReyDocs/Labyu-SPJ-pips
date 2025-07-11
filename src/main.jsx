import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Or App.js if you used .js
import './index.css' // <--- THIS LINE IS CRUCIAL!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)