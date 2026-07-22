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
import ornament1 from '../assets/image/acara1.png';
import ornament2 from '../assets/image/acara2.png';
import line from '../assets/image/boundary.png';

const Acara = forwardRef((props, sectionRef) => {
  const hari = 'Minggu';
  const tanggal = '15 September 2024';
  const jamAkad = '09.00 s/d 11.00';
  const jamResepsi = '11.30 s/d selesai';
  const alamat =
    'Kp. Lembur Gede RT 01 RW 01 Desa Tanjunglaya Kec. Cikancung Kab. Bandung ';

  const linkLokasi = 'https://maps.app.goo.gl/waMoPPEL2mizUgK57';

  const location = {
    lat: -6.995935620421519,
    lng: 107.81423449167225,
  };
  const zoom = 17;
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${location.lat},${location.lng}&zoom=${location.zoom}`;

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

  const handleButtonClick = () => {
    window.open(linkLokasi);
  };

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      textAlign: 'center',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: `5vh 7% 5vh 7%`,
    },
    glass: {
      background: 'rgba(255, 254, 251, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 254, 251, 0.3)',
      padding: '10px',
      margin: '10px',
      textAlign: 'center',
    },
    btnStyles: {
      borderRadius: 30,
      position: 'relative',
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      width: '70%',
      maxWidth: '300px',
      backgroundColor: theme.palette.primary.main,
    },
    headerTxt: {
      fontSize: `${100 + windowWidth * 0.06}%`,
      marginTop: '2vh',
      textAlign: 'center',
    },
    txt: {
      textAlign: 'center',
      fontSize: `${75 + windowWidth * 0.04}%`,
      marginBottom: 0,
      color: theme.palette.dark.main,
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
          alignSelf: 'left',
          marginTop: '-10vh',
          width: `${windowHeight > windowWidth ? '40%' : '35vh'}`,
          left: 0,
        }}
      />
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={ornament2}
        alt="flower"
        style={{
          position: 'absolute',
          alignSelf: 'left',
          marginTop: '32vh',
          width: `${windowHeight > windowWidth ? '40%' : '35vh'}`,
          left: 0,
        }}
      />
      <Box sx={styles.box}>
        <div style={styles.txt}>
          Pernikahan akan diselenggarakan pada:
        </div>
        <Grid
          container
          style={{
            position: 'relative',
            marginTop: '2vh',
            justifyContent: 'center',
          }}
        >
          <Grid
            item
            data-aos="fade"
            data-aos-duration="1500"
            xs={12}
            sm={6}
            style={{justifyContent: 'center', padding: 0}}
          >
            <Box className="font-serif" style={styles.glass}>
              <Grid
                container
                spacing={4}
                wrap="nowrap"
                style={{
                  position: 'relative',
                  marginTop: '0vh',
                  marginLeft: '-4%',
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
                        windowWidth > 600
                          ? '1% 5% 5% 5%'
                          : '1% 5% 5% 5%',
                    }}
                  >
                    <p style={{...styles.headerTxt}}>Akad Nikah</p>
                    <p style={{...styles.txt, fontWeight: '600'}}>
                      {jamAkad}
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
                    src={line}
                    alt="line"
                    style={{height: '70%'}}
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
                        windowWidth > 600
                          ? '1% 5% 5% 5%'
                          : '1% 5% 5% 5%',
                    }}
                  >
                    <p
                      style={{
                        ...styles.headerTxt,
                        letterSpacing: '2px',
                      }}
                    >
                      Resepsi
                    </p>
                    <p style={{...styles.txt, fontWeight: '600'}}>
                      {jamResepsi}
                    </p>
                  </Box>
                </Grid>
              </Grid>
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                style={{...styles.txt, margin: '7px 0'}}
              >
                <div style={{fontWeight: '600'}}>
                  {hari}, {tanggal}
                </div>
                <p>{alamat}</p>
              </div>
            </Box>
          </Grid>
        </Grid>
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
        <Box data-aos="fade-up" data-aos-duration="1500">
          <Typography variant="p">
            Ketuk untuk melihat lokasi pernikahan
          </Typography>
          <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '50vh',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                borderRadius: 20,
              }}
              center={location}
              zoom={zoom}
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
                  <style>
                    {`
                        .gm-style-iw button[title="Close"] {
                        display: none !important;
                        }
                    `}
                  </style>
                </div>
              </InfoWindow>
            </GoogleMap>
          </LoadScript>
        </Box>
        <br />
      </Box>
    </section>
  );
});

export default Acara;
