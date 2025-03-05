import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Navbar';
import Home from '../src/Home';
import Features from '../src/Features';
import Landing from '../src/Landing';
import Contact from '../src/Contact';
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
    </Router>
  );
}

export default App;