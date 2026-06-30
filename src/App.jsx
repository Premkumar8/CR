import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import BuyCar from './pages/BuyCar';
import SellCar from './pages/SellCar';
import SpareParts from './pages/SpareParts';
import Batteries from './pages/Batteries';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCar />} />
        <Route path="/sell" element={<SellCar />} />
        <Route path="/parts" element={<SpareParts />} />
        <Route path="/batteries" element={<Batteries />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
