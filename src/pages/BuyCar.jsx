import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './BuyCar.css';

const MOCK_CARS = [
  {
    id: 1,
    brand: 'Audi',
    name: 'Q5 Sportback S line',
    price: '₹ 53,80,000',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    brand: 'BMW',
    name: 'X5 xDrive30d',
    price: '₹ 75,50,000',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    brand: 'Mercedes-Benz',
    name: 'GLC 300 4MATIC',
    price: '₹ 68,00,000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    brand: 'Tata',
    name: 'Harrier Dark Edition',
    price: '₹ 21,50,000',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    brand: 'Mahindra',
    name: 'XUV700 AX7 L',
    price: '₹ 24,90,000',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    brand: 'Hyundai',
    name: 'Tucson Signature',
    price: '₹ 32,40,000',
    image: 'https://images.unsplash.com/photo-1662991097205-18dd46b8be29?auto=format&fit=crop&q=80&w=800'
  }
];

const BuyCar = () => {
  const { t } = useTranslation();

  return (
    <div className="buy-page">
      <Navbar />
      
      <div className="buy-hero">
        <h1 className="buy-title">{t('buyCarPage.title')}</h1>
        <p className="buy-subtitle">{t('buyCarPage.subtitle')}</p>
      </div>

      <div className="buy-container">
        {/* Sidebar Filters */}
        <div className="buy-sidebar">
          <h2 className="buy-filter-title">{t('buyCarPage.filters')}</h2>
          
          <div className="buy-filter-group">
            <label className="buy-filter-label">{t('hero.search.brand')}</label>
            <select className="buy-filter-select">
              <option>{t('hero.search.any')}</option>
              <option>Audi</option>
              <option>BMW</option>
              <option>Tata</option>
              <option>Mahindra</option>
            </select>
          </div>
          
          <div className="buy-filter-group">
            <label className="buy-filter-label">{t('hero.search.price')}</label>
            <select className="buy-filter-select">
              <option>{t('hero.search.any')}</option>
              <option>Under ₹10 Lakhs</option>
              <option>₹10 - ₹25 Lakhs</option>
              <option>₹25 - ₹50 Lakhs</option>
              <option>Above ₹50 Lakhs</option>
            </select>
          </div>

          <div className="buy-filter-group">
            <label className="buy-filter-label">{t('hero.search.body')}</label>
            <select className="buy-filter-select">
              <option>{t('hero.search.any')}</option>
              <option>{t('categories.suv')}</option>
              <option>{t('categories.sedan')}</option>
              <option>{t('categories.hatchback')}</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div>
          <div className="buy-results-header">
            <span className="buy-results-count">6 {t('buyCarPage.results')}</span>
          </div>

          <div className="buy-grid">
            {MOCK_CARS.map(car => (
              <Link to={`/car/${car.id}`} key={car.id} style={{ textDecoration: 'none' }}>
                <div className="buy-card">
                  <img src={car.image} alt={car.name} className="buy-card-img" />
                  <div className="buy-card-content">
                    <span className="buy-card-brand">{car.brand}</span>
                    <h3 className="buy-card-title">{car.name}</h3>
                    <div className="buy-card-price">{car.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyCar;
