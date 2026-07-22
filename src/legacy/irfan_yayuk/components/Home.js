import React, {useRef, forwardRef, useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import backgroundImage from '../assets/image/bg.png';
import bgOrnament from '../assets/image/4.png';
import bgOrnament2 from '../assets/image/12.png';
import flowerOrnament1 from '../assets/image/home.png';
import flowerOrnament2 from '../assets/image/home2.png';
import flowerOrnament3 from '../assets/image/home1.png';
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: `100vh`,
    overflow: 'hidden',
  };

  const ornament1Styles = {
    left: '0%',
    bottom:
      windowHeight / windowWidth > 0.75
        ? `${10 - windowHeight * 0.38}px`
        : `${10 - windowHeight * 0.32}px`,
    position: 'absolute',
    display:
      windowWidth < 320 && windowHeight > 480 ? 'none' : 'block',
    width: `${Math.min(windowWidth, windowHeight) * 0.55}px`,
  };

  const ornament2Styles = {
    right: `${-10 + windowWidth * 0.004}%`,
    top: `${-windowWidth * 0.01}vh`,
    position: 'absolute',
    display:
      windowWidth < 320 && windowHeight > 480 ? 'none' : 'block',
    width: `${Math.min(windowWidth, windowHeight) * 0.3}px`,
  };

  const ornament3Styles = {
    left: `${-5 + windowWidth * 0.001}%`,
    top: `${1.5 + windowHeight * 0.001}%`,
    position: 'absolute',
    display:
      windowWidth < 320 && windowHeight > 480 ? 'none' : 'block',
    width: `${Math.min(windowWidth, windowHeight) * 0.32}px`,
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current = sectionRef.current;
    }
  }, [ref]);

  const styles = {
    header: {
      color: theme.palette.primary.main,
      fontSize: `${140 + windowWidth * 0.07}%`,
      justifySelf: 'center',
      textAlign: 'center',
    },
  };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        overflow: 'hidden',
      }}
    >
      <Box style={boxStyles}>
        <div
          style={{
            position: 'absolute',
            top: '10vh',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
          }}
        >
          <img
            src={bgOrnament2}
            style={{width: '100%', height: '100%'}}
          ></img>
        </div>
        <div
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 0,
          }}
        >
          <div style={ornament3Styles}>
            <img
              src={flowerOrnament3}
              style={{width: '100%', height: '100%'}}
            ></img>
          </div>
        </div>
        <p
          className="font-estetik"
          style={{
            color: theme.palette.gray.main,
            marginTop: '16.5vh',
            marginBottom: 10,
            zIndex: 0,
            fontSize: '5vh',
          }}
        >
          The Wedding of
        </p>
        <div
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 0,
          }}
        >
          <div style={ornament2Styles}>
            <img
              src={flowerOrnament2}
              style={{width: '100%', height: '100%'}}
            ></img>
          </div>
        </div>
        <br />
        <h1
          style={Object.assign({}, styles.header, {
            marginTop: '10vh',
          })}
        >
          Irfan Arif Widya Kusuma
        </h1>
        <h1 style={styles.header}>&</h1>
        <h1 style={styles.header}>Yayuk Susanti</h1>
        <br />
        <h1
          style={{
            color: theme.palette.primary.main,
            fontSize: `${110 + windowWidth * 0.07}%`,
            marginTop: '2vh',
          }}
        >
          — 07 May 2023 —
        </h1>
        <div
          style={{
            position: 'absolute',
            bottom: -57,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
          }}
        >
          <img
            src={bgOrnament}
            style={{width: '100%', height: '100%'}}
          ></img>
        </div>
        <div
          style={{
            position: 'relative',
            left: 0,
            width: '100%',
            zIndex: 0,
          }}
        >
          <div style={ornament1Styles}>
            <img
              src={flowerOrnament1}
              style={{width: '100%', height: '100%'}}
            ></img>
          </div>
        </div>
      </Box>
    </section>
  );
});

export default Home;
