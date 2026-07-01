import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, ShoppingCart, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PARTS } from '../data/partsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SpareParts.css';


const SpareParts = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('sparePartsPage.allCategories') },
    { id: 'engines', label: t('sparePartsPage.engines') },
    { id: 'brakes', label: t('sparePartsPage.brakes') },
    { id: 'suspension', label: t('sparePartsPage.suspension') },
    { id: 'filters', label: t('sparePartsPage.filtersCat') }
  ];

  const filteredParts = MOCK_PARTS.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          part.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="parts-page">
      <Navbar />
      
      <div className="parts-hero">
        <h1 className="parts-title">{t('sparePartsPage.title')}</h1>
        <p className="parts-subtitle">{t('sparePartsPage.subtitle')}</p>
        
        <div className="parts-search">
          <input 
            type="text" 
            className="parts-search-input" 
            placeholder={t('sparePartsPage.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="parts-search-btn">
            <Search size={20} />
          </button>
        </div>
      </div>

      <div className="parts-container">
        <div className="parts-layout">
          {/* Sidebar */}
          <aside className="parts-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">
                <Filter size={18} style={{ marginRight: '8px' }} />
                {t('sparePartsPage.categories')}
              </h3>
              <ul className="category-list">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="sidebar-section" style={{ marginTop: '2rem' }}>
              <h3 className="sidebar-title">{t('sparePartsPage.indianBrandsTitle')}</h3>
              <p className="sidebar-text" style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
                {t('sparePartsPage.indianBrandsDesc')}
              </p>
              <ul className="brand-list">
                <li><span className="brand-badge maruti">{t('sparePartsPage.maruti')}</span></li>
                <li><span className="brand-badge tata">{t('sparePartsPage.tata')}</span></li>
                <li><span className="brand-badge mahindra">{t('sparePartsPage.mahindra')}</span></li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="parts-main">
            {filteredParts.length === 0 ? (
              <div className="no-results">
                <h3>{t('sparePartsPage.noResults')}</h3>
                <button className="reset-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>Reset Filters</button>
              </div>
            ) : (
              <div className="catalog-grid">
                {filteredParts.map(part => (
                  <Link to={`/parts/${part.id}`} key={part.id} className="catalog-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="catalog-card">
                      <div className="catalog-image-wrapper">
                        <img src={part.image} alt={part.name} className="catalog-image" />
                        <div className={`stock-badge ${part.inStock ? 'in-stock' : 'out-of-stock'}`}>
                          {part.inStock ? <CheckCircle size={14} /> : <XCircle size={14} />}
                          <span>{part.inStock ? t('sparePartsPage.inStock') : t('sparePartsPage.outOfStock')}</span>
                        </div>
                      </div>
                      <div className="catalog-content">
                        <span className="catalog-brand">{part.brand}</span>
                        <h3 className="catalog-title">{part.name}</h3>
                        <div className="catalog-footer">
                          <div className="catalog-price">
                            <span className="price-label">{t('sparePartsPage.price')}:</span>
                            <span className="price-amount">₹ {part.price.toLocaleString('en-IN')}</span>
                          </div>
                          <button className="add-to-cart-btn" disabled={!part.inStock}>
                            <ShoppingCart size={18} />
                            <span>{t('sparePartsPage.viewDetails')}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpareParts;
