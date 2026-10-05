import React, {forwardRef, useState, useEffect} from 'react';
import {Box, useTheme, IconButton} from '@mui/material';
import {Instagram} from '@mui/icons-material';
import aos from 'aos';
import 'aos/dist/aos.css';

import {useCoupleData} from '@/context/CoupleDataContext';
import ornament1 from '../assets/image/home1.png';
import ornament2 from '../assets/image/home2.png';
import ring from '../assets/image/ring.png';

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

  useEffect(() => {
    aos.init();
  }, []);

  const theme = useTheme();

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      overflow: 'hidden',
    },
    box: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: `${90 + windowWidth * 0.05}vh 10% 0vh 10%`,
    },
    illustration: {
      width: `${140 - windowWidth * 0.06}%`,
    },
    ornament1: {
      right: 0,
      marginTop: `${-25 + windowHeight * 0.005}vh`,
      position: 'absolute',
      width: `${90 - windowWidth * 0.01}%`,
    },
    ornament2: {
      right: 0,
      left: 0,
      marginTop: `0vh`,
      position: 'absolute',
      width: '100%',
    },
    ring: {
      width: `${50 - windowWidth * 0.025}%`,
    },
    txt: {
      header: {
        fontSize: `${170 + windowWidth * 0.3}%`,
        marginTop: '2vh',
        textAlign: 'center',
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
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
      }}
    >
      <h1 className="font-estetik" style={styles.txt.header}>
        {person.name}
      </h1>
      <p style={styles.txt}>{person.parents}</p>
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
      <img src={ornament2} style={styles.ornament2} alt="" />
      <img src={ornament1} style={styles.ornament1} alt="" />
      <Box sx={styles.box}>
        <p
          style={{
            ...styles.txt,
            marginTop: '-60vh',
            fontSize: `${70 + windowWidth * 0.04}%`,
          }}
        >
          Tanpa mengurangi rasa hormat. Kami mengundang
          Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri
          acara pernikahan kami:
        </p>
        <img
          data-aos="flip-down"
          data-aos-duration="1500"
          src={data.heroImage}
          style={styles.illustration}
          alt=""
        />
        <Person person={data.bride} animation="fade-right" />
        <img
          data-aos="flip-left"
          data-aos-duration="1500"
          src={ring}
          style={styles.ring}
          alt=""
        />
        <Person person={data.groom} animation="fade-left" />
      </Box>
    </section>
  );
});

export default Pengantin;
