import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
import { GoSearch, GoX } from 'react-icons/go';

import { Container } from '@components/Container';
import { Button } from '@components/Button';

import * as Styles from '@styles/index';

import logoWhite from '@public/images/logo-white.png';
import logoBlue from '@public/images/logo-blue.png';

const Home: NextPage = () => {
  const [y, setY] = useState(0);

  const handleNavigation = (): void => {
    setY(window.scrollY);

    const element = document.getElementById('header');

    if (element) {
      if (window.scrollY > 80) {
        element.classList.add('scroll-down');
        element.classList.remove('scroll-up');
      } else {
        element.classList.add('scroll-up');
        element.classList.remove('scroll-down');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Best Track - Home</title>
        <meta name="description" content="Best Track" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Header id="header">
        <Container>
          <Image src={y ? logoBlue : logoWhite} width={172} height={52} />

          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Transportadoras</a>
              </li>
              <li>
                <a href="#">Indicar Transportadora</a>
              </li>
            </ul>
          </nav>
        </Container>
      </Styles.Header>

      <Styles.Hero>
        <Container>
          <h1>
            Rastreie suas encomendas nacionais ou internacionais de forma fácil
            e prática com a Best Track!
          </h1>

          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Digite o seu código de rastreio aqui"
            />
            <Button icon={GoSearch} iconSize={17} />
          </div>

          <div className="last-trackings">
            <span>Últimos rastreamentos:</span>

            <div className="codes">
              <div>
                <span>LB426118833HK</span>
                <GoX className="last-tracking-close" />
              </div>
              <div>
                <span>LB426118833HK</span>
                <GoX className="last-tracking-close" />
              </div>
              <div>
                <span>LB426118833HK</span>
                <GoX className="last-tracking-close" />
              </div>
            </div>
          </div>

          <p>
            Obtenha informações sobre o seu pedido feito a partir de encomendas
            do kabum, Mercadolivre, Americanas, Amazon, Magazineluiza,
            Aliexpress e etc... Suportamos as principais transportadoras
            nacionais e internacionais como, Correios, DHL Express, Fedex, UPS,
            USPS e outras.
          </p>
        </Container>
      </Styles.Hero>

      <section>transportadoras</section>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
      <p>
        Obtenha informações sobre o seu pedido feito a partir de encomendas do
        kabum, Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
        etc... Suportamos as principais transportadoras nacionais e
        internacionais como, Correios, DHL Express, Fedex, UPS, USPS e outras.
      </p>
    </>
  );
};

export default Home;
