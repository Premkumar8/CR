import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckSquare, Square } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmiCalculator from '../components/EmiCalculator';
import CompareModal from '../components/CompareModal';
import './BuyCar.css';

const MOCK_CARS = [
  {
    id: 1,
    brand: 'Audi',
    name: 'Q5 Sportback S line',
    price: '₹ 53,80,000',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80&w=800',
    specs: { engine: '2.0L TFSI', mileage: '13.4 kmpl', transmission: 'Automatic', seating: '5 Seater' }
  },
  {
    id: 2,
    brand: 'BMW',
    name: 'X5 xDrive30d',
    price: '₹ 75,50,000',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    specs: { engine: '3.0L TwinPower Turbo', mileage: '11.2 kmpl', transmission: 'Automatic', seating: '5 Seater' }
  },
  {
    id: 3,
    brand: 'Mercedes-Benz',
    name: 'GLC 300 4MATIC',
    price: '₹ 68,00,000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    specs: { engine: '2.0L Turbo', mileage: '12.5 kmpl', transmission: 'Automatic', seating: '5 Seater' }
  },
  {
    id: 4,
    brand: 'Tata',
    name: 'Harrier Dark Edition',
    price: '₹ 21,50,000',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800',
    specs: { engine: '2.0L Kryotec', mileage: '16.3 kmpl', transmission: 'Automatic', seating: '5 Seater' }
  },
  {
    id: 5,
    brand: 'Mahindra',
    name: 'XUV700 AX7 L',
    price: '₹ 24,90,000',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    specs: { engine: '2.2L mHawk', mileage: '15.2 kmpl', transmission: 'Automatic', seating: '7 Seater' }
  },
  {
    id: 6,
    brand: 'Hyundai',
    name: 'Tucson Signature',
    price: '₹ 32,40,000',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800',
    specs: { engine: '2.0L Nu', mileage: '14.5 kmpl', transmission: 'Automatic', seating: '5 Seater' }
  }
];

const BuyCar = () => {
  const { t } = useTranslation();
  const [compareList, setCompareList] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const toggleCompare = (car) => {
    if (compareList.find(c => c.id === car.id)) {
      setCompareList(compareList.filter(c => c.id !== car.id));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, car]);
      } else {
        alert(t('compare.maxLimit', 'You can only compare up to 3 cars at a time.'));
      }
    }
  };
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
          <EmiCalculator />

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
            {MOCK_CARS.map(car => {
              const isSelected = compareList.find(c => c.id === car.id);
              
              return (
                <div key={car.id} className={`buy-card ${isSelected ? 'selected-for-compare' : ''}`}>
                  <Link to={`/car/${car.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <img src={car.image} alt={car.name} className="buy-card-img" />
                    <div className="buy-card-content">
                      <span className="buy-card-brand">{car.brand}</span>
                      <h3 className="buy-card-title">{car.name}</h3>
                      <div className="buy-card-price">{car.price}</div>
                    </div>
                  </Link>
                  <div 
                    className="buy-card-compare-action"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleCompare(car);
                    }}
                  >
                    {isSelected ? <CheckSquare size={18} color="#f25c05" /> : <Square size={18} color="#94a3b8" />}
                    <span style={{ color: isSelected ? '#f25c05' : '#64748b' }}>
                      {t('compare.selectBtn', 'Compare')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="global-whatsapp-cta">
        <MessageCircle size={28} />
        <span className="global-whatsapp-text">{t('repairWash.whatsappText', 'Chat with us on WhatsApp')}</span>
      </a>

      {compareList.length > 0 && (
        <div className="compare-floating-bar">
          <div className="compare-floating-content">
            <span className="compare-floating-text">
              {compareList.length} {t('compare.carsSelected', 'cars selected')}
            </span>
            <button 
              className="compare-floating-btn"
              onClick={() => setIsCompareModalOpen(true)}
            >
              {t('compare.compareNow', 'Compare Now')}
            </button>
            <button 
              className="compare-floating-clear"
              onClick={() => setCompareList([])}
            >
              {t('compare.clear', 'Clear')}
            </button>
          </div>
        </div>
      )}

      <CompareModal 
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        cars={compareList}
      />

      <Footer />
    </div>
  );
};

export default BuyCar;
