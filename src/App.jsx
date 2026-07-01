import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import BuyCar from './pages/BuyCar';
import SellCar from './pages/SellCar';
import SpareParts from './pages/SpareParts';
import SparePartDetails from './pages/SparePartDetails';
import Batteries from './pages/Batteries';
import BatteryDetails from './pages/BatteryDetails';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCar />} />
        <Route path="/sell" element={<SellCar />} />
        <Route path="/parts" element={<SpareParts />} />
        <Route path="/parts/:id" element={<SparePartDetails />} />
        <Route path="/batteries" element={<Batteries />} />
        <Route path="/batteries/:id" element={<BatteryDetails />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
