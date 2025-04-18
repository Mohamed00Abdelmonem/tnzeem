import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TravelMagazine from './pages/TravelMagazine';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import PackageDetail from './pages/PackageDetail';
import Order from './pages/Order'; // Import the new Order component
import SuccessPage from './pages/SuccessPage';


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
          <Route path="destinations/:destinationId/package/:packageName" element={<PackageDetail />} />
          <Route path="order" element={<Order />} /> {/* Add the new route for Order */}
          <Route path="/success" element={<SuccessPage/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;