import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Features from '../src/components/Features';
import Landing from '../src/components/Landing';
import Contact from './components/Contact';
import Testimonials from '../src/components/Testimonials';
import Pricing from '../src/components/Pricing';
import Blog from '../src/components/Blog';
import Footer from '../src/components/Footer';
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
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;