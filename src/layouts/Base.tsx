import React from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export const Base: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
