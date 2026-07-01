import React from 'react';
import { useTranslation } from 'react-i18next';
import { CarFront, TrainFront, Truck, UtilityPole } from 'lucide-react'; 

const BrowseByCategory = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'suv', name: t('categories.suv'), icon: <Truck size={56} className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />, count: '240+ Cars' },
    { id: 'sedan', name: t('categories.sedan'), icon: <CarFront size={56} className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />, count: '180+ Cars' },
    { id: 'hatchback', name: t('categories.hatchback'), icon: <TrainFront size={56} className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />, count: '320+ Cars' },
    { id: 'muv', name: t('categories.muv'), icon: <UtilityPole size={56} className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />, count: '90+ Cars' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white border-t border-border overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-main">{t('categories.title')}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Find the perfect vehicle that suits your lifestyle and family needs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={`group flex flex-col items-center justify-center p-10 bg-background rounded-2xl cursor-pointer border border-transparent hover:border-gray-200 transform transition-all duration-700 ease-out hover:bg-white hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {category.icon}
              <h3 className="text-2xl font-bold text-main mb-2">{category.name}</h3>
              <p className="text-muted font-medium">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
