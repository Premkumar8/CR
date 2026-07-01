import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, XCircle, ShoppingCart, Star } from 'lucide-react';
import { MOCK_PARTS } from '../data/partsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SparePartDetails.css';

const SparePartDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const part = MOCK_PARTS.find(p => p.id === parseInt(id));
  
  const [activeImage, setActiveImage] = useState(part?.image);

  if (!part) {
    return (
      <div className="parts-page">
        <Navbar />
        <div className="not-found-container">
          <h2>Part not found</h2>
          <Link to="/parts" className="back-link">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = [part.image, part.alternateImage].filter(Boolean);

  return (
    <div className="parts-page">
      <Navbar />
      
      <div className="details-container">
        <Link to="/parts" className="back-link">
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
        
        <div className="details-layout">
          {/* Left: Image Gallery */}
          <div className="details-gallery">
            <div className="main-image-container">
              <img src={activeImage} alt={part.name} className="main-image" />
            </div>
            {images.length > 1 && (
              <div className="thumbnail-list">
                {images.map((img, idx) => (
                  <button 
                    key={idx} 
                    className={`thumbnail-btn ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`Angle ${idx + 1}`} className="thumbnail-image" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="details-info">
            <div className="details-header">
              <span className="details-brand">{part.brand}</span>
              <h1 className="details-title">{part.name}</h1>
              
              <div className="details-rating">
                <Star size={16} className="star-icon filled" />
                <span>{part.rating} / 5.0</span>
              </div>
            </div>

            <div className="details-price-section">
              <span className="details-price">₹ {part.price.toLocaleString('en-IN')}</span>
              <div className={`details-stock ${part.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {part.inStock ? <CheckCircle size={16} /> : <XCircle size={16} />}
                <span>{part.inStock ? t('sparePartsPage.inStock', 'In Stock') : t('sparePartsPage.outOfStock', 'Out of Stock')}</span>
              </div>
            </div>

            <div className="details-description">
              <h3>Description</h3>
              <p>{part.description}</p>
            </div>

            <div className="details-specs">
              <h3>Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(part.specs || {}).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-key">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="details-actions">
              <button className="checkout-btn" disabled={!part.inStock}>
                <ShoppingCart size={20} />
                <span>{part.inStock ? 'Add to Cart' : 'Currently Unavailable'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SparePartDetails;
