import React, {useEffect, useState} from 'react';
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

const RikaLilikStyle = styled.div`
  font-family: 'Roboto', sans-serif !important;
  font-weight: 300 !important;

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
      main: '#043D6A',
    },
    light: {
      main: '#FAFFFF',
    },
    gray: {
      main: '#F59C9C',
    },
  },
});

const RikaLilik = () => {
  const audio = new Audio(
    'https://f005.backblazeb2.com/file/menghitunghari-music/beautiful_in_white.mp3',
  );
  audio.volume = 0.5;
  audio.loop = true;

  const [isAudioLoading, setIsAudioLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    audio.load();

    const handleLoadStart = () => {
      setIsAudioLoading(true);
      console.log('loading audio...');
    };
    const handleLoadSuccess = () => {
      console.log('audio loaded');
      setIsAudioLoading(false);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('loadeddata', handleLoadSuccess);
    };
    const handleLoadError = (error) => {
      console.log('load audio error: ' + error.message);
      setIsAudioLoading(false);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('loadeddata', handleLoadSuccess);
      audio.removeEventListener('error', handleLoadError);
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('loadeddata', handleLoadSuccess);
    audio.addEventListener('error', handleLoadError);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('loadeddata', handleLoadSuccess);
      audio.removeEventListener('error', handleLoadError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);
  const section5Ref = React.useRef(null);

  const ogImageUrl = `${window.location.origin}${coupleImage}`;

  const handlePlayMusic = () => {
    console.log(audio);
    audio.play();
  };

  return (
    <ThemeProvider theme={theme}>
      <RikaLilikStyle>
        <Helmet>
          <title>Rika & Lilik Wedding</title>
          <meta name="description" content="Sabtu, 13 Mei 2023" />
          <meta property="og:title" content="Rika & Lilik Wedding" />
          <meta
            property="og:description"
            content="Sabtu, 13 Mei 2023"
          />
          <meta property="og:image" content={ogImageUrl} />
          <meta
            property="og:url"
            content="https://menghitunghari2.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari2.vercel.app/rika_lilik"
          />
        </Helmet>
        <OpeningModal onClosed={handlePlayMusic} />
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
          isAudioLoading={isAudioLoading}
          audio={audio}
        />
      </RikaLilikStyle>
    </ThemeProvider>
  );
};

export default RikaLilik;
