import React, {useEffect} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import OpeningModal from './OpeningModal';
import Home from './Home';
import Pengantin from './Pengantin';
import Acara from './Acara';
import BottomNavbar from './BottomNavbar';
import Ucapan from './Ucapan';
import Closing from './Closing';
import Gallery from './galery';
import coupleImage from '../assets/image/11.png';

import './App.css';
import AmplopDigital from './AmplopDigital';

const IrfanYayukStyle = styled.div`
  font-family: 'Ovo', serif !important;

  .font-estetik {
    font-family: 'Alex Brush', cursive !important;
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#283a68',
    },
    secondary: {
      main: '#e0e2e4',
    },
    dark: {
      main: '#394a73',
    },
    light: {
      main: '#eff1ec',
    },
    gray: {
      main: '#777687',
    },
  },
});

const IrfanYayuk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);
  const section5Ref = React.useRef(null);

  const ogImageUrl = `${window.location.origin}${coupleImage}`;

  return (
    <ThemeProvider theme={theme}>
      <IrfanYayukStyle>
        <Helmet>
          <title>Irfan & Yayuk Wedding</title>
          <meta name="description" content="Minggu, 7 Mei 2023" />
          <meta property="og:title" content="Irfan & Yayuk Wedding" />
          <meta
            property="og:description"
            content="Minggu, 7 Mei 2023"
          />
          <meta property="og:image" content={ogImageUrl} />
          <meta
            property="og:url"
            content="https://menghitunghari2.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari2.vercel.app/irfan_yayuk"
          />
        </Helmet>
        <OpeningModal />
        <Home ref={section1Ref} />
        <Pengantin ref={section2Ref} />
        <Acara ref={section3Ref} />
        <Gallery ref={section4Ref} />
        <AmplopDigital />
        <Ucapan ref={section5Ref} />

        <Closing />
        <BottomNavbar
          sectionRefs={[
            section1Ref,
            section2Ref,
            section3Ref,
            section4Ref,
            section5Ref,
          ]}
        />
      </IrfanYayukStyle>
    </ThemeProvider>
  );
};

export default IrfanYayuk;
