import React, {forwardRef, useState, useEffect} from 'react';
import {Grid, Box, Button, useTheme, Typography} from '@mui/material';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import backgroundImage from '../assets/image/bgAcara.png';
import ornament1 from '../assets/image/acara1.png';
import ornament2 from '../assets/image/acara2.png';
import line1 from '../assets/image/line1.png';
import line2 from '../assets/image/line2.png';
import line3 from '../assets/image/line3.png';

const Acara = forwardRef((props, sectionRef) => {
  const linkLokasi =
    'https://www.google.com/maps?q=-6.965381,111.7095535';

  const location = {
    lat: -6.965381,
    lng: 111.709554,
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
      backgroundPosition: 'top right',
      backgroundSize: '100% auto',
      overflow: 'hidden',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.dark',
      margin: `${35 + windowWidth * 0.03}vh 7% 20vh 7%`,
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
      right: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-5vh',
      width: `${45 + windowWidth * 0.05}%`,
      height: `${35 + windowWidth * 0.03}vh`,
      backgroundImage: `url(${ornament1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    ornament2: {
      left: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-2vh',
      width: `${45 + windowWidth * 0.05}%`,
      height: `${32 + windowWidth * 0.03}vh`,
      backgroundImage: `url(${ornament2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    txt: {
      header: {
        fontSize: `${120 + windowWidth * 0.06}%`,
        marginTop: '2vh',
        textAlign: 'center',
        fontWeight: '300',
      },
      textAlign: 'center',
      fontSize: `${80 + windowWidth * 0.04}%`,
      color: theme.palette.dark.main,
      marginBottom: '-0.1rem',
      fontWeight: 300,
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        style={styles.ornament1}
      />
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        style={styles.ornament2}
      />
      <Box sx={styles.box}>
        <h2
          style={{
            ...styles.txt,
            fontWeight: 500,
            letterSpacing: '2.5px',
          }}
        >
          Pernikahan akan diselenggarakan pada:
        </h2>
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
              <p style={{...styles.txt.header}}>Akad Nikah</p>
              <p style={{...styles.txt}}>08.00 - 10.00 WIB</p>
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
            <img src={line1} style={{height: '80%'}} />
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
              <p style={{...styles.txt.header, letterSpacing: '2px'}}>
                Resepsi
              </p>
              <p style={{...styles.txt}}>13.00 - 19.00 WIB</p>
            </Box>
          </Grid>
        </Grid>
        <Box
          data-aos="fade-up"
          data-aos-duration="1500"
          style={styles.box2}
        >
          <img
            src={line2}
            style={{width: `${90 - windowWidth * 0.03}%`}}
          />
          <p style={{...styles.txt}}>
            JUMAT, 12 Mei 2023
            <br />
            Jl. Rondo Kuning RT 003 RW 007
            <br />
            Desa Bangilan Kecamatan Bangilan Tuban
          </p>
          <img
            src={line3}
            style={{width: `${90 - windowWidth * 0.03}%`}}
          />
        </Box>
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
        <br />
        <br />
        <br />
      </Box>
    </section>
  );
});

export default Acara;
