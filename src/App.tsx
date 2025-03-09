import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TravelMagazine from './pages/TravelMagazine';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import PackageDetail from './pages/PackageDetail'; // Import the PackageDetail component

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
          <Route path="destinations/:id" element={<DestinationDetail />} />
          <Route path="destinations/:destinationId/package/:packageName" element={<PackageDetail />} /> {/* Add this route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;