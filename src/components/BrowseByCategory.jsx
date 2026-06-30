import React from 'react';
import { useTranslation } from 'react-i18next';
import { CarFront, TrainFront, Truck, UtilityPole } from 'lucide-react'; 

const BrowseByCategory = () => {
  const { t } = useTranslation();

  const categories = [
    { id: 'suv', name: t('categories.suv'), icon: <Truck size={56} className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />, count: '240+ Cars' },
    { id: 'sedan', name: t('categories.sedan'), icon: <CarFront size={56} className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />, count: '180+ Cars' },
    { id: 'hatchback', name: t('categories.hatchback'), icon: <TrainFront size={56} className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />, count: '320+ Cars' },
    { id: 'muv', name: t('categories.muv'), icon: <UtilityPole size={56} className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />, count: '90+ Cars' },
  ];

  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-main">{t('categories.title')}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Find the perfect vehicle that suits your lifestyle and family needs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group flex flex-col items-center justify-center p-10 bg-background rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-200"
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
