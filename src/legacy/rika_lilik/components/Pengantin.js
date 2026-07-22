import React, {forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import backgroundImage from '../assets/image/bgPengantin.png';
import ornamentTransition from '../assets/image/acara1.png';
import brides from '../assets/image/brides2.png';
import ornament1 from '../assets/image/pengantin1.png';
import ornament2 from '../assets/image/pengantin2.png';
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
      marginTop: '-5vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: 'right top',
      overflow: 'hidden',
    },
    box: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: '70vh 10% 10vh 10%',
    },
    ornament1: {
      right: 0,
      marginTop: '20vh',
      position: 'absolute',
      width:
        windowWidth > windowHeight
          ? `${35 - windowHeight * 0.01}vh`
          : `${30 - windowWidth * 0.01}%`,
    },
    ornament2: {
      left: 0,
      marginTop: `${-30 - windowWidth * 0.02}vh`,
      position: 'absolute',
      width:
        windowWidth > windowHeight
          ? `${40 - windowHeight * 0.01}vh`
          : `${35 - windowWidth * 0.01}%`,
    },
    txt: {
      header: {
        fontSize: `${230 + windowWidth * 0.15}%`,
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
        src={ornament1}
        style={styles.ornament1}
      />
      <Box sx={styles.box}>
        <p
          style={{
            color: theme.palette.dark.main,
            textAlign: 'center',
            marginTop: '-60vh',
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
            Rika Tania Ningsih
          </h1>
          <p style={styles.txt}>Putri dari Bapak Rusdi & Ibu Ririn</p>
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
            Lilik Waloyo
          </h1>
          <p style={styles.txt}>
            Putra dari Bapak Lasidin & Ibu Sudarsih
          </p>
        </Box>
      </Box>
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={ornament2}
        style={styles.ornament2}
      />
      <br />
      <br />
      <br />
    </section>
  );
});

export default Pengantin;
