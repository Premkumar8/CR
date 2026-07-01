import React from 'react';
import { useTranslation } from 'react-i18next';
import './BrandMarquee.css';

const BRANDS = [
  { name: 'TATA MOTORS', logo: 'https://logos.hunter.io/tatamotors.com' },
  { name: 'MAHINDRA', logo: 'https://logos.hunter.io/mahindra.com' },
  { name: 'MARUTI SUZUKI', logo: '/images/suzuki.svg' },
  { name: 'HYUNDAI', logo: 'https://logos.hunter.io/hyundai.com' },
  { name: 'KIA', logo: 'https://logos.hunter.io/kia.com' },
  { name: 'TOYOTA', logo: 'https://logos.hunter.io/toyota.com' },
  { name: 'HONDA', logo: 'https://logos.hunter.io/honda.com' },
  { name: 'MG MOTORS', logo: 'https://logos.hunter.io/mgmotor.co.in' },
  { name: 'RENAULT', logo: 'https://logos.hunter.io/renault.com' },
  { name: 'VOLKSWAGEN', logo: 'https://logos.hunter.io/vw.com' }
];

const BrandMarquee = () => {
  const { t } = useTranslation();

  return (
    <div className="brand-marquee-section">
      <div className="brand-marquee-header">
        <p>{t('home.brandsTitle', 'Top Brands We Service')}</p>
      </div>
      <div className="brand-marquee-container">
        <div className="brand-marquee-content">
          {BRANDS.map((brand, index) => (
            <div key={`brand-1-${index}`} className="brand-item" title={brand.name}>
              <img src={brand.logo} alt={brand.name} className="brand-logo" loading="lazy" />
            </div>
          ))}
          {/* Duplicate for infinite scroll illusion */}
          {BRANDS.map((brand, index) => (
            <div key={`brand-2-${index}`} className="brand-item" title={brand.name}>
              <img src={brand.logo} alt={brand.name} className="brand-logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
