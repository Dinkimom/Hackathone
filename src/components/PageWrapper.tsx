import React, { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import './PageWrapper.css';

interface Props {
  children: ReactNode;
}

export const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
