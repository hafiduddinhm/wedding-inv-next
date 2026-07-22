import React, {useState, useEffect} from 'react';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import backgroundImage from '../assets/image/bgGaleri.png';

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
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      backgroundPosition: 'center center',
      textAlign: 'center',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'primary.main',
      padding: '10vh 10% 10vh 10%',
      overflow: 'hidden',
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
      color: theme.palette.primary.main,
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
      <Box sx={styles.box}>
        <Typography
          variant="h1"
          className="font-estetik"
          sx={{
            textAlign: 'center',
            lineHeight: '40px',
            marginBottom: '10vh',
          }}
        >
          Sampai
          <br />
          jumpa!
        </Typography>
        <Typography
          variant="body1"
          data-aos="fade-up"
          data-aos-duration="1500"
          style={{
            fontWeight: '300',
            textAlign: 'center',
          }}
        >
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
          menciptakan untukmu isteri-isteri dari jenismu sendiri,
          supaya kamu cenderung dan merasa tenteram kepadanya, dan
          dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya
          pada yang demikian itu benar-benar terdapat tanda-tanda bagi
          kaum yang berfikir.
        </Typography>
        <Typography
          variant="body1"
          data-aos="flip-left"
          data-aos-delay="700"
          style={{
            fontWeight: '700',
            textAlign: 'center',
            margin: '0 7%',
          }}
        >
          (QS. Ar-Rum : 21)
        </Typography>
        <Typography
          variant="body1"
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{marginTop: '8vh'}}
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
          <span style={{fontWeight: 'bold'}}>-Putri & Ipan-</span>
        </Typography>
        <Typography
          variant="p"
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{marginTop: '5vh'}}
        >
          Made with ♥ @MenghitungHari_inv
        </Typography>
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
