import React, {useRef, forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import ornament from '../assets/image/ornamen.png';
import ornament1 from '../assets/image/home1.png';
import ornament2 from '../assets/image/home2.png';
import ornament3 from '../assets/image/home3.png';
import ornament4 from '../assets/image/home4.png';
import brides from '../assets/image/brides.png';
import ring from '../assets/image/ring.png';
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
    paddingBottom: '25vh',
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
      left: 0,
      top: 0,
      position: 'absolute',
      // width: '75%',
      width:
        windowWidth > windowHeight
          ? `${65 - windowHeight * 0.01}vh`
          : `${85 - windowWidth * 0.01}%`,
    },
    ornament2: {
      right: 0,
      top: 0,
      position: 'absolute',
      // width: '60%',
      width:
        windowWidth > windowHeight
          ? `${50 - windowHeight * 0.01}vh`
          : `${70 - windowWidth * 0.01}%`,
    },
    ornament3: {
      right: 0,
      bottom: '5vh',
      // transform: 'translate(0, 100%)',
      position: 'absolute',
      // width: '75%',
      width:
        windowWidth > windowHeight
          ? `${65 - windowHeight * 0.01}vh`
          : `${85 - windowWidth * 0.01}%`,
    },
    ornament4: {
      left: 0,
      bottom: '0vh',
      position: 'absolute',
      // width: '92%',
      width:
        windowWidth > windowHeight
          ? `${95 - windowHeight * 0.05}vh`
          : `${110 - windowWidth * 0.05}%`,
    },
    ring: {
      width: `${30 - windowWidth * 0.01}%`,
      marginTop: `${20 - windowWidth * 0.001}vh`,
      zIndex: 3,
    },
    brides: {
      position: 'relative',
      bottom: 0,
      width: `${110 - windowWidth * 0.05}%`,
    },
    txt1: {
      color: theme.palette.gray.main,
      marginTop: `2vh`,
      marginBottom: 10,
      fontFamily: 'moontime',
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${-5 + windowHeight * 0.025}vh`
          : `${100 + windowWidth * 0.5}%`,
    },
    txt2: {
      color: theme.palette.primary.main,
      fontFamily: 'Glacial Indifference',
      textAlign: 'center',
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${1 + windowHeight * 0.005}vh`
          : `${40 + windowWidth * 0.25}%`,
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
        backgroundColor: theme.palette.light.main,
        overflow: 'hidden',
      }}
    >
      <Box style={boxStyles}>
        <img src={ornament2} style={styles.ornament2} />
        <img src={ornament1} style={styles.ornament1} />
        <img src={ring} style={styles.ring} />
        <h1 style={styles.txt1} className="font-estetik">
          The Wedding of
        </h1>
        <h1 style={styles.txt2}>
          Hendra & Elma
          <br />
          15 Mei 2023
        </h1>
        <img src={ornament} style={styles.ornament}></img>
        <br />
        <img src={brides} style={styles.brides} />
        <img src={ornament4} style={styles.ornament4} />
        <img src={ornament3} style={styles.ornament3} />
      </Box>
    </section>
  );
});

export default Home;
