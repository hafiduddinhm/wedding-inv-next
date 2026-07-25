import React, {useRef, forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import bg from '../assets/image/bgHome.png';
import ornament1 from '../assets/image/home1.png';
import ornament2 from '../assets/image/home2.png';
import ornament3 from '../assets/image/home3.png';
import ornament4 from '../assets/image/home4.png';
import ornament5 from '../assets/image/home5.png';
import ornament6 from '../assets/image/pengantin1.png';
import brides from '../assets/image/brides.webp';
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

  const styles = {
    section: {
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `url(${brides})`,
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      overflow: 'hidden',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // paddingBottom: '25vh',
      overflow: 'hidden',
    },
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
      width: '40%',
    },
    ornament2: {
      right: 0,
      top: 0,
      position: 'absolute',
      // width: '60%',
      width: '45%',
    },
    ornament3: {
      right: 0,
      bottom: '-17vh',
      // transform: 'translate(0, 100%)',
      position: 'absolute',
      width: '45%',
    },
    ornament4: {
      left: 0,
      bottom: '-12vh',
      position: 'absolute',
      width: '45%',
    },
    ornament5: {
      bottom: '-15%',
      position: 'absolute',
      width: '55%',
    },
    ornament6: {
      right: 0,
      bottom: '-17vh',
      // transform: 'translate(0, 100%)',
      position: 'absolute',
      width: '20%',
    },
    brides: {
      position: 'absolute',
      height: 'calc(100vh - 20px)',
    },
    txt: {
      color: theme.palette.light.main,
      textAlign: 'center',
      zIndex: 100,
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
      <Box style={styles.box}>
        <img
          src={ornament1}
          alt="ornament1"
          style={styles.ornament1}
        />
        <img
          src={ornament2}
          alt="ornament2"
          style={styles.ornament2}
        />
        <Box sx={{marginTop: '10vh'}}>
          <div style={{...styles.txt, fontSize: '89%'}}>
            The Wedding of
          </div>
          <h1
            style={{...styles.txt, fontSize: `170%`}}
            className="font-serif"
          >
            Risa & Aldi
          </h1>
          <h1
            style={{...styles.txt, fontSize: `120%`}}
            className="font-serif"
          >
            15 September 2024
          </h1>
        </Box>

        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={ornament6}
          alt="flower"
          style={{
            right: 0,
            bottom: '-25vh',
            position: 'absolute',
            width: `${windowHeight > windowWidth ? '20%' : '16vh'}`,
          }}
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={ornament5}
          alt="flower"
          style={{
            bottom: '-25%',
            position: 'absolute',
            width: `${windowHeight > windowWidth ? '56%' : '60vh'}`,
          }}
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={ornament3}
          alt="flower"
          style={{
            right: 0,
            bottom: `${windowHeight > windowWidth ? '-25vh' : '-45vh'}`,
            position: 'absolute',
            width: `${windowHeight > windowWidth ? '55%' : '70vh'}`,
          }}
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={ornament4}
          alt="flower"
          style={{
            left: 0,
            bottom: `${windowHeight > windowWidth ? '-25vh' : '-30vh'}`,
            position: 'absolute',
            width: `${windowHeight > windowWidth ? '55%' : '70vh'}`,
          }}
        />
        {/* <img src={ornament6} alt='ornament4' style={styles.ornament6}/> */}
        {/* <img src={ornament5} alt='ornament3' style={styles.ornament5}/> */}
        {/* <img src={ornament3} alt='ornament3' style={styles.ornament3}/> */}
        {/* <img src={ornament4} alt='ornament4' style={styles.ornament4}/> */}
      </Box>
    </section>
  );
});

export default Home;
