// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order'; // Import the Order component
import TravelMagazine from './pages/TravelMagazine';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import PackageDetail from './pages/PackageDetail';
<<<<<<< HEAD
=======
import Order from './pages/Order'; // Import the new Order component
import SuccessPage from './pages/SuccessPage';

>>>>>>> 921b533580e5c1526d58367480b386891e3278fa

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} /> {/* Add the Order route */}
          <Route path="magazine" element={<TravelMagazine />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:id" element={<DestinationDetail />} />
          <Route path="destinations/:destinationId/package/:packageName" element={<PackageDetail />} />
<<<<<<< HEAD
=======
          <Route path="order" element={<Order />} /> {/* Add the new route for Order */}
          <Route path="/success" element={<SuccessPage/>} />

>>>>>>> 921b533580e5c1526d58367480b386891e3278fa
        </Route>
      </Routes>
    </Router>
  );
}

export default App;