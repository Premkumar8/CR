import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Car, Globe, Heart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ta' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Car size={32} />
          <span>IndiAuto</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="navbar-right">
          <div className="navbar-links">
            <Link to="/buy" className="navbar-link">{t('navbar.buyCar', 'Buy Car')}</Link>
            <Link to="/sell" className="navbar-link">{t('navbar.sellCar', 'Sell Car')}</Link>
            <Link to="/parts" className="navbar-link">{t('navbar.spareParts', 'Spare Parts')}</Link>
            <Link to="/batteries" className="navbar-link">{t('navbar.batteries', 'Batteries')}</Link>
          </div>
          
          <div className="navbar-actions">
            <button className="navbar-action-btn desktop-only">
              <Heart size={20} />
              <span className="navbar-action-text">{t('navbar.saved', 'Saved')}</span>
            </button>
            <button className="navbar-action-btn desktop-only">
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
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <Link to="/buy" className="mobile-nav-link" onClick={closeMobileMenu}>{t('navbar.buyCar', 'Buy Car')}</Link>
            <Link to="/sell" className="mobile-nav-link" onClick={closeMobileMenu}>{t('navbar.sellCar', 'Sell Car')}</Link>
            <Link to="/parts" className="mobile-nav-link" onClick={closeMobileMenu}>{t('navbar.spareParts', 'Spare Parts')}</Link>
            <Link to="/batteries" className="mobile-nav-link" onClick={closeMobileMenu}>{t('navbar.batteries', 'Batteries')}</Link>
            
            <hr className="mobile-divider" />
            
            <button className="mobile-action-btn">
              <Heart size={20} />
              <span>{t('navbar.saved', 'Saved')}</span>
            </button>
            <button className="mobile-action-btn">
              <User size={20} />
              <span>{t('navbar.login', 'Login')}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
