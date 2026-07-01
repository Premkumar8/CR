import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './EmiCalculator.css';
import { Calculator } from 'lucide-react';

const EmiCalculator = () => {
  const { t } = useTranslation();
  
  // States
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenure, setTenure] = useState(60); // months
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure;
    
    if (p > 0 && r > 0 && n > 0) {
      const calcEmi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(Math.round(calcEmi));
    } else {
      setEmi(0);
    }
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="emi-calculator">
      <div className="emi-header">
        <Calculator size={20} className="emi-icon" />
        <h3>{t('emi.title', 'EMI Calculator')}</h3>
      </div>
      
      <div className="emi-result-card">
        <span className="emi-result-label">{t('emi.monthlyPayment', 'Monthly EMI')}</span>
        <h2 className="emi-result-value">{formatCurrency(emi)}</h2>
        <div className="emi-result-meta">
          <span>{t('emi.totalInterest', 'Total Interest:')} {formatCurrency((emi * tenure) - loanAmount)}</span>
        </div>
      </div>

      <div className="emi-controls">
        <div className="emi-control-group">
          <div className="emi-control-header">
            <label>{t('emi.loanAmount', 'Loan Amount')}</label>
            <span>{formatCurrency(loanAmount)}</span>
          </div>
          <input 
            type="range" 
            min="50000" 
            max="10000000" 
            step="50000"
            value={loanAmount} 
            onChange={(e) => setLoanAmount(Number(e.target.value))} 
            className="emi-slider" 
          />
        </div>

        <div className="emi-control-group">
          <div className="emi-control-header">
            <label>{t('emi.interestRate', 'Interest Rate')}</label>
            <span>{interestRate}% p.a.</span>
          </div>
          <input 
            type="range" 
            min="5" 
            max="20" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))} 
            className="emi-slider" 
          />
        </div>

        <div className="emi-control-group">
          <div className="emi-control-header">
            <label>{t('emi.tenure', 'Loan Tenure')}</label>
            <span>{tenure} {t('emi.months', 'Months')}</span>
          </div>
          <input 
            type="range" 
            min="12" 
            max="84" 
            step="12"
            value={tenure} 
            onChange={(e) => setTenure(Number(e.target.value))} 
            className="emi-slider" 
          />
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
