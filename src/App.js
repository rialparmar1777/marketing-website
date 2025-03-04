import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Features from './Features';
import Landing from './Landing';
import Contact from './Contact';



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