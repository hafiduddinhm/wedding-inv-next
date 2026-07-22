import React, {useState, useEffect} from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import ornament1 from '../assets/image/ornamen.png';

const Closing = () => {
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

  const handleWhatsappClick = () => {
    window.open('http://wa.link/nd0byg');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/menghitunghari_inv');
  };

  const theme = useTheme();

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      marginTop: '-5vh',
      // backgroundImage: `url(${backgroundImage})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: '100% auto',
      // backgroundPosition: 'center center',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'dark.main',
      padding:
        windowWidth < 600 ? '10vh 15% 0vh 15%' : '30vh 15% 10vh 15%',
      overflow: 'hidden',
    },
    ornament1: {
      display: 'flex',
      zIndex: 0,
      // position: "absolute",
      width: `100%`,
      height: `${windowWidth * 0.06}vh`,
      backgroundImage: `url(${ornament1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    btnStyles: {
      borderRadius: 30,
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: '5%',
      width: '100%',
      backgroundColor: '#777687',
    },
    txt: {
      header: {
        fontSize: `${200 + windowWidth * 0.06}%`,
        marginBottom: '2vh',
        textAlign: 'center',
      },
      textAlign: 'center',
      fontSize: `${80 + windowWidth * 0.04}%`,
      fontWeight: '300',
      color: theme.palette.dark.main,
      marginBottom: '2vh',
    },
    img: {
      justifySelf: 'center',
      width: '13rem',
      marginBottom: '1vh',
    },
  };

  return (
    <div style={styles.section}>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        style={styles.ornament1}
      />
      <Box sx={styles.box}>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          style={styles.txt}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami,
          apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
          doa restu.
          <br />
          Atas kehadiran dan doa restunya, kami mengucapkan terima
          kasih.
          <br />
          <br />
          <span style={{fontWeight: 'bold'}}>
            Wassalamu'alaikum Warahmatullahi Wabarakatuh
          </span>
          <br />
          <br />
          -Uwin & Ajay-
        </p>
        <br />
        <br />
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          style={styles.txt}
        >
          Made with ♥ @MenghitungHari_inv
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            data-aos="zoom-in"
            data-aos-delay="500"
            size="medium"
            onClick={handleWhatsappClick}
            style={{
              backgroundColor: 'transparent',
              color: '#C26942',
              margin: '0 0px',
            }}
          >
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            data-aos="zoom-in"
            data-aos-delay="500"
            size="medium"
            onClick={handleInstagramClick}
            style={{
              backgroundColor: 'transparent',
              color: '#C26942',
              margin: '0 0px',
            }}
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </div>
  );
};

export default Closing;
