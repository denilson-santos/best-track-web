import React from 'react';
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

  return (
    <Styles.Root
      className={`main-header-container ${className ?? ''}`}
      {...rest}
    >
      <Container>
        <Image
          src={startScrolling ? logoBlue : logoWhite}
          width={172}
          height={52}
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
      </Container>
    </Styles.Root>
  );
};
