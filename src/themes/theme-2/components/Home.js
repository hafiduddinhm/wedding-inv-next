import React, {useRef, forwardRef, useState, useEffect} from 'react';
import {Box, useTheme, Button} from '@mui/material';
import aos from 'aos';
import 'aos/dist/aos.css';
import {motion, AnimatePresence} from 'framer-motion';

import {useCoupleData} from '@/context/CoupleDataContext';
import backgroundImage from '../assets/image/bgHome.png';

const Home = forwardRef((props, ref) => {
  const data = useCoupleData();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    aos.init();
  }, []);

  useEffect(() => {
    const targetDate = new Date(data.event.countdownTarget);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    btnStyles: {
      border: `1.5px solid ${theme.palette.light.main}`,
      borderRadius: 30,
      zIndex: '1',
      position: 'relative',
      padding: '8px 15px',
      margin: '10px 0',
      fontSize: '0.75rem',
      width: windowWidth > 600 ? '45%' : '80%',
      color: theme.palette.light.main,
    },
    countdown: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      padding: '7px',
      margin: '15px 0',
      width: '20%',
      height: '7vh',
      borderRadius: '7px',
      backgroundColor: theme.palette.light.main,
    },
    txt: {
      color: 'black',
      textAlign: 'center',
      fontSize: '0.8rem',
      marginBottom: 0,
    },
    txt1: {
      color: 'white',
      textAlign: 'center',
      fontSize:
        windowWidth > windowHeight
          ? `${9}vh`
          : `${80 + windowWidth * 0.25}%`,
    },
    txt2: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 400,
      fontSize: '1rem',
    },
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    if (ref) ref.current = sectionRef.current;
  }, [ref]);

  const handleCalClick = () => {
    const {calendarStart, calendarEnd} = data.event;
    const toIcsDate = (iso) =>
      iso.replace(/[-:]/g, '').replace('.000', '');
    const detailsUrl = `https://menghitunghari2.vercel.app/${data.slug}`;
    const url =
      'https://www.google.com/calendar/render?action=TEMPLATE' +
      `&text=${encodeURIComponent(`Pernikahan ${data.shortNames}`)}` +
      `&location=${encodeURIComponent(data.event.mapsLink)}` +
      `&dates=${toIcsDate(calendarStart)}+0700/${toIcsDate(calendarEnd)}+0700` +
      `&details=${encodeURIComponent(detailsUrl)}`;
    window.open(url);
  };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0,0,0,1)',
        display: 'grid',
        height: '100vh',
        alignItems: 'end',
        paddingBottom: '15vh',
        overflow: 'hidden',
      }}
    >
      <Box style={boxStyles}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1
            className="font-serif"
            style={{
              ...styles.txt1,
            }}
          >
            {data.shortNames}
          </h1>
          <h1 style={styles.txt2}>
            We invite you to celebrate our wedding
          </h1>
          <Box
            sx={{
              display: 'flex',
              width: `80%`,
              justifyContent: 'space-between',
            }}
          >
            {[
              ['days', 'Hari'],
              ['hours', 'Jam'],
              ['minutes', 'Menit'],
              ['seconds', 'Detik'],
            ].map(([key, label]) => (
              <Box sx={styles.countdown} key={key}>
                <AnimatePresence>
                  <motion.p
                    key={countdown[key]}
                    exit={{y: 20, opacity: 0}}
                    initial={{y: -40, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    style={{
                      ...styles.txt,
                      position: 'absolute',
                    }}
                  >
                    {countdown[key]}
                  </motion.p>
                </AnimatePresence>
                <p
                  style={{
                    ...styles.txt,
                    marginTop: `3vh`,
                  }}
                >
                  {label}
                </p>
              </Box>
            ))}
          </Box>
          <h1 style={{...styles.txt2, fontWeight: 'bold'}}>
            {data.description}
          </h1>
          {data.event.calendarStart && (
            <Button
              variant="outlined"
              onClick={handleCalClick}
              style={styles.btnStyles}
            >
              Save the Date
            </Button>
          )}
        </Box>
      </Box>
    </section>
  );
});

export default Home;
