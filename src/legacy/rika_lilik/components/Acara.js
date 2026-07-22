import React, {forwardRef, useState, useEffect} from 'react';
import {Grid, Box, Button, useTheme, Typography} from '@mui/material';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from '@react-google-maps/api';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import bg1 from '../assets/image/bgacara1.png';
import bg2 from '../assets/image/bgacara2.png';
import ornament from '../assets/image/acara1.png';
import lineornament1 from '../assets/image/ornament1.png';
import lineornament2 from '../assets/image/ornament2.png';
import line from '../assets/image/boundary.png';

const Acara = forwardRef((props, sectionRef) => {
  const linkLokasi = 'https://goo.gl/maps/kipLC4t9QQh7WdSW9';
  const [map, setMap] = useState(null);

  const location = {
    lat: -6.94025,
    lng: 111.594725,
  };
  const zoom = 17;
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

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

  const theme = useTheme();

  const handleButtonClick = () => {
    window.open(linkLokasi);
  };

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      overflow: 'hidden',
      marginTop: '-15vh',
    },
    bg1: {
      right: 0,
      zIndex: 0,
      position: 'absolute',
      marginTop: '0vh',
      width: `${90 + windowWidth * 0.012}%`,
      height: `${45 + windowWidth * 0.012}vh`,
      backgroundImage: `url(${bg1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    bg2: {
      left: 0,
      zIndex: 0,
      position: 'absolute',
      marginTop: '50vh',
      width: `${50 + windowWidth * 0.02}%`,
      height: `${65 + windowWidth * 0.02}vh`,
      backgroundImage: `url(${bg2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: '20vh 15% 0 15%',
    },
    ornament: {
      display: 'flex',
      justifySelf: 'center',
      alignSelf: 'start',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-15vh',
      width: `${95 - windowWidth * 0.012}%`,
      height: `${40 - windowWidth * 0.012}vh`,
      backgroundImage: `url(${ornament})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    },
    btnStyles: {
      borderRadius: 30,
      position: 'relative',
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: windowWidth > 600 ? '30vh' : '15vh',
      width: windowWidth > 600 ? '45%' : '80%',
      backgroundColor: '#F29999',
    },
    txt: {
      header: {
        fontSize: `${100 + windowWidth * 0.06}%`,
        marginTop: '2vh',
        textAlign: 'center',
      },
      h5: {
        textAlign: 'center',
        fontSize: `${90 + windowWidth * 0.04}%`,
        fontWeight: 'bold',
        color: theme.palette.dark.main,
      },
      textAlign: 'center',
      fontSize: `${75 + windowWidth * 0.04}%`,
      marginBottom: 0,
      color: theme.palette.dark.main,
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.bg1} />
      <Box sx={styles.box}>
        <div style={styles.ornament} />
        <p style={{...styles.txt, marginTop: '15vh'}}>
          Pernikahan akan diselenggarakan pada:
        </p>
        <br />
        <img src={lineornament1} style={{width: '100%'}} />
        <Grid
          container
          spacing={4}
          wrap="nowrap"
          style={{
            position: 'relative',
            marginTop: '0vh',
            marginLeft: '-2%',
            justifyContent: 'center',
          }}
        >
          <Grid
            item
            data-aos="fade-right"
            data-aos-duration="1500"
            xs={5}
            sm={5}
            style={{justifyContent: 'center', padding: 0}}
          >
            <Box
              style={{
                padding:
                  windowWidth > 600 ? '1% 5% 5% 5%' : '1% 5% 5% 5%',
              }}
            >
              <p
                className="font-serif"
                style={{...styles.txt.header}}
              >
                Akad Nikah
              </p>
              <p className="font-serif" style={{...styles.txt}}>
                09.00 s/d 10.00
              </p>
            </Box>
          </Grid>
          <Grid
            item
            data-aos="flip-up"
            data-aos-duration="1500"
            xs={1}
            sm={1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
            }}
          >
            <img src={line} style={{height: '70%'}} />
          </Grid>
          <Grid
            item
            data-aos="fade-left"
            data-aos-duration="1500"
            xs={5}
            sm={5}
            style={{justifyContent: 'center', padding: 0}}
          >
            <Box
              style={{
                padding:
                  windowWidth > 600 ? '1% 5% 5% 5%' : '1% 5% 5% 5%',
              }}
            >
              <p
                className="font-serif"
                style={{...styles.txt.header, letterSpacing: '2px'}}
              >
                Resepsi
              </p>
              <p className="font-serif" style={{...styles.txt}}>
                10.00 s/d selesai
              </p>
            </Box>
          </Grid>
        </Grid>
        <img src={lineornament2} style={{width: '100%'}} />
        <br />
        <Box data-aos="fade-up" data-aos-duration="1500">
          <p
            className="font-serif"
            style={{...styles.txt, fontWeight: '600'}}
          >
            Sabtu, 13 Mei 2023
          </p>
          <p className="font-serif" style={{...styles.txt}}>
            Kediaman mempelai wanita
            <br />
            (Dusun Krajan RT 003 RW 001 Desa Soko gunung Kec.
            kenduruan Kab. Tuban)
          </p>
        </Box>
        <br />
        <br />
        <div style={styles.bg2} />
        <div data-aos="fade-up" data-aos-duration="1500">
          <p className="font-serif" style={{...styles.txt}}>
            Ketuk untuk melihat lokasi pernikahan
          </p>
          <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
              mapContainerStyle={{width: '100%', height: '50vh'}}
              center={location}
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
                position={location}
                // label={`Lokasi Resepsi`}
                onClick={handleButtonClick}
              />
              <InfoWindow
                position={location}
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
        {/* <div style={{position: 'relative'}}>
                    <iframe
                        width="100%"
                        height="140vh"
                        src={mapUrl}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div> */}
        {/* <Button data-aos='fade-up' data-aos-duration="1500" variant="contained" onClick={handleButtonClick} style={styles.btnStyles}>
                    <PlaceIcon style={{ marginRight: '7px', fontSize: '1rem' }} />
                    Lihat Lokasi
                </Button> */}
      </Box>
    </section>
  );
});

export default Acara;
