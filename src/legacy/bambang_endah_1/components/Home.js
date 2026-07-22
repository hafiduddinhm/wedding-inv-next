import React, {useRef, forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import bg from '../assets/image/bghome.jpg';
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

  const boxStyles = {};

  const styles = {
    section: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.dark.main,
      overflow: 'hidden',
    },
    box: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'end',
      paddingBottom: '10vh',
      paddingLeft: '7%',
      height: `92vh`,
      overflow: 'hidden',
    },
    header: {
      color: theme.palette.primary.main,
      fontSize: `${140 + windowWidth * 0.07}%`,
      justifySelf: 'center',
      textAlign: 'center',
    },
    txt: {
      color: theme.palette.light.main,
      textAlign: 'left',
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${0 + windowHeight * 0.005}vh`
          : `${20 + windowWidth * 0.25}%`,
    },
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current = sectionRef.current;
    }
  }, [ref]);

  return (
    <section ref={sectionRef} style={styles.section}>
      <Box sx={styles.box}>
        <h1
          style={{
            ...styles.txt,
            fontSize: `${150 + windowWidth * 0.1}%`,
            fontWeight: 'bold',
          }}
          className="font-serif"
        >
          Bambang & Endah
        </h1>
        <h1
          style={{
            ...styles.txt,
            fontSize: `${50 + windowWidth * 0.1}%`,
            fontWeight: 500,
          }}
        >
          Save the Date || Minggu, 14 Mei 2023
        </h1>
      </Box>
    </section>
  );
});

export default Home;
