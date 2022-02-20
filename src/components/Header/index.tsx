import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import logoWhite from '@public/images/logo-white.png';
import logoBlue from '@public/images/logo-blue.png';

import { Container } from '@components/Container/styles';
import { useNavigation } from 'hooks/useNavigation';
import * as Styles from './styles';

type HeaderProps = React.ComponentProps<typeof Styles.Root> & {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className, ...rest }) => {
  const { menuActive, startScrolling } = useNavigation();
  const [menuMobileOpened, setMenuMobileOpened] = useState(false);

  return (
    <Styles.Root
      className={`main-header-container ${className ?? ''} ${
        startScrolling ? 'scrolling' : 'scroll-initial'
      } ${menuMobileOpened ? 'menu-mobile-opened' : ''}`}
      {...rest}
    >
      <Container>
        <Image
          src={startScrolling ? logoBlue : logoWhite}
          width={172}
          height={52}
        />

        <input
          type="checkbox"
          id="menu_mobile_switch"
          onClick={() => {
            setMenuMobileOpened(!menuMobileOpened);
          }}
        />

        <nav>
          <ul>
            <li>
              <a href="#home" className={menuActive === 'home' ? 'active' : ''}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={menuActive === 'about' ? 'active' : ''}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#carriers"
                className={menuActive === 'carriers' ? 'active' : ''}
              >
                Transportadoras
              </a>
            </li>
            <li>
              <a
                href="#indicate-carrier"
                className={menuActive === 'indicate-carrier' ? 'active' : ''}
              >
                Indicar Transportadora
              </a>
            </li>
          </ul>
        </nav>

        <label
          htmlFor="menu_mobile_switch"
          className="menu-mobile-switch-wrapper"
        >
          <div className="icon icon-top" />
          <div className="icon icon-middle" />
          <div className="icon icon-bottom" />
        </label>
      </Container>
    </Styles.Root>
  );
};
