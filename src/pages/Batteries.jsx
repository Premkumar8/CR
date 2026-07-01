import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Search, Zap, Shield, Battery as BatteryIcon, CheckCircle, XCircle } from 'lucide-react';
import { MOCK_BATTERIES } from '../data/batteryData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Batteries.css';

const Batteries = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBatteries = MOCK_BATTERIES.filter(batt => 
    batt.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    batt.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="batt-page">
      <Navbar />
      
      <div className="batt-hero">
        <div className="batt-hero-content">
          <h1 className="batt-title">{t('batteriesPage.title')}</h1>
          <p className="batt-subtitle">{t('batteriesPage.subtitle')}</p>
        </div>
      </div>

      <div className="batt-sticky-finder">
        <div className="batt-finder-container">
          <div className="batt-finder-glass">
            <h2 className="batt-finder-title">
              <Zap size={24} color="#f25c05" />
              {t('batteriesPage.finderTitle')}
            </h2>
            <div className="batt-finder-inputs">
              <input 
                type="text" 
                className="batt-search-input" 
                placeholder="Search by brand or capacity (e.g., Amaron, 65Ah)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select className="batt-select">
                <option>{t('batteriesPage.selectMake')}</option>
                <option>Maruti Suzuki</option>
                <option>Hyundai</option>
                <option>Tata</option>
              </select>
              <select className="batt-select">
                <option>{t('batteriesPage.selectModel')}</option>
                <option>Swift</option>
                <option>i20</option>
                <option>Nexon</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="batt-container">
        <div className="batt-catalog-grid">
          {filteredBatteries.map(batt => (
            <Link to={`/batteries/${batt.id}`} key={batt.id} className="batt-card-link">
              <div className="batt-card">
                <div className="batt-image-wrapper">
                  <img src={batt.image} alt={batt.name} className="batt-image" />
                  <div className={`batt-stock-badge ${batt.inStock ? 'in-stock' : 'out-of-stock'}`}>
                    {batt.inStock ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    <span>{batt.inStock ? t('sparePartsPage.inStock', 'In Stock') : t('sparePartsPage.outOfStock', 'Out of Stock')}</span>
                  </div>
                </div>
                
                <div className="batt-content">
                  <span className="batt-brand">{batt.brand}</span>
                  <h3 className="batt-name">{batt.name}</h3>
                  
                  <div className="batt-highlights">
                    <div className="batt-highlight">
                      <BatteryIcon size={16} className="highlight-icon" />
                      <span>{batt.capacity}</span>
                    </div>
                    <div className="batt-highlight">
                      <Shield size={16} className="highlight-icon" />
                      <span>{batt.warranty}</span>
                    </div>
                  </div>
                  
                  <div className="batt-footer">
                    <div className="batt-price">
                      <span className="price-label">Price:</span>
                      <span className="price-amount">₹ {batt.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button className="batt-view-btn">View Details</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Batteries;
