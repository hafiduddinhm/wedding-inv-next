import React, {forwardRef, useState, useEffect} from 'react';
import {Grid, Box, Button, useTheme, Typography} from '@mui/material';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from '@react-google-maps/api';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import backgroundImage from '../assets/image/bgAcara.png';

const Acara = forwardRef((props, sectionRef) => {
  const linkLokasi = 'https://goo.gl/maps/inffUEmwiEWBDq8YA';

  const location = {
    lat: -6.8771885,
    lng: 111.5790249,
  };
  const zoom = 17;
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${location.lat},${location.lng}&zoom=${location.zoom}`;
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
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      marginTop: '-35vh',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: '0% 15%',
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
      fontSize: `${70 + windowWidth * 0.04}%`,
      color: theme.palette.dark.main,
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <Box sx={styles.box}>
        {/* <div style={styles.ornament1} /> */}
        <Grid
          container
          spacing={4}
          style={{
            position: 'relative',
            marginTop:
              windowWidth < 600
                ? '60%'
                : `${20 - windowWidth * 0.01}%`,
            marginLeft: '-5%',
            justifyContent: 'center',
          }}
        >
          <Grid
            data-aos="fade-right"
            data-aos-duration="1500"
            item
            xs={12}
            sm={6}
            style={{justifyContent: 'center', padding: 0}}
          >
            <h2
              className="font-estetik"
              style={{textAlign: 'center'}}
            >
              Akad Nikah
            </h2>
            <Box
              style={{
                padding:
                  windowWidth > 600 ? '1% 5% 5% 5%' : '1% 5% 5% 5%',
              }}
            >
              <p style={styles.txt}>
                SENIN, 15 Mei 2023
                <br />
                Pukul 09.00 WIB s/d Selesai
                <br />
                Alamat: Rumah mempelai wanita (Dsn.Ngablak, Ds.
                Mrayun, RT 003 RW 005, Kec. Sale, Kab. Rembang){' '}
              </p>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="1500"
            item
            xs={12}
            sm={6}
            style={{justifyContent: 'center', padding: 0}}
          >
            <h2
              className="font-estetik"
              style={{textAlign: 'center'}}
            >
              Resepsi
            </h2>
            <Box
              style={{
                padding:
                  windowWidth > 600 ? '1% 5% 5% 5%' : '1% 5% 5% 5%',
              }}
            >
              <p style={styles.txt}>
                SENIN, 15 Mei 2023
                <br />
                Pukul 10.00 WIB s/d Selesai
                <br />
                Alamat: Rumah mempelai wanita (Dsn.Ngablak, Ds.
                Mrayun, RT 003 RW 005, Kec. Sale, Kab. Rembang)
              </p>
            </Box>
          </Grid>
        </Grid>
        <br />
        <div data-aos="fade-up" data-aos-duration="1500">
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
        <br />
        <br />
      </Box>
    </section>
  );
});

export default Acara;
