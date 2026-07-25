import React, {useRef, forwardRef, useState, useEffect} from 'react';
import {Box, useTheme, Button} from '@mui/material';
import backgroundImage from '../assets/image/bgHome.png';
import aos from 'aos';
import 'aos/dist/aos.css';
import {motion, AnimatePresence} from 'framer-motion';

const Home = forwardRef((props, ref) => {
  const receptionDate = '2023-07-16T09:00:00';
  const linkCalendar =
    'https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Ajay+%26+Uwin&location=https%3A%2F%2Fgoo.gl%2Fmaps%2FSroySHvz8ViRGf6S8&dates=20230716T090000+0700/20230716T150000+0700&details=https%3A%2F%2Fmenghitunghari2.vercel.app%2Fajay%5Fuwin%2F1';
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
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    aos.init();
  }, []);

  useEffect(() => {
    const targetDate = new Date(receptionDate);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference / (1000 * 60 * 60)) % 24,
        );
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
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
      //   padding: "0vh 1%",
      fontWeight: 400,
      fontSize: '1rem',
    },
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current = sectionRef.current;
    }
  }, [ref]);

  const handleCalClick = () => {
    window.open(linkCalendar);
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
            Uwin and Ajay
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
            <Box sx={styles.countdown}>
              <AnimatePresence>
                <motion.p
                  key={countdown.days}
                  exit={{y: 20, opacity: 0}}
                  initial={{y: -40, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  style={{
                    ...styles.txt,
                    position: 'absolute',
                  }}
                >
                  {countdown.days}
                </motion.p>
              </AnimatePresence>
              <p
                style={{
                  ...styles.txt,
                  marginTop: `3vh`,
                }}
              >
                Hari
              </p>
            </Box>
            <Box sx={styles.countdown}>
              <AnimatePresence>
                <motion.p
                  key={countdown.hours}
                  exit={{y: 20, opacity: 0}}
                  initial={{y: -40, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  style={{
                    ...styles.txt,
                    position: 'absolute',
                  }}
                >
                  {countdown.hours}
                </motion.p>
              </AnimatePresence>
              <p
                style={{
                  ...styles.txt,
                  marginTop: `3vh`,
                }}
              >
                Jam
              </p>
            </Box>
            <Box sx={styles.countdown}>
              <AnimatePresence>
                <motion.p
                  key={countdown.minutes}
                  exit={{y: 20, opacity: 0}}
                  initial={{y: -40, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  style={{
                    ...styles.txt,
                    position: 'absolute',
                  }}
                >
                  {countdown.minutes}
                </motion.p>
              </AnimatePresence>
              <p
                style={{
                  ...styles.txt,
                  marginTop: `3vh`,
                }}
              >
                Menit
              </p>
            </Box>
            <Box sx={styles.countdown}>
              <AnimatePresence>
                <motion.p
                  key={countdown.seconds}
                  exit={{y: 20, opacity: 0}}
                  initial={{y: -40, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  style={{
                    ...styles.txt,
                    position: 'absolute',
                  }}
                >
                  {countdown.seconds}
                </motion.p>
              </AnimatePresence>
              <p
                style={{
                  ...styles.txt,
                  marginTop: `3vh`,
                }}
              >
                Detik
              </p>
            </Box>
          </Box>
          <h1 style={{...styles.txt2, fontWeight: 'bold'}}>
            Minggu, 16 Juli 2023
          </h1>
          <Button
            variant="outlined"
            onClick={handleCalClick}
            style={styles.btnStyles}
          >
            Save the Date
          </Button>
        </Box>
      </Box>
    </section>
  );
});

export default Home;
