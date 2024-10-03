import './App.css';
import React from 'react';
// import Login from './Components/Login';
import Navbar from './Components/NavBar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from '../src/Components/Login'





function App() {

  const [selectedMenu, setSelectedMenu] = useState(null);

  return (

 <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>

  );
}


export default App;