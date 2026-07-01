import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, Check } from 'lucide-react';
import './CompareModal.css';

const CompareModal = ({ isOpen, onClose, cars }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const features = ['engine', 'mileage', 'transmission', 'seating'];

  return (
    <div className="compare-overlay">
      <div className="compare-modal">
        <div className="compare-header">
          <h2>{t('compare.title', 'Compare Cars')}</h2>
          <button onClick={onClose} className="compare-close-btn">
            <X size={24} />
          </button>
        </div>

        <div className="compare-content">
          <div className="compare-grid" style={{ gridTemplateColumns: `120px repeat(${cars.length}, 1fr)` }}>
            {/* Header Row (Images & Names) */}
            <div className="compare-cell compare-feature-label empty"></div>
            {cars.map(car => (
              <div key={car.id} className="compare-cell compare-car-header">
                <img src={car.image} alt={car.name} className="compare-car-img" />
                <span className="compare-car-brand">{car.brand}</span>
                <h3 className="compare-car-name">{car.name}</h3>
                <div className="compare-car-price">{car.price}</div>
              </div>
            ))}

            {/* Features Rows */}
            {features.map(feature => (
              <React.Fragment key={feature}>
                <div className="compare-cell compare-feature-label">
                  {t(`compare.${feature}`, feature.charAt(0).toUpperCase() + feature.slice(1))}
                </div>
                {cars.map(car => (
                  <div key={`${car.id}-${feature}`} className="compare-cell compare-value">
                    {car.specs && car.specs[feature] ? car.specs[feature] : '-'}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
