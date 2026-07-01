import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CarFront, TrainFront, Truck, UtilityPole } from 'lucide-react'; 
import './BrowseByCategory.css';

const BrowseByCategory = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger as soon as even 5% of the section is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const categories = [
    { id: 'suv', name: t('categories.suv'), icon: <Truck size={36} />, count: '240+ Cars' },
    { id: 'sedan', name: t('categories.sedan'), icon: <CarFront size={36} />, count: '180+ Cars' },
    { id: 'hatchback', name: t('categories.hatchback'), icon: <TrainFront size={36} />, count: '320+ Cars' },
    { id: 'muv', name: t('categories.muv'), icon: <UtilityPole size={36} />, count: '90+ Cars' },
  ];

  return (
    <section ref={sectionRef} className="category-section">
      <div className="container mx-auto px-4">
        <div className="category-header">
          <h2 className="category-title">{t('categories.title')}</h2>
          <p className="category-subtitle">
            Find the perfect vehicle that suits your lifestyle and family needs.
          </p>
        </div>
        
        <div className="category-grid">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={`category-card ${isVisible ? 'animate-in' : ''}`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="icon-wrapper">
                {category.icon}
              </div>
              <h3 className="category-name">{category.name}</h3>
              <span className="category-count">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
