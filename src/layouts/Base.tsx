import React from 'react';
import { Header } from '@components/Header';

export const Base: React.FC = ({ children }) => (
  <>
    <Header id="header" />
    {children}
  </>
);
