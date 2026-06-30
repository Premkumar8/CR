import React from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, Wrench, Circle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SpareParts.css';

const SpareParts = () => {
  const { t } = useTranslation();

  return (
    <div className="parts-page">
      <Navbar />
      
      <div className="parts-hero">
        <h1 className="parts-title">{t('sparePartsPage.title')}</h1>
        <p className="parts-subtitle">{t('sparePartsPage.subtitle')}</p>
        
        <div className="parts-search">
          <input 
            type="text" 
            className="parts-search-input" 
            placeholder={t('sparePartsPage.searchPlaceholder')}
          />
          <button className="parts-search-btn">Search</button>
        </div>
      </div>

      <div className="parts-container">
        <h2 className="parts-section-title">{t('sparePartsPage.categories')}</h2>
        
        <div className="parts-grid">
          <div className="parts-card">
            <div className="parts-card-icon">
              <Settings size={40} />
            </div>
            <h3 className="parts-card-title">{t('sparePartsPage.engines')}</h3>
          </div>
          
          <div className="parts-card">
            <div className="parts-card-icon">
              <Circle size={40} />
            </div>
            <h3 className="parts-card-title">{t('sparePartsPage.brakes')}</h3>
          </div>
          
          <div className="parts-card">
            <div className="parts-card-icon">
              <Wrench size={40} />
            </div>
            <h3 className="parts-card-title">{t('sparePartsPage.suspension')}</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpareParts;
