import React, {useState} from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  CircularProgress,
  Typography,
  useTheme,
  Box,
  Fab,
  useMediaQuery,
} from '@mui/material';

// icons
import {
  HomeRounded,
  CollectionsRounded,
  FavoriteRounded,
  EventNoteRounded,
  SmsRounded,
  PauseCircleFilledRounded,
  PlayCircleRounded,
} from '@mui/icons-material';

const BottomNavbar = ({sectionRefs, audio, isAudioLoading}) => {
  const [value, setValue] = useState('home');
  const [play, setPlay] = useState(true);

  const theme = useTheme();
  const navbarStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0.5,
    paddingTop: 0.5,
    display: 'flex',
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.light.main,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    boxShadow: '0px 3px 9px',
  };

  const btnStyles = {
    height: 45,
    width: 45,
    position: 'fixed',
    zIndex: 2,
    bottom: 70,
    right: 16,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.light.main,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollToSection = (index) => {
    window.scrollTo({
      top: sectionRefs[index].current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handlePlay = () => {
    if (play) audio.pause();
    else audio.play();
  };

  audio.addEventListener('play', () => {
    setPlay(true);
  });

  audio.addEventListener('pause', () => {
    setPlay(false);
  });

  const isSmallScreen = useMediaQuery('(max-width:500px)');

  return (
    <>
      <Fab
        disabled={isAudioLoading}
        sx={btnStyles}
        onClick={handlePlay}
      >
        {play && !isAudioLoading && (
          <PauseCircleFilledRounded
            style={{color: theme.palette.primary.main}}
          />
        )}
        {!play && !isAudioLoading && (
          <PlayCircleRounded
            style={{color: theme.palette.primary.main}}
          />
        )}
        {isAudioLoading && (
          <CircularProgress size={16} color="inherit" />
        )}
      </Fab>
      <Box sx={navbarStyles} elevation={3}>
        <BottomNavigation
          sx={{
            width: '100%',
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'transparent',
            height: '45px',
          }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label={
              <Typography style={{fontSize: '10px'}}>Home</Typography>
            }
            value="home"
            icon={
              <HomeRounded
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.primary.main,
                }}
              />
            }
            sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(0)}
          />
          <BottomNavigationAction
            label={
              <Typography style={{fontSize: '10px'}}>
                Pengantin
              </Typography>
            }
            value="home"
            icon={
              <FavoriteRounded
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.primary.main,
                }}
              />
            }
            sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(1)}
          />
          <BottomNavigationAction
            label={
              <Typography style={{fontSize: '10px'}}>
                Acara
              </Typography>
            }
            value="home"
            icon={
              <EventNoteRounded
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.primary.main,
                }}
              />
            }
            sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(2)}
          />
          {/* <BottomNavigationAction
            label={
              <Typography style={{fontSize: '10px'}}>
                Galeri
              </Typography>
            }
            value="home"
            icon={
              <CollectionsRounded
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.primary.main,
                }}
              />
            }
            sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(3)}
          /> */}
          <BottomNavigationAction
            label={
              <Typography style={{fontSize: '10px'}}>
                Ucapan
              </Typography>
            }
            value="home"
            icon={
              <SmsRounded
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.primary.main,
                }}
              />
            }
            sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(3)}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};

export default BottomNavbar;
