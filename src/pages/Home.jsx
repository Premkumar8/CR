import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedCars from '../components/FeaturedCars';
import BrowseByCategory from '../components/BrowseByCategory';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCars />
        <BrowseByCategory />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
