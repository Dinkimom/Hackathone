import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container grid">
        <div className="footer__left-column">
          <h4>Контакты</h4>
          <p>Университетская ул., 7, 217, Иннополис, Респ. Татарстан, 420500</p>
        </div>
        <div className="footer__right-column">
          <button className="primary">Связаться с нами</button>
        </div>
      </div>
    </footer>
  );
};
