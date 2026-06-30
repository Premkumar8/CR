import React from 'react';
import { useTranslation } from 'react-i18next';
import { Car, Globe, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ta' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Car size={32} />
          <span>IndiAuto</span>
        </Link>
        
        <div className="navbar-right">
          <div className="navbar-links">
            <Link to="/buy" className="navbar-link">{t('navbar.buyCar', 'Buy Car')}</Link>
            <Link to="/sell" className="navbar-link">{t('navbar.sellCar', 'Sell Car')}</Link>
            <Link to="/parts" className="navbar-link">{t('navbar.spareParts', 'Spare Parts')}</Link>
            <Link to="/batteries" className="navbar-link">{t('navbar.batteries', 'Batteries')}</Link>
          </div>
          
          <div className="navbar-actions">
            <button className="navbar-action-btn">
              <Heart size={20} />
              <span className="navbar-action-text">{t('navbar.saved', 'Saved')}</span>
            </button>
            <button className="navbar-action-btn">
              <User size={20} />
              <span className="navbar-action-text">{t('navbar.login', 'Login')}</span>
            </button>
            <button 
              onClick={toggleLanguage}
              className="navbar-lang-btn"
            >
              <Globe size={18} />
              <span>{i18n.language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
