import React, {forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import groom from '../assets/image/groom.png';
import bride from '../assets/image/bride.png';
import ornament1 from '../assets/image/pengantin1.png';
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
      backgroundColor: theme.palette.primary.main,
      overflow: 'hidden',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'light.main',
      margin: '0vh 10% 10vh 10%',
    },
    ornament1: {
      position: 'relative',
      marginTop: '5vh',
      marginBottom: '2vh',
      width: `${25 - windowWidth * 0.01}%`,
    },
    hr: {
      border: 0,
      clear: 'both',
      display: 'block',
      width: '60%',
      backgroundColor: '#FFFFFF',
      height: '2px',
      opacity: 0.8,
      marginTop: 0,
    },
    txt: {
      header: {
        fontSize: `${150 + windowWidth * 0.15}%`,
        marginTop: '2vh',
        textAlign: 'center',
      },
      textAlign: 'center',
      margin: 0,
      fontSize: `${70 + windowWidth * 0.04}%`,
    },
    img: {
      width: `${55 + windowWidth * 0.035}%`,
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <Box sx={styles.box}>
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={ornament1}
          style={styles.ornament1}
        />
        <p style={{...styles.txt, marginBottom: 0, fontWeight: 600}}>
          Assalamu'alaikum Wr. Wb.
        </p>
        <p style={{...styles.txt}}>
          Tanpa mengurangi rasa hormat. Kami mengundang
          Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri
          acara pernikahan kami
        </p>
        <Box
          data-aos="fade-right"
          data-aos-duration="1500"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '5vh 0%',
            alignItems: 'center',
          }}
        >
          <img src={groom} style={styles.img} />
          <div
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 20%, black 20%)',
            }}
          >
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="font-serif"
              style={styles.txt.header}
            >
              BAMBANG
            </h1>
          </div>
          <hr style={styles.hr} />
          <div
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, black 0%)',
            }}
          >
            <div data-aos="fade-down" data-aos-duration="1500">
              <p
                style={{
                  ...styles.txt,
                  fontSize: `${100 + windowWidth * 0.04}%`,
                  fontWeight: 'bold',
                }}
              >
                Bambang Setiyoko
              </p>
              <p style={styles.txt}>
                Putra pertama
                <br /> Bapak Marjuki (Alm) & Ibu Rumi
              </p>
            </div>
          </div>
        </Box>
        <h1
          data-aos="flip-left"
          data-aos-duration="1500"
          className="font-serif"
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
            margin: '5vh 0%',
            alignItems: 'center',
          }}
        >
          <img src={bride} style={styles.img} />
          <div
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 20%, black 20%)',
            }}
          >
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="font-serif"
              style={styles.txt.header}
            >
              ENDAH
            </h1>
          </div>
          <hr style={styles.hr} />
          <div
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, black 0%)',
            }}
          >
            <div data-aos="fade-down" data-aos-duration="1500">
              <p
                style={{
                  ...styles.txt,
                  fontSize: `${100 + windowWidth * 0.04}%`,
                  fontWeight: 'bold',
                }}
              >
                Endah Rahayu
              </p>
              <p style={styles.txt}>
                Putri pertama
                <br /> Bapak Mu'akadun & Ibu Pasri
              </p>
            </div>
          </div>
        </Box>
      </Box>
      <br />
    </section>
  );
});

export default Pengantin;
