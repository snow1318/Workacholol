import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

// Importing pages (create them next)
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import BrandDeals from './pages/BrandDeals';
import Keyboards from './pages/Keyboards';
import Headsets from './pages/Headsets';
import Speakers from './pages/Speakers';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/BrandDeals" element={<BrandDeals />} />
        <Route path="/Keyboards" element={<Keyboards />} />
        <Route path="/Headsets" element={<Headsets />} />
        <Route path="/Speakers" element={<Speakers />} />
      </Routes>
    </Router>
  );
};

export default App;


