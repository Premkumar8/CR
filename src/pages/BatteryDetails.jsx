import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, XCircle, ShoppingCart, Star, Wrench } from 'lucide-react';
import { MOCK_BATTERIES } from '../data/batteryData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './BatteryDetails.css';

const BatteryDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const batt = MOCK_BATTERIES.find(b => b.id === parseInt(id));
  
  const [activeImage, setActiveImage] = useState(batt?.image);

  if (!batt) {
    return (
      <div className="batt-page">
        <Navbar />
        <div className="not-found-container">
          <h2>Battery not found</h2>
          <Link to="/batteries" className="back-link">
            <ArrowLeft size={16} /> Back to Batteries
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = [batt.image, batt.alternateImage].filter(Boolean);

  return (
    <div className="batt-page">
      <Navbar />
      
      <div className="batt-details-container">
        <Link to="/batteries" className="back-link">
          <ArrowLeft size={16} /> Back to Batteries
        </Link>
        
        <div className="batt-details-layout">
          {/* Left: Image Gallery */}
          <div className="batt-details-gallery">
            <div className="batt-main-image-container">
              <img src={activeImage} alt={batt.name} className="batt-main-image" />
            </div>
            {images.length > 1 && (
              <div className="batt-thumbnail-list">
                {images.map((img, idx) => (
                  <button 
                    key={idx} 
                    className={`batt-thumbnail-btn ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`Angle ${idx + 1}`} className="batt-thumbnail-image" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="batt-details-info">
            <div className="batt-details-header">
              <span className="batt-details-brand">{batt.brand}</span>
              <h1 className="batt-details-title">{batt.name}</h1>
              
              <div className="batt-details-rating">
                <Star size={16} className="star-icon filled" />
                <span>{batt.rating} / 5.0</span>
              </div>
            </div>

            <div className="batt-details-price-section">
              <span className="batt-details-price">₹ {batt.price.toLocaleString('en-IN')}</span>
              <div className={`batt-details-stock ${batt.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {batt.inStock ? <CheckCircle size={16} /> : <XCircle size={16} />}
                <span>{batt.inStock ? t('sparePartsPage.inStock', 'In Stock') : t('sparePartsPage.outOfStock', 'Out of Stock')}</span>
              </div>
            </div>

            <div className="batt-details-description">
              <h3>Description</h3>
              <p>{batt.description}</p>
            </div>

            <div className="batt-details-specs">
              <h3>Specifications</h3>
              <div className="batt-specs-grid">
                <div className="batt-spec-card">
                  <span className="spec-label">{t('batteriesPage.capacity', 'Capacity')}</span>
                  <span className="spec-value">{batt.capacity}</span>
                </div>
                <div className="batt-spec-card">
                  <span className="spec-label">{t('batteriesPage.warranty', 'Warranty')}</span>
                  <span className="spec-value">{batt.warranty}</span>
                </div>
                <div className="batt-spec-card">
                  <span className="spec-label">{t('batteriesPage.cca', 'CCA')}</span>
                  <span className="spec-value">{batt.specs.cca} A</span>
                </div>
                <div className="batt-spec-card">
                  <span className="spec-label">{t('batteriesPage.voltage', 'Voltage')}</span>
                  <span className="spec-value">{batt.specs.voltage}</span>
                </div>
              </div>
              
              <table className="batt-specs-table">
                <tbody>
                  <tr>
                    <td className="batt-spec-key">Dimensions</td>
                    <td className="batt-spec-val">{batt.specs.dimensions}</td>
                  </tr>
                  <tr>
                    <td className="batt-spec-key">Weight</td>
                    <td className="batt-spec-val">{batt.specs.weight}</td>
                  </tr>
                  <tr>
                    <td className="batt-spec-key">Polarity</td>
                    <td className="batt-spec-val">{batt.specs.polarity}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="batt-details-actions">
              <button className="compatibility-btn">
                <Wrench size={20} />
                <span>{t('batteriesPage.compatibility', 'Check Compatibility')}</span>
              </button>
              <button className="batt-checkout-btn" disabled={!batt.inStock}>
                <ShoppingCart size={20} />
                <span>{batt.inStock ? 'Add to Cart' : 'Currently Unavailable'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BatteryDetails;
