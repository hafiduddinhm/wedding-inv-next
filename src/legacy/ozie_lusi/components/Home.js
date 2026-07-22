import React, {useRef, forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import backgroundImage from '../assets/image/bgHome.png';
import ornament1 from '../assets/image/home1.png';
import ornament2 from '../assets/image/home2.png';
import brides from '../assets/image/brides.png';
import aos from 'aos';
import 'aos/dist/aos.css';

const Home = forwardRef((props, ref) => {
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

  const boxStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const styles = {
    header: {
      color: theme.palette.primary.main,
      fontSize: `${140 + windowWidth * 0.07}%`,
      justifySelf: 'center',
      textAlign: 'center',
    },
    ornament: {
      width: `${50 - windowWidth * 0.025}%`,
    },
    ornament1: {
      top: 0,
      position: 'relative',
      // width: '75%',
      width:
        windowWidth > windowHeight
          ? `${100 - windowHeight * 0.01}vh`
          : `${85 - windowWidth * 0.01}%`,
    },
    ornament2: {
      bottom: 0,
      position: 'relative',
      // width: '60%',
      width: '100%',
    },
    brides: {
      position: 'relative',
      width: windowWidth < 900 ? '100%' : '900px',
      marginBottom: '2vh',
    },
    txt1: {
      color: theme.palette.dark.main,
      textAlign: 'center',
      fontSize:
        windowWidth > windowHeight
          ? `${9}vh`
          : `${80 + windowWidth * 0.25}%`,
    },
    txt2: {
      color: theme.palette.dark.main,
      textAlign: 'center',
      padding: '0vh 18%',
      fontWeight: 400,
      fontSize:
        windowWidth > windowHeight
          ? `${5}vh`
          : `${90 + windowWidth * 0.01}%`,
    },
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current = sectionRef.current;
    }
  }, [ref]);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100% 100%',
        backgroundColor: theme.palette.light.main,
        overflow: 'hidden',
      }}
    >
      <Box style={boxStyles}>
        <img src={ornament1} style={styles.ornament1} />
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '5vh 0%',
          }}
        >
          <h1 style={styles.txt1}>The Wedding of</h1>
          <br />
          <img src={brides} style={styles.brides} />
          <p style={{...styles.txt2}}>
            Kami berharap Anda menjadi bagian dari hari istimewa kami
            pada tanggal
          </p>
          <h1
            data-aos="flip-left"
            data-aos-duratio="1500"
            style={{...styles.txt1, fontWeight: 700}}
          >
            12 Mei 2023
          </h1>
        </Box>
        <img src={ornament2} style={styles.ornament2} />
      </Box>
    </section>
  );
});

export default Home;
