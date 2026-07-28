import React, {forwardRef, useState, useEffect} from 'react';
import {Grid, Box, Button, useTheme, Typography} from '@mui/material';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from '@react-google-maps/api';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';

import {useCoupleData} from '@/context/CoupleDataContext';
import backgroundImage from '../assets/image/bgAcara.png';
import ornament1 from '../assets/image/acara1.png';

const Acara = forwardRef((props, sectionRef) => {
  const data = useCoupleData();
  const {akad, resepsi, mapsLink, location} = data.event;
  const zoom = 17;
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

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

  const theme = useTheme();

  const handleButtonClick = () => {
    window.open(mapsLink);
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
      margin: '5vh 7% 5vh 7%',
    },
    glass: {
      background: 'rgba(255, 254, 251, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 254, 251, 0.3)',
      padding: '20px',
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
          width: `${windowHeight > windowWidth ? '40%' : '22vh'}`,
          left: 0,
        }}
      />
      <Box sx={styles.box}>
        <Typography variant="h2" className="font-estetik">
          Save the Date
        </Typography>
        <p style={styles.txt}>
          Segala puji bagi Allah SWT yang telah melimpahkan ridho dan
          rahmat-Nya yang telah membimbing dan menuntun langkah kami
          menuju ikatan tali pernikahan yang insya Allah akan
          dilaksanakan pada:
        </p>
        <Grid
          container
          style={{
            position: 'relative',
            marginTop: '7vh',
            justifyContent: 'center',
          }}
        >
          <Grid
            item
            data-aos="fade-right"
            data-aos-duration="1500"
            xs={12}
            sm={6}
            style={{justifyContent: 'center', padding: 0}}
          >
            <Box style={styles.glass}>
              <Typography variant="h3" className="font-estetik">
                Akad Nikah
              </Typography>
              <Typography variant="h6">
                <b>{akad.date}</b>
                <br />
                Pukul <br />
                <b>{akad.time}</b>
                <br />
                Alamat: <br />
                {akad.address}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            data-aos="fade-left"
            data-aos-duration="1500"
            xs={12}
            sm={6}
            style={{justifyContent: 'center', padding: 0}}
          >
            <Box style={styles.glass}>
              <Typography variant="h3" className="font-estetik">
                Resepsi
              </Typography>
              <Typography variant="h6">
                <b>{resepsi.date}</b>
                <br />
                Pukul <br />
                <b>{resepsi.time}</b>
                <br />
                Alamat: <br />
                {resepsi.address}
              </Typography>
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
                zoomControlOptions: {position: 9, style: 3},
                mapTypeControl: false,
                streetViewControl: false,
              }}
            >
              <MarkerF
                position={location}
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
        </Box>
        <br />
      </Box>
    </section>
  );
});

export default Acara;
