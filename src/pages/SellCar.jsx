import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Sparkles, TrendingDown, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SellCar.css';

const MOCK_CHART_DATA = [
  { year: '2021', value: 28 },
  { year: '2022', value: 24 },
  { year: '2023', value: 21.5 },
  { year: '2024 (Now)', value: 18.5 },
  { year: '2025', value: 16 },
  { year: '2026', value: 14 }
];

const SellCar = () => {
  const { t } = useTranslation();
  const [showReport, setShowReport] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReport(true);
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="sell-page">
      <Navbar />
      
      <div className="sell-hero">
        <h1 className="sell-title">{t('sellCarPage.title')}</h1>
        <p className="sell-subtitle">{t('sellCarPage.subtitle')}</p>
      </div>

      <div className="sell-container">
        {!showReport ? (
          <div className="sell-form-card">
            <h2 className="sell-form-title">{t('sellCarPage.formTitle')}</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="sell-form-grid">
                <div className="sell-input-group">
                  <label className="sell-label">{t('sellCarPage.make')}</label>
                  <select className="sell-input" required>
                    <option value="">Select Make</option>
                    <option>Audi</option>
                    <option>BMW</option>
                    <option>Tata</option>
                  </select>
                </div>
                <div className="sell-input-group">
                  <label className="sell-label">{t('sellCarPage.model')}</label>
                  <select className="sell-input" required>
                    <option value="">Select Model</option>
                    <option>A4</option>
                    <option>Q5</option>
                    <option>X5</option>
                  </select>
                </div>
                <div className="sell-input-group">
                  <label className="sell-label">{t('sellCarPage.year')}</label>
                  <select className="sell-input" required>
                    <option value="">Select Year</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                  </select>
                </div>
                <div className="sell-input-group">
                  <label className="sell-label">{t('carDetails.specs.kilometers')}</label>
                  <input type="number" className="sell-input" placeholder="e.g. 15000" required />
                </div>
              </div>
              
              <button type="submit" className="sell-submit-btn">
                <Sparkles size={20} />
                {t('sellCarPage.submit')}
              </button>
            </form>
          </div>
        ) : (
          <div className="ai-report-container">
            <div className="ai-report-header">
              <Sparkles size={32} color="#f25c05" />
              <h2>{t('sellCarPage.aiReportTitle', 'AI Valuation Report')}</h2>
              <button className="recalculate-btn" onClick={() => setShowReport(false)}>
                {t('sellCarPage.recalculate', 'Recalculate')}
              </button>
            </div>
            
            <div className="ai-report-main">
              <div className="ai-value-card">
                <h3>{t('sellCarPage.estValue', 'Estimated Market Value')}</h3>
                <div className="ai-price">₹ 18,50,000</div>
                <p className="ai-price-subtitle">Based on 1,245 similar transactions in your area</p>
              </div>

              <div className="ai-factors-card">
                <h3><Activity size={20} /> {t('sellCarPage.keyFactors', 'Key Market Factors')}</h3>
                <ul className="ai-factors-list">
                  <li className="positive">{t('sellCarPage.factor1', 'High Demand for Make/Model')}</li>
                  <li className="neutral">{t('sellCarPage.factor2', 'Average Depreciation Rate')}</li>
                  <li className="positive">{t('sellCarPage.factor3', 'Excellent Market Conditions')}</li>
                </ul>
              </div>
            </div>

            <div className="ai-chart-card">
              <h3><TrendingDown size={20} /> {t('sellCarPage.depreciationGraph', 'Depreciation Forecast')}</h3>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={MOCK_CHART_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" stroke="#64748b" />
                    <YAxis stroke="#64748b" unit="L" />
                    <Tooltip 
                      formatter={(value) => [`₹${value} Lakhs`, 'Value']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#f25c05" strokeWidth={3} dot={{ r: 6, fill: '#f25c05' }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>

      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="global-whatsapp-cta">
        <MessageCircle size={28} />
        <span className="global-whatsapp-text">{t('repairWash.whatsappText', 'Chat with us on WhatsApp')}</span>
      </a>

      <Footer />
    </div>
  );
};

export default SellCar;
