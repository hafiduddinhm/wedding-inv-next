import React, {useState} from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  useTheme,
} from '@mui/material';
import {Box, Fab, useMediaQuery} from '@mui/material';

// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

import PlayAudio from './PlayAudio';

const BottomNavbar = ({sectionRefs}) => {
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
    backgroundColor: theme.palette.secondary.main,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    boxShadow: '0px 3px 9px',
  };

  const btnStyles = {
    height: 45,
    width: 45,
    position: 'fixed',
    bottom: 70,
    right: 16,
    zIndex: 0,
    color: theme.palette.dark.main,
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

  const audio = PlayAudio();

  const handlePlay = (event) => {
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
      <Fab sx={btnStyles} onClick={handlePlay}>
        {play ? (
          <PauseCircleFilledRoundedIcon
            style={{color: theme.palette.dark.main}}
          />
        ) : (
          <PlayCircleRoundedIcon
            style={{color: theme.palette.dark.main}}
          />
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
              <HomeRoundedIcon
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.dark.main,
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
              <FavoriteRoundedIcon
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.dark.main,
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
              <EventNoteRoundedIcon
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.dark.main,
                }}
              />
            }
            sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(2)}
          />
          <BottomNavigationAction
            label={
              <Typography style={{fontSize: '10px'}}>
                Galeri
              </Typography>
            }
            value="home"
            icon={
              <CollectionsRoundedIcon
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.dark.main,
                }}
              />
            }
            sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(3)}
          />
          <BottomNavigationAction
            label={
              <Typography style={{fontSize: '10px'}}>
                Ucapan
              </Typography>
            }
            value="home"
            icon={
              <SmsRoundedIcon
                sx={{
                  fontSize: isSmallScreen ? '16px' : '20px',
                  color: theme.palette.dark.main,
                }}
              />
            }
            sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(4)}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};

export default BottomNavbar;
