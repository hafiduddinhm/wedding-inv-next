import React, {useState, useEffect} from 'react';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

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
import coupleImage from '../assets/image/home.png';
import {Alert, AlertTitle, Snackbar, Slide} from '@mui/material';

const Ivy5Style = styled.div`
  font-family: 'EB Garamond', serif !important;

  .font-estetik {
    font-family: 'lovely-thing', cursive !important;
  }
`;

let theme = createTheme({
  typography: {
    fontFamily: ['EB Garamond', 'lovely-thing'].join(','),
  },
  palette: {
    primary: {
      main: '#72523B',
    },
    secondary: {
      main: '#AE8F7A',
    },
    dark: {
      main: '#6D423F',
    },
    light: {
      main: '#FFFCF6',
    },
    gray: {
      main: '#F59C9C',
    },
  },
});
theme = responsiveFontSizes(theme, {factor: 1});

const Ivy5 = () => {
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({});

  const audio = new Audio(
    'https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_za2e91be36419d72d827d081b_f1117370826d688c5_d20230928_m150301_c005_v0501007_t0015_u01695913381017',
  );
  audio.volume = 0.5;
  audio.loop = true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    try {
      audio.load();
    } catch (error) {
      setSnackbar({
        severity: 'error',
        title: 'Yahh.. gagal memuat lagu',
        message: error.message,
      });
      setOpen(true);
    }

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
      setOpen(true);
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
      <Ivy5Style>
        <Helmet>
          <title>Fitri & Anwar Wedding</title>
          <meta
            name="description"
            content="Minggu, 10 Desember 2045"
          />
          <meta property="og:title" content="Fitri & Anwar Wedding" />
          <meta
            property="og:description"
            content="Minggu, 10 Desember 2045"
          />
          <meta property="og:image" content={ogImageUrl} />
          <meta
            property="og:url"
            content="https://menghitunghari.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari.vercel.app/fitri_anwar"
          />
        </Helmet>
        <OpeningModal onClosed={handlePlayMusic} />
        <Home ref={section1Ref} />
        <Pengantin ref={section2Ref} />
        <Acara ref={section3Ref} />
        <Gallery ref={section4Ref} />
        <PerjalananCerita />
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
      </Ivy5Style>
    </ThemeProvider>
  );
};

export default Ivy5;
