import React, {forwardRef, useState, useEffect} from 'react';
import {Box, Typography, useTheme, IconButton} from '@mui/material';
import {Instagram} from '@mui/icons-material';

import {useCoupleData} from '@/context/CoupleDataContext';
import ornament1 from '../assets/image/pengantin1.png';
import backgroundImage from '../assets/image/bgPengantin.png';

const Pengantin = forwardRef((props, sectionRef) => {
  const data = useCoupleData();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = useTheme();

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      color: theme.palette.primary.main,
      padding: '20vh 10% 10vh 10%',
      overflow: 'hidden',
      textAlign: 'center',
    },
    box: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    txt: {
      textAlign: 'center',
      fontWeight: 300,
    },
  };

  const Person = ({person, animation}) => (
    <Box
      data-aos={animation}
      data-aos-duration="1500"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%',
      }}
    >
      <Typography
        variant="h3"
        className="font-estetik"
        style={{marginTop: '2vh'}}
      >
        {person.name}
      </Typography>
      {person.nickname && (
        <Typography variant="h6">({person.nickname})</Typography>
      )}
      <Typography variant="p" style={styles.txt}>
        {person.parents}
      </Typography>
      {person.instagram && (
        <IconButton
          size="small"
          onClick={() => window.open(person.instagram)}
          sx={{margin: '5px'}}
        >
          <Instagram fontSize="small" />
        </IconButton>
      )}
    </Box>
  );

  return (
    <section ref={sectionRef} style={styles.section}>
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={ornament1}
        alt="flower"
        style={{
          position: 'absolute',
          alignSelf: 'right',
          marginTop: '-20vh',
          width: `${windowHeight > windowWidth ? '25%' : '22vh'}`,
          right: 0,
        }}
      />
      <Box sx={styles.box}>
        <Typography
          variant="h5"
          className="font-estetik"
          style={{marginTop: '2vh'}}
        >
          Assalamualaikum Warahmatullah Wabarakatuh
        </Typography>
        <Typography variant="p" style={{...styles.txt}}>
          Tanpa mengurangi rasa hormat. Kami mengundang
          Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri
          acara pernikahan kami:
        </Typography>
        <Person person={data.bride} animation="fade-right" />
        <Typography
          variant="h3"
          data-aos="flip-left"
          data-aos-duration="1500"
          className="font-estetik"
          style={{marginTop: '2vh'}}
        >
          &
        </Typography>
        <Person person={data.groom} animation="fade-left" />
      </Box>
    </section>
  );
});

export default Pengantin;
