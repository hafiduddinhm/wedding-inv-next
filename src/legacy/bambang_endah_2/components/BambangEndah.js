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
import AmplopDigital from './AmplopDigital';

const BambangEndahStyle = styled.div`
  font-family: 'Poppins', sans-serif !important;
  font-weight: 400 !important;

  .font-serif {
    font-family: 'Playfair Display', serif !important;
  }
  .font-estetik {
    font-family: 'moontime', cursive !important;
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#043D6A',
    },
    secondary: {
      main: '#1A87A1',
    },
    dark: {
      main: '#061C2E',
    },
    light: {
      main: '#FAFFFF',
    },
    black: {
      main: '#000A13',
    },
  },
});

const BambangEndah = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);
  const section5Ref = React.useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <BambangEndahStyle>
        <Helmet>
          <title>Bambang & Endah Wedding</title>
          <meta name="description" content="Minggu, 14 Mei 2023" />
          <meta
            property="og:title"
            content="Bambang & Endah Wedding"
          />
          <meta
            property="og:description"
            content="Minggu, 14 Mei 2023"
          />
          <meta
            property="og:url"
            content="https://menghitunghari2.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari2.vercel.app/bambang_endah"
          />
        </Helmet>
        <OpeningModal />
        <Home ref={section1Ref} />
        <Pengantin ref={section2Ref} />
        <Acara ref={section3Ref} />
        <AmplopDigital />
        <Gallery ref={section4Ref} />
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
      </BambangEndahStyle>
    </ThemeProvider>
  );
};

export default BambangEndah;
