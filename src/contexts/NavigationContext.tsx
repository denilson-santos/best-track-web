import React, { createContext, useEffect, useMemo, useState } from 'react';
import { NavigationContextProps } from 'types/NavigationContextProps';

export const NavigationContext = createContext<NavigationContextProps>({
  menuActive: 'home',
  startScrolling: false,
});

export const NavigationContextProvider: React.FC = ({ children }) => {
  const [startScrolling, setStartScrolling] = useState(false);
  const [menuActive, setMenuActive] = useState('home');

  useEffect(() => {
    const sectionTitleHome = document
      .getElementById('home')
      ?.getBoundingClientRect();
    const sectionTitleAbout = document
      .getElementById('about')
      ?.getBoundingClientRect();
    const sectionTitleFeatures = document
      .getElementById('features')
      ?.getBoundingClientRect();
    const sectionTitleCarriers = document
      .getElementById('carriers')
      ?.getBoundingClientRect();
    const sectionTitleIndicateCarrier = document
      .getElementById('indicate-carrier')
      ?.getBoundingClientRect();

    const handleNavigation = (): void => {
      if (sectionTitleHome && window.scrollY - sectionTitleHome.y >= -200) {
        setMenuActive('home');
      }

      if (sectionTitleAbout && window.scrollY - sectionTitleAbout.y >= -200) {
        setMenuActive('about');
      }

      if (
        sectionTitleFeatures &&
        window.scrollY - sectionTitleFeatures.y >= -200
      ) {
        setMenuActive('features');
      }

      if (
        sectionTitleCarriers &&
        window.scrollY - sectionTitleCarriers.y >= -200
      ) {
        setMenuActive('carriers');
      }

      if (
        sectionTitleIndicateCarrier &&
        window.scrollY - sectionTitleIndicateCarrier.y >= -200
      ) {
        setMenuActive('indicate-carrier');
      }

      if (window.scrollY > 1 && !startScrolling) {
        setStartScrolling(true);
      } else if (window.scrollY < 1 && startScrolling) {
        setStartScrolling(false);
      }
    };

    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [startScrolling]);

  const data = useMemo(
    () => ({
      menuActive,
      startScrolling,
    }),
    [menuActive, startScrolling]
  );

  return (
    <NavigationContext.Provider value={data}>
      {children}
    </NavigationContext.Provider>
  );
};
