import {useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import Modal from 'react-modal';
import {Box, Button, useTheme} from '@mui/material';
import {MailOutlined} from '@mui/icons-material';
import {motion} from 'framer-motion';

import bg from '../assets/image/bgModal.png';

const OpeningModal = ({onClosed = () => {}}) => {
  const searchParams = useSearchParams();
  const [guest, setGuest] = useState('');
  const [isOpen, setIsOpen] = useState(true);

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
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const toParam = searchParams.get('to');
    setGuest(toParam);
  }, [searchParams]);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    document.body.style.overflowY = 'auto';
    setIsOpen(false);
    onClosed();
  };

  const theme = useTheme();

  const modalStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      position: 'absolute',
      zIndex: 3,
      padding: '0',
      border: 'none',
      borderRadius: '0',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(0,0,0,1)',
      overflow: 'hidden',
    },
    overlay: {
      transition: 'opacity 500ms ease-in-out',
      position: 'absolute',
      zIndex: 3,
    },
  };

  const boxStyles = {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'center',
    height: window.innerHeight,
    overflow: 'hidden',
    padding: '6.8vh 8.5%',
  };

  const styles = {
    box2: {
      textAlign: 'center',
      justifyItems: 'center',
      position: 'fixed',
      display: 'grid',
      bottom: '12%',
      //   left: "8.5%",
      zIndex: 4,
    },
    ornament: {
      width: `${50 - windowWidth * 0.025}%`,
    },
    ornament1: {
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 0,
      width:
        windowWidth > windowHeight
          ? `${95 - windowHeight * 0.03}vh`
          : `${50 - windowWidth * 0.03}%`,
    },
    ornament2: {
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 0,
      width:
        windowWidth > windowHeight
          ? `${105 - windowHeight * 0.03}vh`
          : `${60 - windowWidth * 0.03}%`,
    },
    letterOrnament: {
      width: `${90 - windowWidth * 0.045}%`,
      position: 'absolute',
      justifySelf: 'center',
      alignSelf: 'center',
      marginTop: '-10vh',
    },
    button: {
      transformOrigin: 'center',
      backgroundColor: '#043D6A',
      borderRadius: 30,
      fontSize:
        windowWidth > windowHeight
          ? `${2 + windowHeight * 0.001}vh`
          : `${15 + windowWidth * 0.2}%`,
    },
    txt_estetik: {
      color: theme.palette.light.main,
      fontFamily: 'moontime',
      lineHeight: '35px',
      zIndex: 3,
      fontSize: '10vh',
    },
    txt1: {
      color: theme.palette.light.main,
      fontFamily: 'Playfair Display',
      fontWeight: 700,
      zIndex: 3,
      // fontSize: windowWidth>windowHeight ?
      // `${(-5+windowHeight*0.025)}vh` :
      // `${(50+windowWidth*0.1)}%`,
    },
    txt2: {
      color: theme.palette.light.main,
      fontFamily: 'Glacial Indifference',
      fontWeight: 400,
      zIndex: 3,
      fontSize: '13px',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={500}
      style={modalStyles}
    >
      <Box style={boxStyles}>
        <Box style={styles.box2}>
          <h1
            className="font-estetik"
            style={{...styles.txt_estetik, marginBottom: 15}}
          >
            Save
            <br />
            <span
              style={{
                ...styles.txt_estetik,
                fontSize: '6vh',
              }}
            >
              the
            </span>
            <br />
            Date
          </h1>
          <Box sx={{marginBottom: '2vh'}}>
            <h1 style={styles.txt2}>The Wedding of</h1>
            <h1
              style={{
                ...styles.txt1,
                fontSize: '25px',
              }}
            >
              Uwin and Ajay
            </h1>
          </Box>
          <Box sx={{marginBottom: '3vh'}}>
            {guest !== null && guest !== undefined && (
              <>
                <h1 style={styles.txt2}>
                  Kepada Bapak/Ibu/Saudara/i
                </h1>
                <h1
                  style={{
                    ...styles.txt2,
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  {guest}
                </h1>
              </>
            )}
            {guest === null && (
              <>
                <br />
              </>
            )}
          </Box>
          <motion.div
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            initial={{scale: 1}}
          >
            <Button
              variant="contained"
              onClick={closeModal}
              style={styles.button}
            >
              <MailOutlined
                style={{
                  marginRight: '7px',
                  fontSize: `${90 + windowWidth * 0.03}%`,
                }}
              />
              Buka Undangan
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Modal>
  );
};
export default OpeningModal;
