import React, {useState, useEffect} from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import backgroundImage from '../assets/image/bgHome.png';
import ornament1 from '../assets/image/closing1.png';
import ornament2 from '../assets/image/closing2.png';

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
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'dark.main',
      padding:
        windowWidth < 600 ? '50vh 15% 15vh 15%' : '60vh 15% 15vh 15%',
      overflow: 'hidden',
    },
    ornament1: {
      right: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '0vh',
      marginBottom: '-100vh',
      width: `${30 + windowWidth * 0.04}%`,
      height: `${30 + windowWidth * 0.04}vh`,
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
      marginBottom: '-100vh',
      width: `${85 + windowWidth * 0.005}%`,
      height: `${50 + windowWidth * 0.005}vh`,
      backgroundImage: `url(${ornament2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
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
      <Box sx={styles.box}>
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
          -OZIE & LUSY-
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
        <div style={styles.ornament2} />
        <div style={styles.ornament1} />
      </Box>
    </div>
  );
};

export default Closing;
