import React, { FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';

import logoWhite from '@public/images/logo-white.png';
import logoBlue from '@public/images/logo-blue.png';

import { Container } from '@components/Container/styles';
import * as Styles from './styles';

type HeaderProps = React.ComponentProps<typeof Styles.Root> & {
  id: string;
};

export const Header: React.FC<HeaderProps> = ({ id, ...rest }) => {
  const [startScrolling, setStartScrolling] = useState(false);
  const [menuActive, setMenuActive] = useState('home');

  function handleMenuActive(e: FormEvent): void {
    const element = e.currentTarget.getAttribute('href')?.replace('#', '');
    setMenuActive(element ?? '');
  }

  useEffect(() => {
    const element = document.getElementById(id);
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

        element?.classList.add('scrolling');
        element?.classList.remove('scroll-initial');
      } else if (window.scrollY < 1 && startScrolling) {
        setStartScrolling(false);

        element?.classList.add('scroll-initial');
        element?.classList.remove('scrolling');
      }
    };

    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [startScrolling, id]);

  return (
    <Styles.Root id={id} {...rest}>
      <Container>
        <Image
          src={startScrolling ? logoBlue : logoWhite}
          width={172}
          height={52}
        />

        <nav>
          <ul>
            <li>
              <a
                href="#home"
                className={menuActive === 'home' ? 'active' : ''}
                onClick={handleMenuActive}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={menuActive === 'about' ? 'active' : ''}
                onClick={handleMenuActive}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#carriers"
                className={menuActive === 'carriers' ? 'active' : ''}
                onClick={handleMenuActive}
              >
                Transportadoras
              </a>
            </li>
            <li>
              <a
                href="#indicate-carrier"
                className={menuActive === 'indicate-carrier' ? 'active' : ''}
                onClick={handleMenuActive}
              >
                Indicar Transportadora
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </Styles.Root>
  );
};
