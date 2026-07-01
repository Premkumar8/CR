import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote, MapPin } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Rajesh K.",
    location: "Chennai",
    rating: 5,
    textKey: "testimonial1" // We'll translate the text in en.json/ta.json
  },
  {
    id: 2,
    name: "Priya S.",
    location: "Coimbatore",
    rating: 5,
    textKey: "testimonial2"
  },
  {
    id: 3,
    name: "Karthik M.",
    location: "Bangalore",
    rating: 5,
    textKey: "testimonial3"
  }
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{t('home.testimonialsTitle', 'Happy Customers Across South India')}</h2>
          <p className="testimonials-subtitle">{t('home.testimonialsSubtitle', 'See what our community has to say about our premium services.')}</p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((item) => (
            <div key={item.id} className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              
              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#facc15" color="#facc15" />
                ))}
              </div>
              
              <p className="testimonial-text">
                "{t(`home.${item.textKey}`)}"
              </p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{item.name}</span>
                  <span className="author-location">
                    <MapPin size={14} /> {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
