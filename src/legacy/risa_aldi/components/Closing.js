import React, {useState, useEffect} from 'react';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import pitalokaLogo from '../../../logo/black.png';
import mhLogo from '../../../logo/2.png';
import bg1 from '../assets/image/bgclosing1.png';
import bg2 from '../assets/image/bgclosing2.png';
import ornament1 from '../assets/image/closing1.png';
import ornament2 from '../assets/image/closing2.png';
import {Instagram, WhatsApp} from '@mui/icons-material';

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
    window.open(
      'https://api.whatsapp.com/send?phone=6289602959322&text=Haloo%2C%20apakah%20disini%20bisa%20memesan%20undangan%20digital%3F%20saya%20.....%20ingin%20memesan%20undangan%20digital%2C%20bolehkah%20tanya-tanya%3F',
    );
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/menghitunghari_inv');
  };

  const theme = useTheme();

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'dark.main',
      padding:
        windowWidth < 600 ? '20vh 10% 30vh 10%' : '50vh 10% 15vh 10%',
      overflow: 'hidden',
    },
    bg1: {
      left: 0,
      zIndex: 0,
      position: 'absolute',
      marginTop: '45vh',
      width: `${80 + windowWidth * 0.02}%`,
      height: `${55 + windowWidth * 0.02}vh`,
      backgroundImage: `url(${bg1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    bg2: {
      right: 0,
      zIndex: 0,
      position: 'absolute',
      marginTop: '60vh',
      width: `${70 + windowWidth * 0.012}%`,
      height: `${60 + windowWidth * 0.012}vh`,
      backgroundImage: `url(${bg2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    ornament1: {
      left: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-20vh',
      width: `${30 + windowWidth * 0.008}%`,
      height: `${30 + windowWidth * 0.005}vh`,
      backgroundImage: `url(${ornament1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
      overflow: 'hidden',
    },
    ornament2: {
      right: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-25vh',
      width: `${35 + windowWidth * 0.008}%`,
      height: `${35 + windowWidth * 0.005}vh`,
      backgroundImage: `url(${ornament2})`,
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
      h5: {
        textAlign: 'center',
        fontSize: `${90 + windowWidth * 0.04}%`,
        fontWeight: 'bold',
        color: theme.palette.dark.main,
      },
      larger: {
        textAlign: 'center',
        fontSize: `${110 + windowWidth * 0.04}%`,
        color: theme.palette.dark.main,
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
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
      <div style={styles.bg2} />
      <div style={styles.bg1} />
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
        <br />
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          style={styles.txt}
        >
          <i>
            Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
            menciptakan untukmu isteri-isteri dari jenismu sendiri,
            supaya kamu cenderung dan merasa tenteram kepadanya, dan
            dijadikan-Nya diantaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat
            tanda-tanda bagi kaum yang berfikir.
          </i>
        </p>
        <p
          data-aos="flip-left"
          data-aos-duration="500"
          data-aos-delay="500"
          style={styles.txt}
        >
          (Q.S Ar-Rum : 21)
        </p>
        <br />
        <br />
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
          Wassalamu'alaikum Wr. Wb.
          <br />
          <br />
          -RISA & ALDI-
        </p>
        <br />
        <br />
        <Typography
          variant="p"
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{marginTop: '5vh'}}
        >
          Made with ♥
        </Typography>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifySelf: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{width: '80px', padding: '5px'}}
            src={mhLogo}
            alt="mhLogo"
          />
          X
          <img
            style={{width: '70px', padding: '5px'}}
            src={pitalokaLogo}
            alt="pitalokaLogo"
          />
        </div>
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
            <WhatsApp fontSize="inherit" />
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
            <Instagram fontSize="inherit" />
          </IconButton>
        </div>
      </Box>
      <div style={styles.ornament1} />
      <div style={styles.ornament2} />
    </div>
  );
};

export default Closing;
