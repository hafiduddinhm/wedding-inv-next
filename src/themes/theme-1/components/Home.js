import React, {useRef, forwardRef, useState, useEffect} from 'react';
import {Box, useTheme, Button, Typography} from '@mui/material';
import styled from 'styled-components';
import aos from 'aos';
import 'aos/dist/aos.css';
import {motion, AnimatePresence} from 'framer-motion';

import {useCoupleData} from '@/context/CoupleDataContext';
import backgroundImage from '../assets/image/bgHome.png';
import frame from '../assets/image/FRAME.png';
import mask from '../assets/image/MASK.svg';

const MaskedImage = styled.img`
  mask-image: ${(p) => `url("${p.maskSrc}")`};
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: top;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Home = forwardRef((props, ref) => {
  const data = useCoupleData();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
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
    padding: '0 10%',
    color: theme.palette.primary.main,
  };

  const styles = {
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
    if (ref) ref.current = sectionRef.current;
  }, [ref]);

  const handleCalClick = () => {
    const {calendarStart, calendarEnd, mapsLink} = data.event;
    const toIcsDate = (iso) =>
      iso.replace(/[-:]/g, '').replace('.000', '');
    const detailsUrl = `https://menghitunghari2.vercel.app/${data.slug}`;
    const url =
      'https://www.google.com/calendar/render?action=TEMPLATE' +
      `&text=${encodeURIComponent(`Pernikahan ${data.shortNames}`)}` +
      `&location=${encodeURIComponent(mapsLink)}` +
      `&dates=${toIcsDate(calendarStart)}+0700/${toIcsDate(calendarEnd)}+0700` +
      `&details=${encodeURIComponent(detailsUrl)}`;
    window.open(url);
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
          {data.heroFramed ? (
            <div
              style={{
                position: 'relative',
                width: '200px',
                height: '280px',
              }}
            >
              <MaskedImage
                src={data.heroImage}
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
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          ) : (
            <img
              src={data.heroImage}
              alt="brides"
              style={{width: '200px', paddingRight: '10px'}}
            />
          )}
          <Typography
            variant="h2"
            style={styles.txt_estetik}
            className="font-estetik"
          >
            {data.shortNames}
          </Typography>
          <br />
          <Typography variant="p">
            Kami berharap Anda menjadi bagian dari hari istimewa kami
          </Typography>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
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
                      ...styles.countdown.num,
                      position: 'absolute',
                    }}
                  >
                    {countdown[key]}
                  </motion.p>
                </AnimatePresence>
                <p style={{...styles.txt, marginTop: '3vh'}}>
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
              variant="contained"
              onClick={handleCalClick}
              style={styles.btn}
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
