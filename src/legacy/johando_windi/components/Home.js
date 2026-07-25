import React, {
  useRef,
  forwardRef,
  // useState,
  useEffect,
} from 'react';
import {
  Box,
  useTheme,
  // Button,
  Typography,
} from '@mui/material';

import backgroundImage from '../assets/image/bgHome.png';
import ornament from '../assets/image/ornament-home.png';
import ornament2 from '../assets/image/ornament2-home.png';
import aos from 'aos';
import 'aos/dist/aos.css';
// import { motion, AnimatePresence } from "framer-motion";

const Home = forwardRef((props, ref) => {
  // const receptionDate = "2023-07-16T09:00:00";
  // const linkCalendar =
  //   "https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Ajay+%26+Uwin&location=https%3A%2F%2Fgoo.gl%2Fmaps%2FSroySHvz8ViRGf6S8&dates=20230716T090000+0700/20230716T150000+0700&details=https%3A%2F%2Fmenghitunghari2.vercel.app%2Fajay%5Fuwin%2F1";
  // const [countdown, setCountdown] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //     setWindowHeight(window.innerHeight);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    aos.init();
  }, []);

  // useEffect(() => {
  //   const targetDate = new Date(receptionDate);
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const difference = targetDate - now;

  //     if (difference > 0) {
  //       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  //       const minutes = Math.floor((difference / 1000 / 60) % 60);
  //       const seconds = Math.floor((difference / 1000) % 60);

  //       setCountdown({
  //         days,
  //         hours,
  //         minutes,
  //         seconds,
  //       });
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const theme = useTheme();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current = sectionRef.current;
    }
  }, [ref]);

  // const handleCalClick = () => {
  //   window.open(linkCalendar);
  // };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: theme.palette.light.main,
        height: '100vh',
        paddingBottom: '15vh',
        overflow: 'hidden',
        color: theme.palette.primary.main,
      }}
    >
      <Box
        style={{
          margin: '5vh 5%',
          padding: '40px 20px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 11,
          backgroundColor: 'white',
          boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-between',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Typography className="font-estetik2" variant="h4">
          Save the Date
        </Typography>
        <img src={ornament2} style={{width: '250px'}} alt="" />
        <Typography className="font-serif" variant="h5">
          Johando & Windi
        </Typography>
        <Box
          height={`160px`}
          width="100%"
          sx={{
            color: theme.palette.primary.main,
            backgroundImage: `url(${ornament})`,
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'moontime',
            fontSize: 46,
          }}
        >
          J & W
        </Box>
        <Typography className="font-serif" variant="h5">
          2 Mei 2024
        </Typography>
        <img src={ornament2} style={{width: '250px'}} alt="" />
        {/* <Box
            sx={{
              display: "flex",
              width: `80%`,
              justifyContent: "space-between",
            }}
          >
            <Box sx={styles.countdown}>
              <AnimatePresence>
                <motion.p
                  key={countdown.days}
                  exit={{ y: 20, opacity: 0 }}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    ...styles.txt,
                    position: "absolute",
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
                  exit={{ y: 20, opacity: 0 }}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    ...styles.txt,
                    position: "absolute",
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
                  exit={{ y: 20, opacity: 0 }}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    ...styles.txt,
                    position: "absolute",
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
                  exit={{ y: 20, opacity: 0 }}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    ...styles.txt,
                    position: "absolute",
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
          </Box> */}
        <Typography variant="body2">
          Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya
          kamu mengingat kebesaran Allah. <br />
          (QS Az-Zariyat Ayat 49)
        </Typography>
        {/* <Button
            variant="outlined"
            onClick={handleCalClick}
            style={styles.btnStyles}
          >
            Save the Date
          </Button> */}
      </Box>
    </section>
  );
});

export default Home;
