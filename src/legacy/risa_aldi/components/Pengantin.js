import React, {forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import backgroundImage from '../assets/image/bgPengantin.png';
import brides from '../assets/image/brides2.png';
import ornament2 from '../assets/image/pengantin2.png';
import ornament3 from '../assets/image/pengantin3.png';
import aos from 'aos';
import 'aos/dist/aos.css';

const Pengantin = forwardRef((props, sectionRef) => {
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
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    aos.init();
  }, []);

  const theme = useTheme();

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      overflow: 'hidden',
      paddingTop: '50px',
    },
    box: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: '10vh 10% 10vh 10%',
    },
    ornament1: {
      left: 0,
      marginTop: `30vh`,
      position: 'absolute',
      width: `${windowHeight > windowWidth ? '30%' : '28vh'}`,
    },
    ornament2: {
      right: 0,
      marginTop: '-25vh',
      position: 'absolute',
      width: `${windowHeight > windowWidth ? '10%' : '8vh'}`,
    },
    txt: {
      header: {
        fontSize: `${200 + windowWidth * 0.15}%`,
        marginTop: '2vh',
        textAlign: 'center',
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
    },
    img: {
      width: `${75 - windowWidth * 0.035}%`,
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={ornament2}
        alt="ornament"
        style={styles.ornament1}
      />
      <Box sx={styles.box}>
        <p
          style={{
            color: theme.palette.dark.main,
            textAlign: 'center',
            fontSize: `${70 + windowWidth * 0.04}%`,
          }}
        >
          Tanpa mengurangi rasa hormat. Kami mengundang
          Bapak/Ibu/Saudara/i sekalian untuk menghadiri acara
          pernikahan kami
        </p>
        <img
          data-aos="fade-down"
          data-aos-duration="1500"
          src={brides}
          alt="brides"
          style={styles.img}
        />
        <Box
          data-aos="fade-right"
          data-aos-duration="1500"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 className="font-estetik" style={styles.txt.header}>
            Risa Apriliani Sabrina
          </h1>
          <p style={styles.txt}>
            Putri Pertama dari Bapak Nurdin & Ibu Siti Julaeha{' '}
          </p>
        </Box>
        <h1
          data-aos="flip-left"
          data-aos-duration="1500"
          className="font-estetik"
          style={styles.txt.header}
        >
          &
        </h1>
        <Box
          data-aos="fade-left"
          data-aos-duration="1500"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 className="font-estetik" style={styles.txt.header}>
            Aldi Ardiansyah
          </h1>
          <p style={styles.txt}>
            Putra Pertama dari Bapak Deki (alm) & Ibu Nani
            Purwanti{' '}
          </p>
        </Box>
      </Box>
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={ornament3}
        alt="ornament"
        style={styles.ornament2}
      />
      <br />
      <br />
      <br />
    </section>
  );
});

export default Pengantin;
