/* eslint-disable react-hooks/rules-of-hooks */
import React, {forwardRef, useState, useEffect} from 'react';
import {
  Grid,
  Box,
  Button,
  useTheme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from '@react-google-maps/api';
import backgroundImage from '../assets/image/bgAcara.png';
import backgroundSection1 from '../assets/image/acara-section1.png';
import backgroundSection2 from '../assets/image/acara-section2.png';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import {NavigationOutlined} from '@mui/icons-material';
import {AnimatePresence, motion} from 'framer-motion';

const Acara = forwardRef((props, sectionRef) => {
  const linkLokasiAkad = 'https://maps.app.goo.gl/RWBtkVN5T9HA4K1y8';
  const linkLokasiResepsi =
    'https://maps.app.goo.gl/KcpgFDq2kRXbeNmR7';

  const location1 = {
    lat: -6.94016059337372,
    lng: 111.59488946931539,
  };
  const location2 = {
    lat: -6.865647283290817,
    lng: 111.65251904360241,
  };
  const zoom = 17;
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${location.lat},${location.lng}&zoom=${location.zoom}`;
  const [map, setMap] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const receptionDate = '2024-05-02T10:00:00';
  const linkCalendar =
    'https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Ajay+%26+Uwin&location=https%3A%2F%2Fgoo.gl%2Fmaps%2FSroySHvz8ViRGf6S8&dates=20230716T090000+0700/20230716T150000+0700&details=https%3A%2F%2Fmenghitunghari2.vercel.app%2Fajay%5Fuwin%2F1';

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  const isXs =
    useMediaQuery(theme.breakpoints.up('xs')) &&
    useMediaQuery(theme.breakpoints.down('sm'));
  const isSm =
    useMediaQuery(theme.breakpoints.up('sm')) &&
    useMediaQuery(theme.breakpoints.down('md'));

  const handleButtonClick = (type) => {
    if (type === 'akad') window.open(linkLokasiAkad);
    else window.open(linkLokasiResepsi);
  };

  const styles = {
    countdown: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      minWidth: '65px',
      width: '25%',
      padding: '1.6vh 5%',
      margin: '15px 0',
      borderRadius: `${(windowWidth - 360) * 0.02 + 8}px`,
      color: '#fff',
      backgroundColor: '#4BB2D2',
      fontFamily: 'roboto',
    },
    txt: {
      textAlign: 'center',
      fontSize: `${(windowWidth - 360) * 0.009 + 12}pt`,
      color: theme.palette.light.main,
      fontWeight: 300,
      marginTop: `${(windowWidth - 360) * 0.06 + 25}px`,
      fontFamily: 'roboto',
    },
    number: {
      position: 'absolute',
      textAlign: 'center',
      fontSize: `${(windowWidth - 360) * 0.033 + 22}pt`,
      color: theme.palette.light.main,
      fontWeight: 300,
      marginTop: `${(windowWidth - 360) * 0.005 + -7}px`,
      fontFamily: 'roboto',
    },
  };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: theme.palette.light.main,
        paddingBottom: '10vh',
        overflow: 'hidden',
        color: theme.palette.secondary.main,
      }}
    >
      <Box
        style={{
          margin: '1vh 5%',
          padding: '40px 20px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: isXs || isSm ? 'auto 100%' : '100% 100%',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 11,
          backgroundColor: 'white',
          boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {!isXs && !isSm && (
          <Typography variant="h3" className="font-estetik2">
            Save the Date
          </Typography>
        )}
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-right"
            data-aos-duration="1500"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              height="530px"
              width="291px"
              padding="80px 5%"
              sx={{
                backgroundImage: `url(${backgroundSection1})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Typography
                variant="h5"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Akad Nikah
              </Typography>
              <Box margin="20px 0">
                <Typography variant="body2">Kamis</Typography>
                <Typography variant="h2" marginTop="-10px">
                  02
                </Typography>
                <Typography variant="body2">Mei 2024</Typography>
              </Box>
              <Box margin="20px 0">
                <Typography variant="body2">
                  23 Syawal 1445
                </Typography>
                <Typography variant="body2">
                  Pukul 08.00 - 10.00 WIB
                </Typography>
              </Box>
              <Box margin="20px 0">
                <Typography variant="body2">
                  <b>Kamis, 2 Mei 2024</b>
                  <br />
                  Kediaman mempelai pria:
                  <br />
                  Dusun Krajan RT 002 RW 004 Desa Soko Gunung Kec.
                  Kenduruan Kab. Tuban
                </Typography>
              </Box>
              <Box marginTop="20px">
                <Button
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  variant="contained"
                  sx={{
                    borderRadius: '20px',
                    textTransform: 'none',
                    backgroundColor: 'gray',
                  }}
                  onClick={() => handleButtonClick('akad')}
                >
                  <NavigationOutlined
                    style={{marginRight: '7px', fontSize: '1rem'}}
                  />
                  Kunjungi Lokasi
                </Button>
              </Box>
            </Box>
            {!isXs && !isSm && (
              <>
                <div data-aos="flip-down" data-aos-duration="1500">
                  <Typography variant="body2">
                    Ketuk untuk melihat lokasi pernikahan
                  </Typography>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  style={{width: '100%', padding: '10px'}}
                >
                  <LoadScript googleMapsApiKey={API_KEY}>
                    <GoogleMap
                      mapContainerStyle={{
                        width: '100%',
                        height: '40vh',
                      }}
                      center={location1}
                      zoom={zoom}
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                      gestureHandling="cooperative"
                      options={{
                        zoomControlOptions: {
                          position: 9,
                          style: 3, // set the style of the zoom control to SMALL
                        },
                        mapTypeControl: false,
                        streetViewControl: false,
                      }}
                    >
                      <MarkerF
                        position={location1}
                        // label={`Lokasi Resepsi`}
                        onClick={() => handleButtonClick('akad')}
                      />
                      <InfoWindow
                        position={location1}
                        options={{
                          disableAutoPan: true,
                          closeBoxURL: '',
                        }}
                      >
                        <div style={{display: 'flex'}}>
                          <PlaceIcon style={{marginRight: '8px'}} />
                          <Typography
                            onClick={() => handleButtonClick('akad')}
                            variant="body1"
                          >
                            Lokasi Akad
                          </Typography>
                        </div>
                      </InfoWindow>
                    </GoogleMap>
                  </LoadScript>
                </div>
              </>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-left"
            data-aos-duration="1500"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              height="530px"
              width="291px"
              padding="80px 5%"
              sx={{
                backgroundImage: `url(${backgroundSection2})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Typography
                variant="h5"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Resepsi
              </Typography>
              <Box margin="20px 0">
                <Typography variant="body2">Kamis</Typography>
                <Typography variant="h2" marginTop="-10px">
                  02
                </Typography>
                <Typography variant="body2">Mei 2024</Typography>
              </Box>
              <Box margin="20px 0">
                <Typography variant="body2">
                  23 Syawal 1445
                </Typography>
                <Typography variant="body2">
                  Pukul 10.00 WIB - selesai
                </Typography>
              </Box>
              <Box margin="20px 0">
                <Typography variant="body2">
                  <b>Kamis, 2 Mei 2024</b>
                  <br />
                  Kediaman mempelai wanita:
                  <br />
                  Dusun Bader RT 002 RW 002 Desa Bader Kec. Jatirogo
                  Kab. Tuban
                </Typography>
              </Box>
              <Box marginTop="20px">
                <Button
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  variant="contained"
                  sx={{
                    borderRadius: '20px',
                    textTransform: 'none',
                    backgroundColor: 'gray',
                  }}
                  onClick={handleButtonClick}
                >
                  <NavigationOutlined
                    style={{marginRight: '7px', fontSize: '1rem'}}
                  />
                  Kunjungi Lokasi
                </Button>
              </Box>
            </Box>
            <div data-aos="flip-down" data-aos-duration="1500">
              <Typography variant="body2">
                Ketuk untuk melihat lokasi pernikahan
              </Typography>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{width: '100%', padding: '10px'}}
            >
              <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                  mapContainerStyle={{width: '100%', height: '40vh'}}
                  center={location2}
                  zoom={zoom}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                  gestureHandling="cooperative"
                  options={{
                    zoomControlOptions: {
                      position: 9,
                      style: 3, // set the style of the zoom control to SMALL
                    },
                    mapTypeControl: false,
                    streetViewControl: false,
                  }}
                >
                  <MarkerF
                    position={location2}
                    // label={`Lokasi Resepsi`}
                    onClick={handleButtonClick}
                  />
                  <InfoWindow
                    position={location2}
                    options={{disableAutoPan: true, closeBoxURL: ''}}
                  >
                    <div style={{display: 'flex'}}>
                      <PlaceIcon style={{marginRight: '8px'}} />
                      <Typography
                        onClick={handleButtonClick}
                        variant="body1"
                      >
                        Lokasi Resepsi
                      </Typography>
                    </div>
                  </InfoWindow>
                </GoogleMap>
              </LoadScript>
            </div>
          </Grid>
        </Grid>
        <Box margin="50px 0" width="80%">
          <Typography variant="h4" className="font-estetik2">
            Menuju Hari H
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={styles.countdown}>
              <AnimatePresence>
                <motion.div
                  key={countdown.days}
                  exit={{y: 20, opacity: 0}}
                  initial={{y: -40, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  style={{
                    ...styles.number,
                  }}
                >
                  {countdown.days}
                </motion.div>
              </AnimatePresence>
              <Typography
                variant="body2"
                style={{
                  ...styles.txt,
                }}
              >
                Hari
              </Typography>
            </Box>
            <Box sx={styles.countdown}>
              <AnimatePresence>
                <motion.p
                  key={countdown.hours}
                  exit={{y: 20, opacity: 0}}
                  initial={{y: -40, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  style={{
                    ...styles.number,
                  }}
                >
                  {countdown.hours}
                </motion.p>
              </AnimatePresence>
              <Typography
                variant="body2"
                style={{
                  ...styles.txt,
                }}
              >
                Jam
              </Typography>
            </Box>
            <Box sx={styles.countdown}>
              <AnimatePresence>
                <motion.p
                  key={countdown.minutes}
                  exit={{y: 20, opacity: 0}}
                  initial={{y: -40, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  style={{
                    ...styles.number,
                  }}
                >
                  {countdown.minutes}
                </motion.p>
              </AnimatePresence>
              <Typography
                variant="body2"
                style={{
                  ...styles.txt,
                }}
              >
                Menit
              </Typography>
            </Box>
            {/* <Box sx={styles.countdown}>
            <AnimatePresence>
              <motion.div
                key={countdown.seconds}
                exit={{ y: 20, opacity: 0 }}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                  ...styles.number,
                }}
              >
                {countdown.seconds}
              </motion.div>
            </AnimatePresence>
            <Typography variant="body2"
              style={{
                ...styles.txt,
              }}
            >
              Detik
            </Typography>
          </Box> */}
          </Box>
        </Box>
      </Box>
    </section>
  );
});

export default Acara;
