import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SellCar.css';

const SellCar = () => {
  const { t } = useTranslation();

  return (
    <div className="sell-page">
      <Navbar />
      
      <div className="sell-hero">
        <h1 className="sell-title">{t('sellCarPage.title')}</h1>
        <p className="sell-subtitle">{t('sellCarPage.subtitle')}</p>
      </div>

      <div className="sell-container">
        <div className="sell-form-card">
          <h2 className="sell-form-title">{t('sellCarPage.formTitle')}</h2>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="sell-form-grid">
              <div className="sell-input-group">
                <label className="sell-label">{t('sellCarPage.make')}</label>
                <select className="sell-input">
                  <option>Select Make</option>
                  <option>Audi</option>
                  <option>BMW</option>
                  <option>Tata</option>
                </select>
              </div>
              <div className="sell-input-group">
                <label className="sell-label">{t('sellCarPage.model')}</label>
                <select className="sell-input">
                  <option>Select Model</option>
                  <option>A4</option>
                  <option>Q5</option>
                  <option>X5</option>
                </select>
              </div>
              <div className="sell-input-group">
                <label className="sell-label">{t('sellCarPage.year')}</label>
                <select className="sell-input">
                  <option>Select Year</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
              </div>
              <div className="sell-input-group">
                <label className="sell-label">{t('carDetails.specs.kilometers')}</label>
                <input type="number" className="sell-input" placeholder="e.g. 15000" />
              </div>
            </div>
            
            <button className="sell-submit-btn">{t('sellCarPage.submit')}</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SellCar;
