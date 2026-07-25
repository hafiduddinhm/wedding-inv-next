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
import {Alert, AlertTitle, Slide, Snackbar} from '@mui/material';
import Journeys from './Journeys';

const RisaAldiStyle = styled.div`
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
      main: '#6A0424',
    },
    secondary: {
      main: '#A11A37',
    },
    dark: {
      main: '#A11A37',
    },
    light: {
      main: '#FFFAFB',
    },
    gray: {
      main: '#F59C9C',
    },
  },
});

const RisaAldi = () => {
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbar, setSnackbar] = useState({});

  const audio = new Audio(
    'https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_za2e91be36419d72d827d081b_f119c92cb11c23073_d20240810_m130211_c005_v0501013_t0004_u01723294931605',
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
  const section5Ref = React.useRef(null);
  // const section5Ref = React.useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <RisaAldiStyle>
        <Helmet>
          <title>Risa & Aldi Wedding</title>
          <meta
            name="description"
            content="Minggu, 15 September 2024"
          />
          <meta property="og:title" content="Risa & Aldi Wedding" />
          <meta
            property="og:description"
            content="Minggu, 15 September 2024"
          />
          <meta
            property="og:url"
            content="https://menghitunghari2.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari2.vercel.app/risa_aldi"
          />
        </Helmet>
        <OpeningModal onClosed={handlePlayMusic} />
        <Home ref={section1Ref} />
        <Pengantin ref={section2Ref} />
        <Acara ref={section3Ref} />
        <Gallery ref={section4Ref} />
        <Journeys />
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
      </RisaAldiStyle>
    </ThemeProvider>
  );
};

export default RisaAldi;
