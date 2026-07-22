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
// import PerjalananCerita from './PerjalananCinta';
import coupleImage from '../assets/image/home.jpg';
import {Alert, AlertTitle, Snackbar, Slide} from '@mui/material';

const RomiRosyiStyle = styled.div`
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

const RomiRosyi = () => {
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({});

  const audio = new Audio(
    'https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_za2e91be36419d72d827d081b_f101e453cb78d65cb_d20230501_m130446_c005_v0501003_t0008_u01682946286534',
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
      <RomiRosyiStyle>
        <Helmet>
          <title>Romi & Rosyi Wedding</title>
          <meta name="description" content="Sabtu, 21 Oktober 2023" />
          <meta property="og:title" content="Romi & Rosyi Wedding" />
          <meta
            property="og:description"
            content="Sabtu, 21 Oktober 2023"
          />
          <meta property="og:image" content={ogImageUrl} />
          <meta
            property="og:url"
            content="https://menghitunghari.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari.vercel.app/romi_rosyi"
          />
        </Helmet>
        <OpeningModal onClosed={handlePlayMusic} />
        <Home ref={section1Ref} />
        <Pengantin ref={section2Ref} />
        <Acara ref={section3Ref} />
        <Gallery ref={section4Ref} />
        {/* <PerjalananCerita /> */}
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
      </RomiRosyiStyle>
    </ThemeProvider>
  );
};

export default RomiRosyi;
