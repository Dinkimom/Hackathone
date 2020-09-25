import React from 'react';
import logo from '../assets/images/logo.svg';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <img src={logo} alt="logo" />
          <div className="header__links">
            <a href="">Стать автором</a>
            <a href="">Пригласить автора</a>
            <button className="primary">Войти</button>
          </div>
        </div>
      </header>
      <div className="header-spacer" />
    </>
  );
};
