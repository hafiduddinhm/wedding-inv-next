import React, {useEffect, useState} from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
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
import AmplopDigital from './AmplopDigital';
import coupleImage from '../assets/image/brides.png';
import {Alert, AlertTitle, Slide, Snackbar} from '@mui/material';

const JohandoWindiStyle = styled.div`
  font-family: 'Playfair Display', serif !important;

  .font-estetik {
    font-family: 'moontime', cursive !important;
  }

  .font-estetik2 {
    font-family: 'Alex Brush', cursive !important;
  }
`;

let theme = createTheme({
  typography: {
    fontFamily: 'Playfair Display',
  },
  palette: {
    primary: {
      main: '#4e4e4e',
    },
    secondary: {
      main: '#043D6A',
    },
    dark: {
      main: '#000F1B',
    },
    light: {
      main: '#D7F0F6',
      second: '#4BB2D2',
    },
  },
});
theme = responsiveFontSizes(theme, {factor: 1});

const JohandoWindi = () => {
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbar, setSnackbar] = useState({});

  const audio = new Audio(
    'https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_za2e91be36419d72d827d081b_f103edbb43b5f5e0d_d20240327_m163339_c005_v0501012_t0007_u01711557219255',
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
      setOpenSnackbar(true);
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
    setOpenSnackbar(false);
  };

  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);
  // const section5Ref = React.useRef(null);

  const ogImageUrl = `${window.location.origin}${coupleImage}`;

  return (
    <ThemeProvider theme={theme}>
      <JohandoWindiStyle>
        <Helmet>
          <title>Johando & Windi Wedding</title>
          <meta name="description" content="Kamis, 2 Mei 2023" />
          <meta
            property="og:title"
            content="Johando & Windi Wedding"
          />
          <meta
            property="og:description"
            content="Kamis, 2 Mei 2023"
          />
          <meta property="og:image" content={ogImageUrl} />
          <meta
            property="og:url"
            content="https://menghitunghari.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari.vercel.app/johando_windi"
          />
        </Helmet>
        <OpeningModal onClosed={handlePlayMusic} />
        <Home ref={section1Ref} />
        <Pengantin ref={section2Ref} />
        <Acara ref={section3Ref} />
        {/* <AmplopDigital ref={section4Ref}/> */}
        <Ucapan ref={section4Ref} />
        <Closing />
        <BottomNavbar
          sectionRefs={[
            section1Ref,
            section2Ref,
            section3Ref,
            section4Ref,
            // section5Ref,
          ]}
          isAudioLoading={isAudioLoading}
          audio={audio}
        />
        <Snackbar
          open={openSnackbar}
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
      </JohandoWindiStyle>
    </ThemeProvider>
  );
};

export default JohandoWindi;
