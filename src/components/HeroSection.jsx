import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import './HeroSection.css'; // Import the custom CSS

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070',
    titleKey: 'hero.slides.cars.title',
    subtitleKey: 'hero.slides.cars.subtitle'
  },
  {
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2070',
    titleKey: 'hero.slides.parts.title',
    subtitleKey: 'hero.slides.parts.subtitle'
  },
  {
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=2070',
    titleKey: 'hero.slides.batteries.title',
    subtitleKey: 'hero.slides.batteries.subtitle'
  },
  {
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=2070',
    titleKey: 'hero.slides.repair.title',
    subtitleKey: 'hero.slides.repair.subtitle'
  }
];

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-wrapper">
      
      {/* Top Section with Background Carousel */}
      <div className="hero-bg-container">
        
        {/* Swiper Background */}
        <div className="swiper-container-absolute">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            style={{ width: '100%', height: '100%' }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} style={{ width: '100%', height: '100%' }}>
                <div 
                  style={{ 
                    width: '100%',
                    height: '100%',
                    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 45%, rgba(242, 92, 5, 0.1) 100%), url("${slide.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                  }}
                >
                  <div className="hero-bg-overlay">
                    <div className="container hero-bg-text-container">
                      <h1 className="hero-title">
                        {t(slide.titleKey)}
                      </h1>
                      <h1 className="hero-subtitle">
                        {t(slide.subtitleKey)}
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Overlapping Search Card */}
      <div className="hero-card-wrapper">
        <div className="hero-card">
          
          {/* Top Row: Checkboxes & Location */}
          <div className="hero-checkbox-row">
            <div className="hero-checkbox-group">
              <label className="hero-checkbox-label">
                <input type="checkbox" className="hero-checkbox-input" />
                <span>USED</span>
              </label>
              <label className="hero-checkbox-label">
                <input type="checkbox" className="hero-checkbox-input" />
                <span>NEW</span>
              </label>
              <label className="hero-checkbox-label">
                <input type="checkbox" className="hero-checkbox-input" />
                <span>KM 0</span>
              </label>
            </div>
            
            <button className="hero-location-btn">
              <MapPin size={18} />
              <span>All India</span>
              <span style={{ color: '#f25c05', marginLeft: '4px' }}>Choose city</span>
            </button>
          </div>

          {/* Middle Row: Dropdowns */}
          <div className="hero-dropdown-row">
            <select className="hero-dropdown">
              <option value="">{t('hero.search.brand').toUpperCase()}</option>
              <option value="maruti">Maruti Suzuki</option>
              <option value="tata">Tata Motors</option>
              <option value="mahindra">Mahindra</option>
            </select>
            
            <select className="hero-dropdown">
              <option value="">ALL MODELS</option>
              <option value="suv">{t('categories.suv')}</option>
              <option value="sedan">{t('categories.sedan')}</option>
            </select>

            <select className="hero-dropdown">
              <option value="">{t('hero.search.price').toUpperCase()}</option>
              <option value="5">₹ 5 Lakhs</option>
              <option value="10">₹ 10 Lakhs</option>
            </select>

            <select className="hero-dropdown">
              <option value="">BODY TYPE</option>
              <option value="suv">SUV</option>
              <option value="sedan">Sedan</option>
              <option value="hatchback">Hatchback</option>
            </select>
          </div>

          {/* Bottom Row: Button & Advanced Search */}
          <div className="hero-action-row">
            <button className="hero-search-btn">
              {t('hero.search.button').toUpperCase()}
            </button>
            
            <button className="hero-advanced-search">
              <SlidersHorizontal size={18} />
              <span>ADVANCED SEARCH</span>
            </button>
          </div>

        </div>
        
        {/* Small Legal Text under the card */}
        <div style={{ textAlign: 'center', marginTop: '1rem', padding: '0 1rem' }}>
           <p style={{ fontSize: '0.75rem', color: '#9ca3af', fontStyle: 'italic' }}>
             Warranty provided exclusively by professional sellers. IndiAuto does not assume responsibility.
           </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
