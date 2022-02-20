import React from 'react';
import Image from 'next/image';

import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import logoBlue from '@public/images/logo-blue.png';

import { Container } from '@components/Container/styles';
import * as Flex from '@components/Flex';
import { useNavigation } from 'hooks/useNavigation';
import * as Styles from './style';

export const Footer: React.FC = () => {
  const { menuActive } = useNavigation();

  return (
    <Styles.Root>
      <div className="links">
        <Container>
          <Flex.Container
            className="link-items"
            alignItems="start"
            justifyContent="center"
            wrap
            gap={0}
          >
            <Flex.Item
              className="logo-footer link-item"
              col={{
                '@initial': 12,
                '@sm': 6,
                '@lg': 3,
              }}
            >
              <a href="#home">
                <Image src={logoBlue} width={200} height={60} />
              </a>

              <div className="footer-text">
                Impossível viver sem, a qualquer hora de qualquer lugar!
              </div>
            </Flex.Item>

            <Flex.Item
              className="link-groups link-item"
              col={{
                '@initial': 12,
                '@sm': 6,
                '@lg': 3,
              }}
            >
              <h3>Contato</h3>

              <ul>
                <li>
                  <i className="fas fa-phone-alt text-primary mr-2" />
                  <FaPhoneAlt /> (77) 9999-9999
                </li>

                <li>
                  <i className="fas fa-envelope text-primary mr-2" />
                  <FaEnvelope /> contato@
                  <span className="text-primary">besttrack.com.br</span>
                </li>
              </ul>
            </Flex.Item>

            <Flex.Item
              className="link-groups link-item"
              col={{
                '@initial': 12,
                '@sm': 6,
                '@lg': 3,
              }}
            >
              <h3>Informações</h3>

              <ul>
                <li>
                  <a href="#">Termos de uso</a>
                </li>
                <li>
                  <a href="#">Código de conduta</a>
                </li>
                <li>
                  <a href="#">Privacidade</a>
                </li>
              </ul>
            </Flex.Item>

            <Flex.Item
              className="link-groups link-item"
              col={{
                '@initial': 12,
                '@sm': 6,
                '@lg': 3,
              }}
            >
              <h3>Navegação</h3>

              <ul>
                {' '}
                <li>
                  <a
                    href="#home"
                    className={menuActive === 'home' ? 'active' : ''}
                  >
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
                    className={
                      menuActive === 'indicate-carrier' ? 'active' : ''
                    }
                  >
                    Indicar Transportadora
                  </a>
                </li>
              </ul>
            </Flex.Item>
          </Flex.Container>
        </Container>
      </div>

      <div className="copyright">
        <Container>
          © 2022 <span>Best Track</span> - Todos os direitos reservados.
        </Container>
      </div>
    </Styles.Root>
  );
};
