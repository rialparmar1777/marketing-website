import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CaseStudies from './components/CaseStudies';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GettingStarted from './components/docs/GettingStarted';
import ApiReference from './components/docs/ApiReference';
import Enterprise from './components/solutions/Enterprise';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Documentation Routes */}
            <Route path="/docs/getting-started" element={<GettingStarted />} />
            <Route path="/docs/api" element={<ApiReference />} />
            {/* Solutions Routes */}
            <Route path="/solutions/enterprise" element={<Enterprise />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;