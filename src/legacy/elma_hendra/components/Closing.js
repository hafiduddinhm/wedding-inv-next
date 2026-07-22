import React, {useState, useEffect} from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import ornament from '../assets/image/closing.png';

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
      backgroundImage: `url(${ornament})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left bottom',
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
      width: '100%',
      height: '100%',
      display: windowWidth < 320 ? 'none' : 'block',
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
      fontSize: `${60 + windowWidth * 0.04}%`,
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
          -HENDRA & ELMA-
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
            size="small"
            onClick={handleWhatsappClick}
            style={{
              backgroundColor: theme.palette.dark.main,
              color: 'white',
              margin: '0 5px',
            }}
          >
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            data-aos="zoom-in"
            data-aos-delay="500"
            size="small"
            onClick={handleInstagramClick}
            style={{
              backgroundColor: theme.palette.dark.main,
              color: 'white',
              margin: '0 5px',
            }}
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
        </div>
        <br />
      </Box>
    </div>
  );
};

export default Closing;
