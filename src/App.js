import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home'
import Features from '../src/components/Features';
import Landing from '../src/components/Landing';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer'; // Import the Footer
import '../src/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;