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
import PerjalananCerita from './PerjalananCinta';
import coupleImage from '../assets/image/brides.png';
import {Alert, AlertTitle, Slide, Snackbar} from '@mui/material';

const AjayUwinStyle = styled.div`
  font-family: 'glacial-Indifference', sans-serif !important;

  .font-estetik {
    font-family: 'moontime', cursive !important;
  }

  .font-serif {
    font-family: 'Playfair Display', serif !important;
    font-weight: bold !important;
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#6D423F',
    },
    secondary: {
      main: '#FFD4BC',
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

const AjayUwin = () => {
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({});

  const audio = new Audio(
    'https://f005.backblazeb2.com/file/menghitunghari-music/ketika_cinta_bertasbih.mp3',
  );
  audio.volume = 0.5;
  audio.loop = true;

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
      setSnackbar({
        severity: 'error',
        title: 'Yahh.. gagal memuat lagu',
        message: error.message,
      });
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

  const handlePlayMusic = () => {
    audio.play();
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);
  const section5Ref = React.useRef(null);

  const ogImageUrl = `${window.location.origin}${coupleImage}`;

  return (
    <ThemeProvider theme={theme}>
      <AjayUwinStyle>
        <Helmet>
          <title>Ajay & Uwin Wedding</title>
          <meta name="description" content="Minggu, 16 Mei 2023" />
          <meta property="og:title" content="Ajay & Uwin Wedding" />
          <meta
            property="og:description"
            content="<Minggu>, 16 Mei 2023"
          />
          <meta property="og:image" content={ogImageUrl} />
          <meta
            property="og:url"
            content="https://menghitunghari.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari.vercel.app/ajay_uwin"
          />
        </Helmet>
        <OpeningModal onClosed={handlePlayMusic} />
        <Home ref={section1Ref} />
        <Pengantin ref={section2Ref} />
        <PerjalananCerita />
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
          audio={audio}
          isAudioLoading={isAudioLoading}
        />
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          TransitionComponent={Slide}
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
          <Alert
            severity={snackbar.severity}
            variant="filled"
            onClose={handleSnackbarClose}
          >
            <AlertTitle>{snackbar.title}</AlertTitle>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </AjayUwinStyle>
    </ThemeProvider>
  );
};

export default AjayUwin;
