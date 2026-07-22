import React, {forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import backgroundImage from '../assets/image/bgOrnamentPengantin.png';
import ornamentTransition from '../assets/image/acara1.png';
import groom from '../assets/image/groom.png';
import bride from '../assets/image/bride.png';
import aos from 'aos';
import 'aos/dist/aos.css';

const Pengantin = forwardRef((props, sectionRef) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
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
    box: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: '70vh 10% 10vh 10%',
    },
    ornament: {
      width: `${75 - windowWidth * 0.04}%`,
      position: 'relative',
      left: `${windowWidth}px`,
      transform: 'translateX(-100%)',
      top: '-15vh',
    },
    txt: {
      header: {
        fontSize: `${190 + windowWidth * 0.06}%`,
        marginTop: '2vh',
        textAlign: 'center',
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
    },
    img: {
      width: '65%',
    },
  };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: theme.palette.light.main,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
        overflow: 'hidden',
      }}
    >
      {/* <Box sx={{position: 'relative', top: 0}}>
                <div style={{ position: 'absolute', left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 0 }}>
                    <img src={backgroundImage} style={{ width: '100%', height: '100%' }}></img>
                </div>
            </Box> */}
      <Box sx={styles.box}>
        <p
          style={{
            color: theme.palette.dark.main,
            textAlign: 'center',
            marginTop: '-60vh',
            fontSize: `${70 + windowWidth * 0.04}%`,
          }}
        >
          Assalamu'alaikum Wr. Wb.
          <br />
          Tanpa mengurangi rasa hormat. Kami mengundang
          Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri
          acara pernikahan kami:
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
          <img src={groom} style={styles.img} />
          <h1 className="font-estetik" style={styles.txt.header}>
            Hendra Dwi Irawan
          </h1>
          <p style={styles.txt}>
            Putra kedua dari Bpk Ramaji & Ibu Pukpingah
          </p>
        </Box>
        <br />
        <Box
          data-aos="fade-left"
          data-aos-duration="1500"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={bride} style={styles.img} />
          <h1 className="font-estetik" style={styles.txt.header}>
            Yuyun Laylia El Mahera
          </h1>
          <p style={styles.txt}>
            Putri pertama dari Bpk Pungkasan & Ibu Isni Kurnianingsih
          </p>
        </Box>
      </Box>
      <img src={ornamentTransition} style={styles.ornament} />
    </section>
  );
});

export default Pengantin;
