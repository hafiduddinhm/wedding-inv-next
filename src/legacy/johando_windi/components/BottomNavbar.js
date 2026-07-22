import React, {useEffect, useState} from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  CircularProgress,
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

import HomeIcon from '../assets/image/icon-home.png';
import PengantinIcon from '../assets/image/icon-pengantin.png';
import AcaraIcon from '../assets/image/icon-acara.png';
import UcapanIcon from '../assets/image/icon-ucapan.png';

const BottomNavbar = ({sectionRefs, audio, isAudioLoading}) => {
  const [value, setValue] = useState('home');
  const [play, setPlay] = useState(true);

  const MENU = [
    'home',
    'pengantin',
    'acara',
    // 'galeri',
    'ucapan',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust for visibility threshold
      const numOfSection = sectionRefs.length;
      for (let i = 0; i < numOfSection - 1; i++) {
        if (
          scrollPosition > sectionRefs[i].current.offsetTop &&
          scrollPosition <= sectionRefs[i + 1].current.offsetTop
        )
          setValue(MENU[i]);
        else if (
          scrollPosition >
          sectionRefs[numOfSection - 1].current.offsetTop
        )
          setValue(MENU[numOfSection - 1]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    console.log(event, newValue);
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

  return (
    <>
      <Fab
        disabled={isAudioLoading}
        sx={btnStyles}
        onClick={handlePlay}
      >
        {play && !isAudioLoading && (
          <PauseCircleFilledRoundedIcon
            style={{color: theme.palette.dark.main}}
          />
        )}
        {!play && !isAudioLoading && (
          <PlayCircleRoundedIcon
            style={{color: theme.palette.dark.main}}
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
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'transparent',
            height: '50px',
          }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label={
              <Typography
                style={{
                  fontSize: '13px',
                  fontFamily: 'Josefin Sans',
                  color: theme.palette.light.second,
                }}
              >
                Home
              </Typography>
            }
            value="home"
            icon={
              <img
                src={HomeIcon}
                style={{width: '40px'}}
                alt="Home"
              />
            }
            // sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(0)}
          />
          <BottomNavigationAction
            label={
              <Typography
                style={{
                  fontSize: '13px',
                  fontFamily: 'Josefin Sans',
                  color: theme.palette.light.second,
                }}
              >
                Pengantin
              </Typography>
            }
            value="pengantin"
            icon={
              <img
                src={PengantinIcon}
                style={{width: '40px'}}
                alt="Pengantin"
              />
            }
            // sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(1)}
          />
          <BottomNavigationAction
            label={
              <Typography
                style={{
                  fontSize: '13px',
                  fontFamily: 'Josefin Sans',
                  color: theme.palette.light.second,
                }}
              >
                Acara
              </Typography>
            }
            value="acara"
            icon={
              <img
                src={AcaraIcon}
                style={{width: '40px'}}
                alt="Acara"
              />
            }
            // sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(2)}
          />
          {/* <BottomNavigationAction
            label={
              <Typography style={{fontSize: '10px'}}>
                Galeri
              </Typography>
            }
            value="galeri"
            icon={
              <CollectionsRoundedIcon
                // sx={{
                //   fontSize: isSmallScreen ? '16px' : '20px',
                //   color: theme.palette.primary.main,
                // }}
              />
            }
            // sx={{padding: '0px', minWidth: '40px', height: '40px'}}
            onClick={() => scrollToSection(3)}
          /> */}
          <BottomNavigationAction
            label={
              <Typography
                style={{
                  fontSize: '13px',
                  fontFamily: 'Josefin Sans',
                  color: theme.palette.light.second,
                }}
              >
                Ucapan
              </Typography>
            }
            value="ucapan"
            icon={
              <img
                src={UcapanIcon}
                style={{width: '40px'}}
                alt="Ucapan"
              />
            }
            onClick={() => scrollToSection(3)}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};

export default BottomNavbar;
