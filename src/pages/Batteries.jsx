import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Batteries.css';

const Batteries = () => {
  const { t } = useTranslation();

  return (
    <div className="batt-page">
      <Navbar />
      
      <div className="batt-hero">
        <h1 className="batt-title">{t('batteriesPage.title')}</h1>
        <p className="batt-subtitle">{t('batteriesPage.subtitle')}</p>
      </div>

      <div className="batt-container">
        <div className="batt-finder-card">
          <h2 className="batt-finder-title">{t('batteriesPage.finderTitle')}</h2>
          <div className="batt-finder-grid">
            <div>
              <select className="batt-select">
                <option>{t('batteriesPage.selectMake')}</option>
                <option>Maruti Suzuki</option>
                <option>Hyundai</option>
                <option>Tata</option>
              </select>
            </div>
            <div>
              <select className="batt-select">
                <option>{t('batteriesPage.selectModel')}</option>
                <option>Swift</option>
                <option>i20</option>
                <option>Nexon</option>
              </select>
            </div>
            <div>
              <select className="batt-select">
                <option>Select Fuel Type</option>
                <option>Petrol</option>
                <option>Diesel</option>
              </select>
            </div>
            <button className="batt-submit-btn">{t('batteriesPage.findBattery')}</button>
          </div>
        </div>
      </div>

      <div className="batt-brands-section">
        <h2 className="batt-brands-title">{t('batteriesPage.topBrands')}</h2>
        <div className="batt-brands-grid">
          <div className="batt-brand-card" style={{ color: '#006400' }}>AMARON</div>
          <div className="batt-brand-card" style={{ color: '#dc2626' }}>EXIDE</div>
          <div className="batt-brand-card" style={{ color: '#ea580c' }}>LUMINOUS</div>
          <div className="batt-brand-card" style={{ color: '#2563eb' }}>BOSCH</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Batteries;
