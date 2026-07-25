import React, {useRef, forwardRef, useState, useEffect} from 'react';
import {Box, useTheme, Button, Typography} from '@mui/material';
import styled from 'styled-components';
import backgroundImage from '../assets/image/bgHome.png';
import brides from '../assets/image/home.jpg';
import frame from '../assets/image/FRAME.png';
import mask from '../assets/image/MASK.svg';
import aos from 'aos';
import 'aos/dist/aos.css';
import {motion, AnimatePresence} from 'framer-motion';

const Image = styled.img`
  mask-image: ${(p) => `url("${p.maskSrc}")`};
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: top;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Home = forwardRef((props, ref) => {
  const receptionDate = '2023-10-21T10:00:00';
  const mempelai1 = 'Romi';
  const mempelai2 = 'Rosyi';
  const hariTanggal = 'Sabtu, 21 Oktober 2023';
  const linkCalendar =
    'https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Oci+%26+Omi&location=https%3A%2F%2Fmaps.app.goo.gl%2F5a27GrQJCxSkEqW89&dates=20231021T100000+0700/20231021T160000+0700&details=https%3A%2F%2Fmenghitunghari2.vercel.app%2Fomi_oci';
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
    padding: '0 10%',
    color: theme.palette.primary.main,
  };

  const styles = {
    header: {
      color: theme.palette.primary.main,
      fontSize: `${140 + windowWidth * 0.07}%`,
      justifySelf: 'center',
      textAlign: 'center',
    },
    btn: {
      borderRadius: 12,
      zIndex: '1',
      padding: '4px 15px',
      margin: '10px 0',
      fontSize: '0.9rem',
      maxWidth: '80%',
      minWidth: '200px',
      color: theme.palette.light.main,
      backgroundColor: theme.palette.secondary.main,
    },
    countdown: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      padding: '7px',
      margin: '15px 0',
      width: '22%',
      height: '8vh',
      borderRadius: '15px',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.light.main,
      num: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '1.05rem',
        marginBottom: 0,
      },
    },
    txt: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '0.9rem',
      marginBottom: 0,
    },
    txt2: {
      textAlign: 'center',
      fontWeight: 400,
      fontSize: '1rem',
    },
    txt_estetik: {
      color: theme.palette.primary.main,
      fontFamily: 'lovely-thing',
      lineHeight: '70px',
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
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.light.main,
        display: 'grid',
        height: '100vh',
        alignItems: 'center',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <Box style={boxStyles}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Typography
            variant="h5"
            sx={{color: theme.palette.primary.main}}
          >
            The Wedding of
          </Typography>
          <div
            style={{
              position: 'relative',
              width: '200px',
              height: '280px',
            }}
          >
            <Image
              src={brides}
              maskSrc={mask}
              alt="brides"
              style={{
                position: 'absolute',
                top: '18px',
                left: '28px',

                width: '80%',
                height: '80%',
              }}
            />
            <img
              src={frame}
              alt="frame"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
            />
          </div>

          <Typography
            variant="h2"
            style={styles.txt_estetik}
            className="font-estetik"
          >
            {mempelai1} & {mempelai2}
          </Typography>
          <br />
          <Typography variant="p">
            Kami berharap Anda menjadi bagian dari hari istimewa kami
          </Typography>
          <Box
            sx={{
              display: 'flex',
              width: `100%`,
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
                    ...styles.countdown.num,
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
                    ...styles.countdown.num,
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
                    ...styles.countdown.num,
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
                    ...styles.countdown.num,
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
            {hariTanggal}
          </h1>
          <Button
            variant="contained"
            onClick={handleCalClick}
            style={styles.btn}
          >
            Save the Date
          </Button>
        </Box>
      </Box>
    </section>
  );
});

export default Home;
