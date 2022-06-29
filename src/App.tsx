import React from 'react';
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./pages/home/Home";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login/Login"



function App() {
  return(
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    
    </Routes>
    </div>
    <Footer />
    </Router>
    )
}

export default App;
