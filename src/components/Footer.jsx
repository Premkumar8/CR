import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronUp } from 'lucide-react';
import './Footer.css';

const FbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IgIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const YtIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>;
const LiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-scroll-top" onClick={scrollToTop}>
        <ChevronUp size={24} />
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: INDIAUTO */}
          <div className="footer-col">
            <h4>{t('footer.indiauto')}</h4>
            <ul>
              <li><a href="#">{t('footer.about')}</a></li>
              <li><a href="#">{t('footer.help')}</a></li>
              <li><a href="#">{t('footer.identification')}</a></li>
              <li><a href="#">{t('footer.conditions')}</a></li>
              <li><a href="#">{t('footer.privacy')}</a></li>
              <li><a href="#">{t('footer.privacySettings')}</a></li>
              <li><a href="#">{t('footer.security')}</a></li>
            </ul>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="footer-col">
            <h4>{t('footer.explore')}</h4>
            <ul>
              <li><a href="#">{t('footer.adsByRegion')}</a></li>
              <li><a href="#">{t('footer.makesModels')}</a></li>
              <li><a href="#">{t('footer.allUsedCars')}</a></li>
              <li><a href="#">{t('footer.vehicleTypes')}</a></li>
              <li><a href="#">{t('footer.dealers')}</a></li>
              <li><a href="#">{t('footer.magazine')}</a></li>
              <li><a href="#">{t('footer.valuation')}</a></li>
            </ul>
          </div>

          {/* Column 3: BUSINESS AREA */}
          <div className="footer-col">
            <h4>{t('footer.businessArea')}</h4>
            <ul>
              <li><a href="#">{t('footer.dealerRegistration')}</a></li>
              <li><a href="#">{t('footer.businessPlatform')}</a></li>
              <li><a href="#">{t('footer.multimanagement')}</a></li>
            </ul>
          </div>

          {/* Column 4: INDIAUTO IS PART OF */}
          <div className="footer-col">
            <h4>{t('footer.partOf')}</h4>
            <ul>
              <li><a href="#">CarWale</a></li>
              <li><a href="#">CarDekho</a></li>
              <li><a href="#">Cars24</a></li>
            </ul>
          </div>
        </div>

        {/* Social Section */}
        <div className="footer-social-section">
          <div className="footer-social-title">{t('footer.followUs')}</div>
          <div className="footer-social-icons">
            <a href="#" className="social-icon icon-fb"><FbIcon /></a>
            <a href="#" className="social-icon icon-ig"><IgIcon /></a>
            <a href="#" className="social-icon icon-yt"><YtIcon /></a>
            <a href="#" className="social-icon icon-li"><LiIcon /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
