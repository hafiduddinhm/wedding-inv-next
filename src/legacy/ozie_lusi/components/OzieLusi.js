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
import coupleImage from '../assets/image/brides.png';

const OzieLusiStyle = styled.div`
  font-family: 'Josefin Sans', sans-serif !important;

  .font-estetik {
    font-family: 'malibu', cursive !important;
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#C26942',
    },
    secondary: {
      main: '#e0e2e4',
    },
    dark: {
      main: '#6D423F',
    },
    light: {
      main: '#FFFBF5',
    },
    gray: {
      main: '#F59C9C',
    },
  },
});

const OzieLusi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);

  const ogImageUrl = `${window.location.origin}${coupleImage}`;

  return (
    <ThemeProvider theme={theme}>
      <OzieLusiStyle>
        <Helmet>
          <title>Ozie & Lusi Wedding</title>
          <meta name="description" content="Jumat, 12 Mei 2023" />
          <meta property="og:title" content="Ozie & Lusi Wedding" />
          <meta
            property="og:description"
            content="Jumat, 12 Mei 2023"
          />
          <meta property="og:image" content={ogImageUrl} />
          <meta
            property="og:url"
            content="https://menghitunghari2.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari2.vercel.app/ozie_lusi"
          />
        </Helmet>
        <OpeningModal />
        <Home ref={section1Ref} />
        <Pengantin ref={section2Ref} />
        <Acara ref={section3Ref} />
        <Gallery />
        <AmplopDigital />
        <Ucapan ref={section4Ref} />
        <Closing />
        <BottomNavbar
          sectionRefs={[
            section1Ref,
            section2Ref,
            section3Ref,
            section4Ref,
          ]}
        />
      </OzieLusiStyle>
    </ThemeProvider>
  );
};

export default OzieLusi;
