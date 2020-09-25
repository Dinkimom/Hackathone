import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import './PageWrapper.css';

interface Props {
  children: ReactNode;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212329',
    },
  },
});

export const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="page-wrapper">
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};
