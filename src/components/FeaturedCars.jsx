import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import './FeaturedCars.css';

const cars = [
  {
    id: 1,
    name: 'Tata Safari',
    brand: 'Tata',
    price: '₹ 16.19 Lakhs',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    type: 'SUV'
  },
  {
    id: 2,
    name: 'Mahindra XUV700',
    brand: 'Mahindra',
    price: '₹ 13.99 Lakhs',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&q=80&w=800',
    type: 'SUV'
  },
  {
    id: 3,
    name: 'Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    price: '₹ 6.49 Lakhs',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    type: 'Hatchback'
  },
  {
    id: 4,
    name: 'Hyundai Verna',
    brand: 'Hyundai',
    price: '₹ 10.96 Lakhs',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
    type: 'Sedan'
  },
  {
    id: 5,
    name: 'Kia Seltos',
    brand: 'Kia',
    price: '₹ 10.90 Lakhs',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800', // Fixed broken image link
    type: 'SUV'
  },
  {
    id: 6,
    name: 'Tata Nexon',
    brand: 'Tata',
    price: '₹ 8.10 Lakhs',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800',
    type: 'Compact SUV'
  }
];

const FeaturedCars = () => {
  const { t } = useTranslation();
  const [carList, setCarList] = React.useState(cars);

  React.useEffect(() => {
    fetch('/api/cars')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setCarList(data);
        }
      })
      .catch(err => console.error('Failed to fetch from DB, using mock data', err));
  }, []);

  return (
    <section className="featured-section">
      <div className="featured-header">
        <div>
          <h2 className="featured-title">{t('featured.title', 'Featured Cars')}</h2>
          <p className="featured-subtitle">Explore top-rated vehicles in the Indian market.</p>
        </div>
        <button className="featured-view-all">
          View All <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="featured-swiper-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="featured-swiper-container"
        >
          {carList.map((car) => (
            <SwiperSlide key={car.id}>
              <Link to={`/car/${car.id}`} className="featured-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="featured-image-container">
                  <div 
                    className="featured-image"
                    style={{ backgroundImage: `url(${car.image})` }}
                  />
                  <div className="featured-badge">{car.type}</div>
                </div>
                
                <div className="featured-content">
                  <div style={{ flex: 1 }}>
                    <p className="featured-brand">{car.brand}</p>
                    <h3 className="featured-name">{car.name}</h3>
                  </div>
                  
                  <div className="featured-footer">
                    <span className="featured-price">{car.price}</span>
                    <button className="featured-details-btn">
                      {t('featured.viewDetails', 'View Details')}
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCars;
