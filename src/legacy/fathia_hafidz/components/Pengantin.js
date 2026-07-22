import React, {forwardRef, useState, useEffect} from 'react';
import {Box, Typography, useTheme} from '@mui/material';
// import {Instagram} from '@mui/icons-material';
import ornament1 from '../assets/image/pengantin1.png';
import backgroundImage from '../assets/image/bgPengantin.png';

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

  const theme = useTheme();

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      color: theme.palette.primary.main,
      padding: '20vh 10% 10vh 10%',
      overflow: 'hidden',
      textAlign: 'center',
    },
    box: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    txt: {
      textAlign: 'center',
      fontWeight: 300,
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={ornament1}
        alt="flower"
        style={{
          position: 'absolute',
          alignSelf: 'right',
          marginTop: '-20vh',
          width: `${windowHeight > windowWidth ? '25%' : '22vh'}`,
          right: 0,
        }}
      />
      <Box sx={styles.box}>
        <Typography
          variant="p"
          className="font-estetik"
          style={{marginTop: '2vh'}}
        >
          Assalamualaikum Warahmatullah Wabarakatuh
        </Typography>
        <Typography
          variant="p"
          style={{
            ...styles.txt,
          }}
        >
          Dengan memohon Ridho serta Rahmat Allah SWT, Kami mengundang
          Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri
          acara pernikahan kami:
        </Typography>
        <Box
          data-aos="fade-right"
          data-aos-duration="1500"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10%',
          }}
        >
          <Typography
            variant="h4"
            className="font-estetik"
            style={{marginTop: '2vh'}}
          >
            Fathia Ilmiati
          </Typography>
          <Typography variant="h6" style={{marginBottom: '1vh'}}>
            (Fathia)
          </Typography>
          <Typography variant="p" style={styles.txt}>
            Putri Pertama dari Bpk Abdul Haris & Ibu Nurul Mutmainah
          </Typography>
          {/* <IconButton
            size="small"
            onClick={() =>
              window.open('https://instagram.com/ipanrustiana')
            }
            sx={{margin: '5px'}}>
            <Instagram fontSize="small" />
          </IconButton> */}
        </Box>
        <Typography
          variant="h5"
          data-aos="flip-left"
          data-aos-duration="1500"
          className="font-estetik"
          style={{marginTop: '2vh'}}
        >
          &
        </Typography>
        <Box
          data-aos="fade-left"
          data-aos-duration="1500"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h4"
            className="font-estetik"
            style={{marginTop: '2vh', fontSize: '32px'}}
          >
            Muhammad Hafidz Taufan Akbar
          </Typography>
          <Typography variant="h6" style={{marginBottom: '1vh'}}>
            (Hafidz)
          </Typography>
          <Typography variant="p" style={styles.txt}>
            Putra Pertama dari Bpk Muslihaji & Ibu Erna Ningsih
          </Typography>
          {/* <IconButton
            size="small"
            onClick={() =>
              window.open('https://instagram.com/putridestianaf')
            }
            sx={{margin: '5px'}}>
            <Instagram fontSize="small" />
          </IconButton> */}
        </Box>
      </Box>
    </section>
  );
});

export default Pengantin;
