import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GoBell, GoSearch, GoX } from 'react-icons/go';
import { FaShippingFast } from 'react-icons/fa';
import { CgListTree } from 'react-icons/cg';

import { Container } from '@components/Container';
import { Button } from '@components/Button';
import { Base } from 'layouts/Base';
import * as Grid from '@components/Grid';
import * as Flex from '@components/Flex';
import * as Styles from '@modules/Home/style';

import aboutImage from '@public/images/about-image.jpg';
import aliexpressImage from '@public/images/aliexpress.jpg';
import amazonImage from '@public/images/amazon.jpg';
import americanasImage from '@public/images/americanas.jpg';
import banggoodImage from '@public/images/banggood.jpg';
import chinaPostImage from '@public/images/china-post.jpg';
import correiosImage from '@public/images/correios.jpg';
import dhlImage from '@public/images/dhl.jpg';
import emsImage from '@public/images/ems.jpg';
import fedexImage from '@public/images/fedex.jpg';
import magazineLuizaImage from '@public/images/magazine-luiza.jpg';
import mercadoLivreImage from '@public/images/mercado-livre.jpg';
import uspsImage from '@public/images/usps.jpg';
import { Input } from '@components/Input';
import { Label } from '@components/Label';

export const Home: React.FC = () => (
  <>
    <Head>
      <title>Best Track - Home</title>
      <meta name="description" content="Best Track" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Base>
      <Styles.Hero id="home">
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

      <svg
        id="wave"
        style={{
          position: 'relative',
          bottom: '5px',
          transform: 'rotate(180deg)',
        }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(42, 138, 235, 1)" offset="0%" />
            <stop stopColor="rgba(42, 138, 235, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{
            transform: 'translate(0, 0px)',
            opacity: '1',
          }}
          fill="url(#sw-gradient-0)"
          d="M0,0L240,13.3C480,27,960,53,1440,66.7C1920,80,2400,80,2880,70C3360,60,3840,40,4320,33.3C4800,27,5280,33,5760,30C6240,27,6720,13,7200,18.3C7680,23,8160,47,8640,46.7C9120,47,9600,23,10080,13.3C10560,3,11040,7,11520,18.3C12000,30,12480,50,12960,63.3C13440,77,13920,83,14400,76.7C14880,70,15360,50,15840,43.3C16320,37,16800,43,17280,43.3C17760,43,18240,37,18720,36.7C19200,37,19680,43,20160,41.7C20640,40,21120,30,21600,23.3C22080,17,22560,13,23040,10C23520,7,24000,3,24480,3.3C24960,3,25440,7,25920,18.3C26400,30,26880,50,27360,56.7C27840,63,28320,57,28800,48.3C29280,40,29760,30,30240,25C30720,20,31200,20,31680,20C32160,20,32640,20,33120,21.7C33600,23,34080,27,34320,28.3L34560,30L34560,100L34320,100C34080,100,33600,100,33120,100C32640,100,32160,100,31680,100C31200,100,30720,100,30240,100C29760,100,29280,100,28800,100C28320,100,27840,100,27360,100C26880,100,26400,100,25920,100C25440,100,24960,100,24480,100C24000,100,23520,100,23040,100C22560,100,22080,100,21600,100C21120,100,20640,100,20160,100C19680,100,19200,100,18720,100C18240,100,17760,100,17280,100C16800,100,16320,100,15840,100C15360,100,14880,100,14400,100C13920,100,13440,100,12960,100C12480,100,12000,100,11520,100C11040,100,10560,100,10080,100C9600,100,9120,100,8640,100C8160,100,7680,100,7200,100C6720,100,6240,100,5760,100C5280,100,4800,100,4320,100C3840,100,3360,100,2880,100C2400,100,1920,100,1440,100C960,100,480,100,240,100L0,100Z"
        />
      </svg>

      <Container>
        <Styles.Section id="about" className="about-container">
          <h2>Sobre</h2>

          <div className="about-wrapper">
            <div className="about-content">
              <h3>O Seu Rastreador de Encomendas</h3>

              <p>
                Receba informações sobre o status de todos os seus pedidos
                realizados nos principais comércios online como Kabum,
                Mercadolivre, Americanas, Amazon, Magazineluiza, Aliexpress e
                dentre outros do Brasil e do mundo.
              </p>
              <p>
                Utilize o código de rastreio disponibilizado no pós compra em
                alguns desses sites, no campo de pesquisa no topo do site.
              </p>

              <Button size="lg">Transportadoras</Button>
            </div>

            <div className="about-image">
              <Image src={aboutImage} objectFit="cover" />
            </div>
          </div>
        </Styles.Section>
      </Container>

      <svg
        id="wave"
        style={{
          position: 'relative',
          top: '5px',
          transform: 'rotate(0deg)',
        }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(42, 138, 235, 1)" offset="0%" />
            <stop stopColor="rgba(42, 138, 235, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{
            transform: 'translate(0, 0px)',
            opacity: '1',
          }}
          fill="url(#sw-gradient-0)"
          d="M0,0L240,13.3C480,27,960,53,1440,66.7C1920,80,2400,80,2880,70C3360,60,3840,40,4320,33.3C4800,27,5280,33,5760,30C6240,27,6720,13,7200,18.3C7680,23,8160,47,8640,46.7C9120,47,9600,23,10080,13.3C10560,3,11040,7,11520,18.3C12000,30,12480,50,12960,63.3C13440,77,13920,83,14400,76.7C14880,70,15360,50,15840,43.3C16320,37,16800,43,17280,43.3C17760,43,18240,37,18720,36.7C19200,37,19680,43,20160,41.7C20640,40,21120,30,21600,23.3C22080,17,22560,13,23040,10C23520,7,24000,3,24480,3.3C24960,3,25440,7,25920,18.3C26400,30,26880,50,27360,56.7C27840,63,28320,57,28800,48.3C29280,40,29760,30,30240,25C30720,20,31200,20,31680,20C32160,20,32640,20,33120,21.7C33600,23,34080,27,34320,28.3L34560,30L34560,100L34320,100C34080,100,33600,100,33120,100C32640,100,32160,100,31680,100C31200,100,30720,100,30240,100C29760,100,29280,100,28800,100C28320,100,27840,100,27360,100C26880,100,26400,100,25920,100C25440,100,24960,100,24480,100C24000,100,23520,100,23040,100C22560,100,22080,100,21600,100C21120,100,20640,100,20160,100C19680,100,19200,100,18720,100C18240,100,17760,100,17280,100C16800,100,16320,100,15840,100C15360,100,14880,100,14400,100C13920,100,13440,100,12960,100C12480,100,12000,100,11520,100C11040,100,10560,100,10080,100C9600,100,9120,100,8640,100C8160,100,7680,100,7200,100C6720,100,6240,100,5760,100C5280,100,4800,100,4320,100C3840,100,3360,100,2880,100C2400,100,1920,100,1440,100C960,100,480,100,240,100L0,100Z"
        />
      </svg>

      <Styles.Section id="features" className="features-container">
        <Container>
          <div className="features-items">
            <div className="features-item">
              <FaShippingFast color="var(--colors-whiteA12)" size={50} />

              <h4>X Transportadoras Integradas</h4>

              <p>
                Todas as principais transportadoras do Brasil e do mundo
                integradas ao sistema da Best Track, proporcionando maior
                variedade e abrangência ao rastrear.
              </p>
            </div>

            <div className="features-item">
              <CgListTree color="var(--colors-whiteA12)" size={40} />

              <h4>Facilidade</h4>

              <p>
                Evite ter de acessar vários sites de transportadoras a todo
                momento para consultar o status dos seus pedidos, utilize a Best
                Track e tenha todas a informações do seus produtos em um só
                lugar.
              </p>
            </div>

            <div className="features-item">
              <GoBell color="var(--colors-whiteA12)" size={40} />

              <h4>Notificações do Pedido</h4>

              <p>
                Além das funções de rastreamendo do seu pedido, seja notificado
                sempre que o status da sua encomenda for atualizado, melhorando
                ainda mais o acompanhamento das suas entrega.
              </p>
            </div>
          </div>
        </Container>
      </Styles.Section>

      <svg
        id="wave"
        style={{
          position: 'relative',
          bottom: '5px',
          transform: 'rotate(180deg)',
        }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(42, 138, 235, 1)" offset="0%" />
            <stop stopColor="rgba(42, 138, 235, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{
            transform: 'translate(0, 0px)',
            opacity: '1',
          }}
          fill="url(#sw-gradient-0)"
          d="M0,0L240,13.3C480,27,960,53,1440,66.7C1920,80,2400,80,2880,70C3360,60,3840,40,4320,33.3C4800,27,5280,33,5760,30C6240,27,6720,13,7200,18.3C7680,23,8160,47,8640,46.7C9120,47,9600,23,10080,13.3C10560,3,11040,7,11520,18.3C12000,30,12480,50,12960,63.3C13440,77,13920,83,14400,76.7C14880,70,15360,50,15840,43.3C16320,37,16800,43,17280,43.3C17760,43,18240,37,18720,36.7C19200,37,19680,43,20160,41.7C20640,40,21120,30,21600,23.3C22080,17,22560,13,23040,10C23520,7,24000,3,24480,3.3C24960,3,25440,7,25920,18.3C26400,30,26880,50,27360,56.7C27840,63,28320,57,28800,48.3C29280,40,29760,30,30240,25C30720,20,31200,20,31680,20C32160,20,32640,20,33120,21.7C33600,23,34080,27,34320,28.3L34560,30L34560,100L34320,100C34080,100,33600,100,33120,100C32640,100,32160,100,31680,100C31200,100,30720,100,30240,100C29760,100,29280,100,28800,100C28320,100,27840,100,27360,100C26880,100,26400,100,25920,100C25440,100,24960,100,24480,100C24000,100,23520,100,23040,100C22560,100,22080,100,21600,100C21120,100,20640,100,20160,100C19680,100,19200,100,18720,100C18240,100,17760,100,17280,100C16800,100,16320,100,15840,100C15360,100,14880,100,14400,100C13920,100,13440,100,12960,100C12480,100,12000,100,11520,100C11040,100,10560,100,10080,100C9600,100,9120,100,8640,100C8160,100,7680,100,7200,100C6720,100,6240,100,5760,100C5280,100,4800,100,4320,100C3840,100,3360,100,2880,100C2400,100,1920,100,1440,100C960,100,480,100,240,100L0,100Z"
        />
      </svg>

      <Container>
        <Styles.Section id="carriers" className="carriers-container">
          <h2>Transportadoras</h2>

          <Grid.Container columns={4} gap={4}>
            <Grid.Item className="carriers-item">
              <Image src={aliexpressImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Aliexpress</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={amazonImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Amazon</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={americanasImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Americanas</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={banggoodImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Banggood</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={chinaPostImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>China Post</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={correiosImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Correios</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={dhlImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Dhl</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={emsImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Ems</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={fedexImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Fedex</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={magazineLuizaImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Magazine Luiza</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={mercadoLivreImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Mercado Livre</h3>
                <GoSearch />
              </div>
            </Grid.Item>

            <Grid.Item className="carriers-item">
              <Image src={uspsImage} objectFit="cover" layout="fill" />

              <div className="carriers-content">
                <h3>Usps</h3>
                <GoSearch />
              </div>
            </Grid.Item>
          </Grid.Container>
        </Styles.Section>
      </Container>

      <svg
        id="wave"
        style={{
          position: 'relative',
          top: '5px',
          transform: 'rotate(0deg)',
        }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(42, 138, 235, 1)" offset="0%" />
            <stop stopColor="rgba(42, 138, 235, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{
            transform: 'translate(0, 0px)',
            opacity: '1',
          }}
          fill="url(#sw-gradient-0)"
          d="M0,0L240,13.3C480,27,960,53,1440,66.7C1920,80,2400,80,2880,70C3360,60,3840,40,4320,33.3C4800,27,5280,33,5760,30C6240,27,6720,13,7200,18.3C7680,23,8160,47,8640,46.7C9120,47,9600,23,10080,13.3C10560,3,11040,7,11520,18.3C12000,30,12480,50,12960,63.3C13440,77,13920,83,14400,76.7C14880,70,15360,50,15840,43.3C16320,37,16800,43,17280,43.3C17760,43,18240,37,18720,36.7C19200,37,19680,43,20160,41.7C20640,40,21120,30,21600,23.3C22080,17,22560,13,23040,10C23520,7,24000,3,24480,3.3C24960,3,25440,7,25920,18.3C26400,30,26880,50,27360,56.7C27840,63,28320,57,28800,48.3C29280,40,29760,30,30240,25C30720,20,31200,20,31680,20C32160,20,32640,20,33120,21.7C33600,23,34080,27,34320,28.3L34560,30L34560,100L34320,100C34080,100,33600,100,33120,100C32640,100,32160,100,31680,100C31200,100,30720,100,30240,100C29760,100,29280,100,28800,100C28320,100,27840,100,27360,100C26880,100,26400,100,25920,100C25440,100,24960,100,24480,100C24000,100,23520,100,23040,100C22560,100,22080,100,21600,100C21120,100,20640,100,20160,100C19680,100,19200,100,18720,100C18240,100,17760,100,17280,100C16800,100,16320,100,15840,100C15360,100,14880,100,14400,100C13920,100,13440,100,12960,100C12480,100,12000,100,11520,100C11040,100,10560,100,10080,100C9600,100,9120,100,8640,100C8160,100,7680,100,7200,100C6720,100,6240,100,5760,100C5280,100,4800,100,4320,100C3840,100,3360,100,2880,100C2400,100,1920,100,1440,100C960,100,480,100,240,100L0,100Z"
        />
      </svg>

      <Styles.Section
        id="indicate-carrier"
        className="indicate-carrier-container"
      >
        <Container>
          <h2>Indicar Transportadora</h2>

          <p>
            Preencha os campos abaixo para solicitar a adição de uma nova
            transportadora. Iremos analisar e no futuro implementá-la no
            sistema.
          </p>

          <form>
            <Flex.Container>
              <Flex.Item column={6}>
                <Label htmlFor="name">Nome:</Label>
                <Input id="name" placeholder="Digite o nome" outlined />
              </Flex.Item>

              <Flex.Item column={6}>
                <Label htmlFor="name">Sobrenome:</Label>
                <Input id="name" placeholder="Digite o sobrenome" outlined />
              </Flex.Item>
            </Flex.Container>

            <Flex.Container>
              <Flex.Item column={12}>
                <Label htmlFor="email">Email:</Label>
                <Input id="name" placeholder="Digite o email" outlined />
              </Flex.Item>
            </Flex.Container>

            <Flex.Container>
              <Flex.Item column={6}>
                <Label htmlFor="email">Nome da transportadora:</Label>
                <Input
                  id="carrier_name"
                  placeholder="Digite o nome da transportadora"
                  outlined
                />
              </Flex.Item>

              <Flex.Item column={6}>
                <Label htmlFor="email">Site da transportadora:</Label>
                <Input
                  id="carrier_info"
                  placeholder="Digite o site da transportadora"
                  outlined
                />
              </Flex.Item>
            </Flex.Container>

            <Flex.Container>
              <Flex.Item column={12}>
                <Button color="light" size="full">
                  Enviar
                </Button>
              </Flex.Item>
            </Flex.Container>
          </form>
        </Container>
      </Styles.Section>
    </Base>
  </>
);
