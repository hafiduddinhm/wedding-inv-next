import React, {forwardRef, useState, useEffect} from 'react';
import backgroundImage from '../assets/image/bgGaleri.webp';
import ornament1 from '../assets/image/galeri1.png';
import ornament2 from '../assets/image/galeri2.png';
import bgOrnament from '../assets/image/bgOrnament.png';
import {useTheme} from '@mui/material';

const Gallery = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const theme = useTheme();

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      paddingBottom: `${15 + windowWidth * 0.01}vh`,
      zIndex: -2,
    },
    ornament1: {
      justifySelf: 'start',
      alignSelf: 'start',
      marginTop: '-30vh',
      position: 'absolute',
      zIndex: 0,
      left: 0,
      width: `${55 + windowWidth * 0.01}%`,
      height: `${35 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${ornament1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    ornament2: {
      right: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-32vh',
      width: `${55 + windowWidth * 0.01}%`,
      height: `${40 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${ornament2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    bgOrnament: {
      position: 'absolute',
      marginTop: '-15vh',
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: `${18 + windowWidth * 0.01}vh`,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.bgOrnament}>
        <img
          src={bgOrnament}
          style={{width: '100%', height: '100%'}}
        ></img>
      </div>
      <div
        style={styles.ornament2}
        data-aos="fade-down"
        data-aos-duration="1500"
      />
      <div
        style={styles.ornament1}
        data-aos="fade-down"
        data-aos-duration="1500"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Gallery;
