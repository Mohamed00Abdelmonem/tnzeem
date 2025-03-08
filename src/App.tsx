import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TravelMagazine from './pages/TravelMagazine';
import Destinations from './pages/Destinations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="magazine" element={<TravelMagazine />} />
          <Route path="destinations" element={<Destinations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;