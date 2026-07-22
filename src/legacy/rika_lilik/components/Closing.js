import React, {useState, useEffect} from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import flower2 from '../assets/image/closing.png';
import flower from '../assets/image/ucapan.png';
import ornament1 from '../assets/image/closing1.png';
import ornament2 from '../assets/image/closing2.png';
import resin from '../assets/image/bgucapan1.png';

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
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'dark.main',
      padding:
        windowWidth < 600 ? '50vh 10% 15vh 10%' : '60vh 10% 15vh 10%',
      overflow: 'hidden',
    },
    bg1: {
      left: 0,
      zIndex: 0,
      position: 'absolute',
      marginTop: '95vh',
      width: `${35 + windowWidth * 0.02}%`,
      height: `${30 + windowWidth * 0.02}vh`,
      backgroundImage: `url(${resin})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    flower: {
      right: 0,
      zIndex: 2,
      position: 'absolute',
      marginTop: '60vh',
      width: `${30 + windowWidth * 0.005}%`,
      height: `${35 + windowWidth * 0.005}vh`,
      backgroundImage: `url(${flower})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    flower2: {
      left: 0,
      zIndex: 2,
      position: 'absolute',
      marginTop: `${32 + windowWidth * 0.01}vh`,
      width: `${30 - windowWidth * 0.007}%`,
      height: `${35 - windowWidth * 0.007}vh`,
      backgroundImage: `url(${flower2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    ornament1: {
      left: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-10vh',
      width: `${20 + windowWidth * 0.025}%`,
      height: `${20 + windowWidth * 0.01}vh`,
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
      width: `${45 + windowWidth * 0.025}%`,
      height: `${45 + windowWidth * 0.01}vh`,
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
      <div style={styles.bg1} />
      <div
        style={styles.flower2}
        data-aos="zoom-in"
        data-aos-duration="1500"
      />
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
          -RIKA & LILIK-
        </p>
        <br />
        <br />
        <div
          style={styles.flower}
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
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
      </Box>
      <div style={styles.ornament1} />
      <div style={styles.ornament2} />
    </div>
  );
};

export default Closing;
