import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedCars from '../components/FeaturedCars';
import BrowseByCategory from '../components/BrowseByCategory';
import BrandMarquee from '../components/BrandMarquee';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BrandMarquee />
        <FeaturedCars />
        <BrowseByCategory />
        <Testimonials />
      </main>
      <Footer />

      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="global-whatsapp-cta">
        <MessageCircle size={28} />
        <span className="global-whatsapp-text">{t('repairWash.whatsappText', 'Chat with us on WhatsApp')}</span>
      </a>
    </div>
  );
};

export default Home;
