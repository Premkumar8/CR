import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ChevronLeft, ChevronRight, Share2, Heart, 
  Key, Fuel, Settings, GitPullRequest, 
  ChevronDown, ChevronUp, Phone, Mail, Download, ArrowRight
} from 'lucide-react';
import './CarDetails.css';

const mockCarData = {
  id: 1,
  title: "AUDI Q5 SPB SportBack S tronic S line #Tetto",
  price: "₹ 53,80,000",
  images: [
    "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=300", 
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=300",
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=300",
    "https://images.unsplash.com/photo-1541348263662-e06836264be8?auto=format&fit=crop&q=80&w=300"
  ],
  specs: {
    condition: "New",
    fuel: "Hybrid - BS6",
    power: "163 BHP",
    transmission: "Automatic"
  },
  seller: {
    name: "CHENNAI MOTORS LTD.",
    location: "Chennai (TN)",
    responseRate: "78%",
    memberSince: "3 years"
  },
  vehicleInfo: {
    marca: "AUDI",
    modello: "Q5",
    versione: "Q5 35 TDI S tronic S line",
    carburante: "Hybrid (Diesel/Electric)",
    chilometri: "16,919"
  }
};

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState('basicData');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [car, setCar] = useState(mockCarData);

  React.useEffect(() => {
    if (id) {
      fetch(`/api/car?id=${id}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.id) {
            // Map DB flat structure to our nested mock structure
            const mappedCar = {
              id: data.id,
              title: data.name,
              price: data.price,
              images: [data.image, ...mockCarData.images.slice(1)],
              specs: {
                condition: data.condition,
                fuel: data.fuel,
                power: data.power,
                transmission: data.transmission
              },
              seller: {
                name: data.seller_name,
                location: data.seller_location,
                responseRate: data.seller_response,
                memberSince: data.seller_member_since
              },
              vehicleInfo: {
                marca: data.info_marca,
                modello: data.info_modello,
                versione: data.info_versione,
                carburante: data.info_carburante,
                chilometri: data.info_chilometri
              }
            };
            setCar(mappedCar);
          }
        })
        .catch(err => console.error('Failed to fetch from DB, using mock data', err));
    }
  }, [id]);

  return (
    <div className="cd-page">
      <Navbar />
      
      <main className="cd-container">
        {/* Top Bar */}
        <div className="cd-top-bar">
          <button className="cd-back-btn" onClick={() => navigate(-1)}>
            <ChevronLeft size={18} /> {t('carDetails.backToSearch')}
          </button>
          
          <div className="cd-pagination">
            <span>1 / 10177</span>
            <button className="cd-next-btn">
              {t('carDetails.next')} <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="cd-hero-grid">
          {/* Images */}
          <div className="cd-image-gallery">
            <img src={car.images[activeImg]} alt={car.title} className="cd-main-image" />
            <div className="cd-thumbnails">
              {car.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt="thumbnail" 
                  className={`cd-thumbnail ${activeImg === idx ? 'active' : ''}`}
                  onClick={() => setActiveImg(idx)}
                />
              ))}
            </div>
          </div>

          {/* Specs Panel */}
          <div>
            <div className="cd-price-row">
              <h2 className="cd-price">{car.price}</h2>
              <div className="cd-actions">
                <Share2 size={24} className="cd-action-icon" />
                <Heart size={24} className="cd-action-icon" />
              </div>
            </div>

            <div className="cd-specs-grid">
              <div className="cd-spec-item"><Key size={20} /> {car.specs.condition}</div>
              <div className="cd-spec-item"><Fuel size={20} /> {car.specs.fuel}</div>
              <div className="cd-spec-item"><Settings size={20} /> {car.specs.power}</div>
              <div className="cd-spec-item"><GitPullRequest size={20} /> {car.specs.transmission}</div>
            </div>

            <div className="cd-seller-box">
              <div className="cd-seller-label">{t('carDetails.soldBy')}</div>
              <div className="cd-seller-name">{car.seller.name}</div>
              <div className="cd-seller-loc">{car.seller.location}</div>
              <div className="cd-seller-badges">
                <span className="cd-badge cd-badge-green">{car.seller.responseRate}</span>
                <span className="cd-badge cd-badge-purple">{car.seller.memberSince}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar (Sticky) */}
        <div className="cd-action-bar">
          <h1 className="cd-car-title">{car.title}</h1>
          <div className="cd-action-buttons">
            <button className="cd-btn-orange">
              <Phone size={20} /> {t('carDetails.showNumber')}
            </button>
            <button className="cd-btn-orange">
              <Mail size={20} /> {t('carDetails.contact')}
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="cd-content-grid">
          {/* Main Info */}
          <div>
            <h3 className="cd-section-title">{t('carDetails.description')}</h3>
            <div className={`cd-description ${!isDescriptionExpanded ? 'cd-description-collapsed' : ''}`}>
              {car.description}
            </div>
            <button 
              className="cd-read-more" 
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            >
              {isDescriptionExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />} 
              {isDescriptionExpanded ? t('carDetails.showLess', 'SHOW LESS') : t('carDetails.readAll')}
            </button>

            <h3 className="cd-section-title" style={{ marginTop: '2rem' }}>{t('carDetails.vehicleInfo')}</h3>
            <div className="cd-tabs">
              {Object.keys(t('carDetails.tabs', { returnObjects: true })).map(tabKey => (
                <button 
                  key={tabKey}
                  className={`cd-tab ${activeTab === tabKey ? 'active' : ''}`}
                  onClick={() => setActiveTab(tabKey)}
                >
                  {t(`carDetails.tabs.${tabKey}`)}
                </button>
              ))}
            </div>

            <div className="cd-info-grid">
              <div className="cd-info-item">
                <div className="cd-info-label">{t('carDetails.specs.type')}</div>
                <div className="cd-info-value cd-info-value-orange">{car.specs.condition} <ChevronRight size={16} /></div>
              </div>
              <div className="cd-info-item">
                <div className="cd-info-label">{t('carDetails.specs.brand')}</div>
                <div className="cd-info-value">{car.vehicleInfo.marca}</div>
              </div>
              <div className="cd-info-item">
                <div className="cd-info-label">{t('carDetails.specs.model')}</div>
                <div className="cd-info-value">{car.vehicleInfo.modello}</div>
              </div>
              <div className="cd-info-item">
                <div className="cd-info-label">{t('carDetails.specs.version')}</div>
                <div className="cd-info-value">{car.vehicleInfo.versione}</div>
              </div>
              <div className="cd-info-item">
                <div className="cd-info-label">{t('carDetails.specs.fuel')}</div>
                <div className="cd-info-value">{car.vehicleInfo.carburante}</div>
              </div>
              <div className="cd-info-item">
                <div className="cd-info-label">{t('carDetails.specs.kilometers')}</div>
                <div className="cd-info-value">{car.vehicleInfo.chilometri}</div>
              </div>
            </div>
            
            <button className="cd-read-more" style={{ marginTop: '2rem' }}>
              <ChevronDown size={20} /> {t('carDetails.seeAll')}
            </button>

            {/* Vendor Details */}
            <h3 className="cd-section-title" style={{ marginTop: '2rem' }}>{t('carDetails.seller')}</h3>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ width: '100px', height: '100px', backgroundColor: 'white', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ fontSize: '2rem', color: '#9ca3af' }}>🚗</div>
              </div>
              <div>
                <div className="cd-seller-name">{car.seller.name}</div>
                <span className="cd-badge cd-badge-purple" style={{ display: 'inline-block' }}>{car.seller.memberSince}</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="cd-contact-section">
              <h3 className="cd-section-title">{t('carDetails.contactSeller')}</h3>
              
              <div className="cd-contact-checkboxes">
                <label className="cd-checkbox-item"><input type="checkbox" className="hero-checkbox-input"/> {t('carDetails.checkboxes.price')}</label>
                <label className="cd-checkbox-item"><input type="checkbox" className="hero-checkbox-input"/> {t('carDetails.checkboxes.availability')}</label>
                <label className="cd-checkbox-item"><input type="checkbox" className="hero-checkbox-input"/> {t('carDetails.checkboxes.tradeIn')}</label>
                <label className="cd-checkbox-item"><input type="checkbox" className="hero-checkbox-input"/> {t('carDetails.checkboxes.financing')}</label>
                <label className="cd-checkbox-item"><input type="checkbox" className="hero-checkbox-input"/> {t('carDetails.checkboxes.colors')}</label>
              </div>

              <textarea 
                className="cd-textarea"
                defaultValue={t('carDetails.defaultMsg')}
              ></textarea>

              <div className="cd-input-row">
                <div className="cd-input-group">
                  <label className="cd-input-label">{t('carDetails.form.nameLabel')}</label>
                  <input type="text" className="cd-input" placeholder={t('carDetails.form.namePlaceholder')} />
                </div>
                <div className="cd-input-group">
                  <label className="cd-input-label">{t('carDetails.form.emailLabel')}</label>
                  <input type="email" className="cd-input" placeholder={t('carDetails.form.emailPlaceholder')} />
                </div>
              </div>
              <div className="cd-input-row">
                <div className="cd-input-group">
                  <label className="cd-input-label">{t('carDetails.form.phoneLabel')}</label>
                  <input type="tel" className="cd-input" placeholder={t('carDetails.form.phonePlaceholder')} />
                </div>
              </div>

              <div className="cd-privacy">
                <input type="checkbox" style={{ marginTop: '0.25rem' }} />
                <span>
                  {t('carDetails.privacy')}
                </span>
              </div>

              <button className="cd-btn-orange" style={{ width: '100%', maxWidth: '300px' }}>
                <ArrowRight size={20} /> {t('carDetails.form.sendMessage')}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="cd-sidebar-card">
              <img src={car.images[0]} alt="Sidebar banner" className="cd-sidebar-img" />
              <div className="cd-sidebar-content">
                <h4 className="cd-sidebar-title">{t('carDetails.guideTitle')}</h4>
                <p className="cd-sidebar-text">
                  {t('carDetails.guideText')}
                </p>
                <button className="cd-sidebar-btn">{t('carDetails.readReview')}</button>
              </div>
            </div>

            <div style={{ marginTop: '3rem', backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <div style={{ fontWeight: '900', fontSize: '1.5rem', marginBottom: '1rem' }}>
                <span style={{ color: '#dc2626' }}>/</span>GUIDE<span style={{ fontWeight: '800' }}>AUTO</span>
              </div>
              <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {t('carDetails.guideTitle')}
              </p>
              <button className="cd-read-more" style={{ marginBottom: 0 }}>
                <Download size={20} /> {t('carDetails.downloadGuide')}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetails;
