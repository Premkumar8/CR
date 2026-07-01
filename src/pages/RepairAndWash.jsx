import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, Wrench, Car, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './RepairAndWash.css';

const CAROUSEL_IMAGES = [
  '/images/carousel_wash.png',
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1600'
];

const RepairAndWash = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    serviceType: 'carWash',
    date: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted!');
    // Here you would normally send the data to a backend
  };

  return (
    <div className="rw-page">
      <Navbar />
      
      {/* Promotional Carousel */}
      <div className="rw-carousel-section">
        <div className="rw-carousel">
          {CAROUSEL_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              className={`rw-carousel-slide ${idx === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="rw-carousel-overlay">
                <div className="rw-carousel-content">
                  <h1 className="rw-carousel-title">{t('repairWash.title', 'Premium Car Repair & Wash')}</h1>
                  <p className="rw-carousel-subtitle">{t('repairWash.subtitle', 'Book our professional services today. Exclusive ₹100 Car Wash & Checkup offer running now!')}</p>
                </div>
              </div>
            </div>
          ))}
          
          <button className="rw-carousel-btn left" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="rw-carousel-btn right" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>

          <div className="rw-carousel-indicators">
            {CAROUSEL_IMAGES.map((_, idx) => (
              <button 
                key={idx} 
                className={`rw-indicator ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* NEW: Our Services Section */}
      <div className="rw-services-section">
        <div className="rw-services-container">
          <h2 className="rw-section-title">{t('repairWash.servicesTitle', 'Our Premium Services')}</h2>
          <div className="rw-services-grid">
            <div className="rw-service-card">
              <div className="rw-service-icon"><Sparkles size={32} /></div>
              <h3>{t('repairWash.foamWash', 'Foam Wash & Wax')}</h3>
              <p>{t('repairWash.foamWashDesc', 'Deep cleaning using eco-friendly snow foam and premium wax for a lasting shine.')}</p>
            </div>
            <div className="rw-service-card">
              <div className="rw-service-icon"><Car size={32} /></div>
              <h3>{t('repairWash.interiorDetail', 'Interior Detailing')}</h3>
              <p>{t('repairWash.interiorDetailDesc', 'Complete vacuuming, dashboard polishing, and odor removal.')}</p>
            </div>
            <div className="rw-service-card">
              <div className="rw-service-icon"><Wrench size={32} /></div>
              <h3>{t('repairWash.engineDiag', 'Engine Diagnostics')}</h3>
              <p>{t('repairWash.engineDiagDesc', 'Computerized scanning to identify and fix engine issues quickly.')}</p>
            </div>
            <div className="rw-service-card">
              <div className="rw-service-icon"><ShieldCheck size={32} /></div>
              <h3>{t('repairWash.generalService', 'General Servicing')}</h3>
              <p>{t('repairWash.generalServiceDesc', 'Oil changes, brake inspections, and routine maintenance.')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Why Choose Us / Special Offer Banner */}
      <div className="rw-offer-section">
        <div className="rw-offer-container">
          <div className="rw-offer-content">
            <h2>{t('repairWash.whyChooseUs', 'Why Choose Us')}</h2>
            <ul className="rw-offer-list">
              <li><CheckCircle2 color="#25D366" /> <span>{t('repairWash.certifiedMech', 'Certified Expert Mechanics')}</span></li>
              <li><CheckCircle2 color="#25D366" /> <span>{t('repairWash.genuineParts', '100% Genuine Spare Parts')}</span></li>
              <li className="highlight-offer"><Sparkles color="#f25c05" /> <span>{t('repairWash.specialOffer', 'Special ₹100 Wash Offer - Limited Time!')}</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="rw-booking-section">
        <div className="rw-booking-container">
          <div className="rw-booking-card">
            <h2 className="rw-booking-title">{t('repairWash.bookTitle', 'Book an Appointment')}</h2>
            
            <form onSubmit={handleSubmit} className="rw-form">
              <div className="rw-form-group">
                <label>{t('repairWash.fullName', 'Full Name')}</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  required 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="rw-form-group">
                <label>{t('repairWash.phone', 'Phone Number')}</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange}
                  required 
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="rw-form-group">
                <label>{t('repairWash.vehicle', 'Vehicle Make & Model')}</label>
                <input 
                  type="text" 
                  name="vehicle" 
                  value={formData.vehicle} 
                  onChange={handleInputChange}
                  required 
                  placeholder="e.g. Hyundai i20"
                />
              </div>

              <div className="rw-form-row">
                <div className="rw-form-group">
                  <label>{t('repairWash.serviceType', 'Service Type')}</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleInputChange}>
                    <option value="carWash">{t('repairWash.carWash', 'Car Wash (Offer ₹100)')}</option>
                    <option value="generalRepair">{t('repairWash.generalRepair', 'General Repair')}</option>
                    <option value="fullService">{t('repairWash.fullService', 'Full Service')}</option>
                  </select>
                </div>
                
                <div className="rw-form-group">
                  <label>{t('repairWash.date', 'Preferred Date')}</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              <button type="submit" className="rw-submit-btn">
                {t('repairWash.bookNow', 'Book Now')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating CTA */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="rw-whatsapp-cta"
      >
        <MessageCircle size={28} />
        <span className="rw-whatsapp-text">{t('repairWash.whatsappText', 'Chat with us on WhatsApp')}</span>
      </a>

      <Footer />
    </div>
  );
};

export default RepairAndWash;
