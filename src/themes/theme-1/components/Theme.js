import React, {useState, useEffect} from 'react';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import styled from 'styled-components';
import {Alert, AlertTitle, Snackbar, Slide} from '@mui/material';

import {CoupleDataProvider} from '@/context/CoupleDataContext';
import OpeningModal from './OpeningModal';
import Home from './Home';
import Pengantin from './Pengantin';
import Acara from './Acara';
import Gallery from './galery';
import PerjalananCerita from './PerjalananCinta';
import AmplopDigital from './AmplopDigital';
import Ucapan from './Ucapan';
import Closing from './Closing';
import BottomNavbar from './BottomNavbar';

const Theme1Style = styled.div`
  font-family: 'EB Garamond', serif !important;

  .font-estetik {
    font-family: 'lovely-thing', cursive !important;
  }
`;

let muiTheme = createTheme({
  typography: {
    fontFamily: ['EB Garamond', 'lovely-thing'].join(','),
  },
  palette: {
    primary: {main: '#72523B'},
    secondary: {main: '#AE8F7A'},
    dark: {main: '#6D423F'},
    light: {main: '#FFFCF6'},
    gray: {main: '#F59C9C'},
  },
});
muiTheme = responsiveFontSizes(muiTheme, {factor: 1});

const Theme = ({data}) => {
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({});

  const audio = new Audio(data.audioUrl);
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

    const handleLoadStart = () => setIsAudioLoading(true);
    const handleLoadSuccess = () => {
      setIsAudioLoading(false);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('loadeddata', handleLoadSuccess);
    };
    const handleLoadError = (error) => {
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
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);
  const section5Ref = React.useRef(null);

  const hasGallery = Boolean(data.gallery && data.gallery.length);
  const hasStory = Boolean(data.story && data.story.length);

  // Section order matches the original pages: Home, Pengantin, Acara,
  // [Gallery], [PerjalananCerita], AmplopDigital, Ucapan, Closing.
  const navSections = [
    {key: 'home', ref: section1Ref},
    {key: 'pengantin', ref: section2Ref},
    {key: 'acara', ref: section3Ref},
    hasGallery ? {key: 'gallery', ref: section4Ref} : null,
    {key: 'ucapan', ref: section5Ref},
  ].filter(Boolean);

  return (
    <ThemeProvider theme={muiTheme}>
      <CoupleDataProvider value={data}>
        <Theme1Style>
          <OpeningModal onClosed={handlePlayMusic} />
          <Home ref={section1Ref} />
          <Pengantin ref={section2Ref} />
          <Acara ref={section3Ref} />
          {hasGallery && <Gallery ref={section4Ref} />}
          {hasStory && <PerjalananCerita />}
          <AmplopDigital />
          <Ucapan ref={section5Ref} />
          <Closing />
          <BottomNavbar
            sections={navSections}
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
        </Theme1Style>
      </CoupleDataProvider>
    </ThemeProvider>
  );
};

export default Theme;
