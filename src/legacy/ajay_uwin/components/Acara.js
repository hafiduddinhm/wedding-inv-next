import React, {forwardRef, useState, useEffect} from 'react';
import {Grid, Box, Button, useTheme, Typography} from '@mui/material';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from '@react-google-maps/api';
import backgroundImage from '../assets/image/bgAcara.png';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import ornament1 from '../assets/image/ornamen.png';
import line1 from '../assets/image/line1.png';

const Acara = forwardRef((props, sectionRef) => {
  const linkLokasi = 'https://goo.gl/maps/SroySHvz8ViRGf6S8';

  const location = {
    lat: -7.025639,
    lng: 107.866611,
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

  const theme = useTheme();

  const handleButtonClick = () => {
    window.open(linkLokasi);
  };

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100% auto',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.dark',
      margin: `${10 + windowWidth * 0.01}vh 7% 70vh 7%`,
    },
    box2: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      color: 'primary.dark',
      margin: `5vh 0%`,
    },
    btnStyles: {
      borderRadius: 30,
      position: 'relative',
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: windowWidth > 600 ? '5vh' : '0vh',
      width: windowWidth > 600 ? '35%' : '80%',
      backgroundColor: theme.palette.primary.main,
    },
    ornament1: {
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-5vh',
      width: `100%`,
      height: `${35 + windowWidth * 0.03}vh`,
      backgroundImage: `url(${ornament1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    txt: {
      header: {
        fontSize: `${120 + windowWidth * 0.06}%`,
        marginTop: '2vh',
        textAlign: 'center',
        fontWeight: '300',
      },
      textAlign: 'center',
      fontSize: `${65 + windowWidth * 0.04}%`,
      color: theme.palette.dark.main,
      marginBottom: '-0.1rem',
      fontWeight: 300,
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <Box sx={styles.box}>
        <p style={styles.txt}>
          <span style={{fontWeight: 'bold'}}>
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </span>
          <br />
          <br />
          Segala puji bagi Allah SWT yang telah melimpahkan ridho dan
          rahmat-Nya yang telah membimbing dan menuntun langkah kami
          menuju ikatan tali pernikahan yang insya Allah akan
          dilaksanakan pada:
        </p>
        <Grid
          container
          spacing={4}
          wrap="nowrap"
          style={{
            position: 'relative',
            marginTop: '7vh',
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
              <p style={{...styles.txt, fontWeight: 'bold'}}>
                Selasa
                <br />
                11 Juli 2023
                <br />
                10.00 WIB s/d selesai
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
            <img
              src={line1}
              style={{height: '75%', paddingTop: 15}}
              alt=""
            />
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
              <p style={{...styles.txt, fontWeight: 'bold'}}>
                Minggu
                <br />
                16 Juli 2023
                <br />
                09.00 WIB s/d selesai
              </p>
            </Box>
          </Grid>
        </Grid>
        <Box
          data-aos="fade-up"
          data-aos-duration="1500"
          style={styles.box2}
        >
          <p style={{...styles.txt}}>
            <span style={{fontWeight: 'bold'}}>
              Lokasi Akad & Resepsi:
            </span>
            <br />
            Kediaman Mempelai Wanita
            <br />
            Kp. Pameungpeuk RT 04 RW 03 Desa Bojong Kec. Nagreg Kab.
            Bandung
          </p>
        </Box>
        <div data-aos="fade-up" data-aos-duration="1500">
          <p style={{...styles.txt}}>
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
        <br />
        <Button
          data-aos="fade-up"
          data-aos-duration="1500"
          variant="contained"
          onClick={handleButtonClick}
          style={styles.btnStyles}
        >
          <PlaceIcon style={{marginRight: '7px', fontSize: '1rem'}} />
          Lihat Lokasi
        </Button>
        <br />
        <br />
      </Box>
    </section>
  );
});

export default Acara;
