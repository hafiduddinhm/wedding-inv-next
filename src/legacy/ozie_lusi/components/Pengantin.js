import React, {forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import backgroundImage from '../assets/image/bgPengantin.png';
import ornament1 from '../assets/image/home3.png';
import ornament2 from '../assets/image/home4.png';
import ring from '../assets/image/ring.png';
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
      backgroundPosition: 'top',
      backgroundSize: '100% 100%',
      overflow: 'hidden',
    },
    box: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: `${80 + windowWidth * 0.01}vh 10% 0vh 10%`,
    },
    ornament: {
      width: `${75 - windowWidth * 0.04}%`,
      position: 'relative',
      left: `${windowWidth}px`,
      transform: 'translateX(-100%)',
      top: '-15vh',
    },
    ornament1: {
      left: 0,
      // bottom: '-5vh',
      marginTop: `${-15 + windowHeight * 0.005}vh`,
      // transform: 'translate(0, 100%)',
      position: 'absolute',
      // width: '75%',
      width:
        windowWidth > windowHeight
          ? `${55 - windowHeight * 0.02}vh`
          : `${45 - windowWidth * 0.01}%`,
    },
    ornament2: {
      right: 0,
      // bottom: '0vh',
      marginTop: `${-15 + windowHeight * 0.005}vh`,
      position: 'absolute',
      // width: '92%',
      width:
        windowWidth > windowHeight
          ? `${55 - windowHeight * 0.02}vh`
          : `${45 - windowWidth * 0.01}%`,
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
    img: {
      width: '65%',
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <img src={ornament1} style={styles.ornament1} />
      <img src={ornament2} style={styles.ornament2} />
      <Box sx={styles.box}>
        <p
          style={{
            ...styles.txt,
            marginTop: '-60vh',
            fontSize: `${70 + windowWidth * 0.04}%`,
          }}
        >
          Telah dipertemukan oleh tempat dan waktu yg tidak disengaja
          lalu berkomitmen menuju hidup yang lebih serius
        </p>
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
            Muchammad Fachur Rozi
          </h1>
          <p style={styles.txt}>Putra kedua dari Ibu Rubingah</p>
        </Box>
        <img
          data-aos="flip-left"
          data-aos-duration="1500"
          src={ring}
          style={styles.ring}
        />
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
            Lusi Wijayanti
          </h1>
          <p style={styles.txt}>
            Putri Ketiga dari Bapak Suwanto (Alm) & Ibu Kampiyati
          </p>
        </Box>
      </Box>
    </section>
  );
});

export default Pengantin;
