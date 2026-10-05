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

// "Rabu, 28 Oktober 2026" -> {weekday, day, month, year}
const parseDate = (text = '') => {
  const [weekday = '', rest = ''] = text.split(', ');
  const [day = '', month = '', year = ''] = rest.split(' ');
  return {
    weekday,
    day: String(parseInt(day, 10) || day),
    month,
    year,
  };
};

// "10.00 WIB s/d selesai" -> ["10.00 WIB", "s/d selesai"]
const splitTime = (time = '') => {
  const index = time.indexOf('s/d ');
  return index > 0
    ? [time.slice(0, index).trim(), time.slice(index)]
    : [time, ''];
};

const Acara = forwardRef((props, sectionRef) => {
  const data = useCoupleData();
  const {akad, resepsi, mapsLink, location, hijriDate} = data.event;
  const {turutMengundang} = data;
  // Same date and place: show one combined block instead of two cards.
  const isCombined =
    akad.date === resepsi.date && akad.address === resepsi.address;
  const {weekday, day, month, year} = parseDate(akad.date);
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
        {isCombined ? (
          <Box
            data-aos="fade-up"
            data-aos-duration="1500"
            style={{
              ...styles.glass,
              maxWidth: '480px',
              width: '100%',
              justifySelf: 'center',
              marginTop: '7vh',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              {weekday}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                marginY: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: '5.5rem',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {day}
              </Typography>
              <Box sx={{textAlign: 'left'}}>
                <Typography
                  variant="h5"
                  sx={{
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                  }}
                >
                  {month}
                </Typography>
                <Typography variant="h5" sx={{lineHeight: 1.2}}>
                  {year}
                </Typography>
              </Box>
            </Box>
            {hijriDate && (
              <Typography variant="subtitle1">{hijriDate}</Typography>
            )}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 2,
              }}
            >
              {[
                {label: 'Akad Nikah', time: akad.time},
                {label: 'Resepsi', time: resepsi.time},
              ].map((item, index) => (
                <Box
                  key={item.label}
                  sx={{
                    flex: 1,
                    paddingX: 1,
                    borderLeft: index
                      ? '1px solid currentColor'
                      : 'none',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      fontSize: '0.95rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="h6" sx={{fontWeight: 700}}>
                    {splitTime(item.time)[0]}
                    <br />
                    {splitTime(item.time)[1] || ' '}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography variant="h6" sx={{marginTop: 2}}>
              {akad.address}
            </Typography>
          </Box>
        ) : (
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
                  <b>
                    {akad.date}
                    {hijriDate && (
                      <>
                        <br />
                        {hijriDate}
                      </>
                    )}
                  </b>
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
                  <b>
                    {resepsi.date}
                    {hijriDate && (
                      <>
                        <br />
                        {hijriDate}
                      </>
                    )}
                  </b>
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
        )}
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
        {turutMengundang && turutMengundang.length > 0 && (
          <Box
            data-aos="fade-up"
            data-aos-duration="1500"
            sx={{marginTop: 4}}
          >
            <Typography variant="h6">
              <b>Turut Mengundang</b>
            </Typography>
            {turutMengundang.map((name) => (
              <Typography key={name} variant="body1">
                {name}
              </Typography>
            ))}
          </Box>
        )}
        <br />
        {location && (
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
        )}
        <br />
      </Box>
    </section>
  );
});

export default Acara;
