import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { One } from './One .jsx'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Two } from './Two.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App  />} />
        <Route path="/one" element={<One  />} />
        <Route path="/two" element={<Two  />} />


      </Routes>
    </Router> 
    
    
  </React.StrictMode>,
)
