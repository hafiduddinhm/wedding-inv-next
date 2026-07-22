import {useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import Modal from 'react-modal';
import {Box, Button, useTheme} from '@mui/material';
import {motion, transform} from 'framer-motion';
import {MailOutlined} from '@mui/icons-material';

import PlayAudio from './PlayAudio';
import backgroundImage from '../assets/image/bgModal.png';
import ornament1 from '../assets/image/opening1.png';
import ornament2 from '../assets/image/opening2.png';
import ornament3 from '../assets/image/opening3.png';
import ornament4 from '../assets/image/opening4.png';
import ornament5 from '../assets/image/opening5.png';
import ornament6 from '../assets/image/opening6.png';

const OpeningModal = () => {
  const audio = PlayAudio();
  const [isOpen, setIsOpen] = useState(true);

  const searchParams = useSearchParams();
  const [guest, setGuest] = useState('');

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
    Modal.setAppElement('body');
  }, []);

  useEffect(() => {
    const toParam = searchParams.get('to');
    setGuest(toParam);
  }, [searchParams]);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    document.body.style.overflowY = 'auto';
    setIsOpen(false);
    audio.play();
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
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100% 100%',
      overflow: 'hidden',
    },
    overlay: {
      transition: 'opacity 500ms ease-in-out',
      position: 'absolute',
      zIndex: 3,
    },
  };
  const styles = {
    innerBg: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '70%',
      height: '81vh',
      margin: '9vh 10% 9vh 10%',
      borderRadius:
        windowWidth > windowHeight ? '30% / 50%' : '50% / 25%',
      backgroundColor: '#D8C7B2',
      zIndex: 2,
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
          ? `${65 - windowHeight * 0.03}vh`
          : `${60 - windowWidth * 0.03}%`,
    },
    ornament2: {
      position: 'fixed',
      right: 0,
      bottom: 0,
      zIndex: 0,
      width:
        windowWidth > windowHeight
          ? `${70 - windowHeight * 0.03}vh`
          : `${65 - windowWidth * 0.03}%`,
    },
    ornament3: {
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 0,
      width:
        windowWidth > windowHeight
          ? `${65 - windowHeight * 0.03}vh`
          : `${60 - windowWidth * 0.03}%`,
    },
    ornament4: {
      position: 'fixed',
      left: '2%',
      top: 0,
      zIndex: 3,
      width:
        windowWidth > windowHeight
          ? `${90 - windowHeight * 0.03}vh`
          : `${75 - windowWidth * 0.03}%`,
    },
    ornament5: {
      position: 'fixed',
      left: '2%',
      bottom: 0,
      zIndex: 3,
      width:
        windowWidth > windowHeight
          ? `${80 - windowHeight * 0.03}vh`
          : `${75 - windowWidth * 0.03}%`,
    },
    ornament6: {
      position: 'fixed',
      right: 0,
      bottom: 0,
      zIndex: 3,
      width:
        windowWidth > windowHeight
          ? `${80 - windowHeight * 0.03}vh`
          : `${60 - windowWidth * 0.03}%`,
    },
    button: {
      position: 'fixed',
      zIndex: 4,
      transformOrigin: 'center',
      backgroundColor: theme.palette.dark.main,
      borderRadius: 30,
      fontSize:
        windowWidth > windowHeight
          ? `${2 + windowHeight * 0.001}vh`
          : `${15 + windowWidth * 0.2}%`,
    },
    txt1: {
      color: theme.palette.dark.main,
      marginBottom: 10,
      fontFamily: 'Josefin Sans',
      fontWeight: '300',
      textAlign: 'center',
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${1.5 + windowHeight * 0.002}vh`
          : `${20 + windowWidth * 0.2}%`,
    },
    txt2: {
      color: theme.palette.dark.main,
      fontFamily: 'malibu',
      textAlign: 'center',
      zIndex: 3,
      lineHeight: '0.9em',
      fontSize:
        windowWidth > windowHeight
          ? `${13 + windowHeight * 0.005}vh`
          : `${150 + windowWidth * 1.1}%`,
    },
  };
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: window.innerHeight,
    overflow: 'hidden',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={500}
      style={modalStyles}
    >
      <Box style={boxStyles}>
        <img src={ornament1} style={styles.ornament1} />
        <img src={ornament3} style={styles.ornament3} />
        <img src={ornament4} style={styles.ornament4} />

        <div style={styles.innerBg}>
          <h1
            style={{
              ...styles.txt1,
              marginTop: `${1 - windowWidth * 0.001}vh`,
              marginBottom: '3vh',
            }}
          >
            <i>
              Together with our families
              <br />
              we invite you to
            </i>
          </h1>
          <h1
            style={{
              ...styles.txt1,
              fontSize:
                windowWidth > windowHeight
                  ? `${3 + windowHeight * 0.003}vh`
                  : `${30 + windowWidth * 0.3}%`,
            }}
          >
            The Wedding of
          </h1>
          <h1 style={styles.txt2} className="font-estetik">
            Ozie &
          </h1>
          <h1 style={styles.txt2} className="font-estetik">
            Lusy
          </h1>
          {guest !== null && guest !== undefined && (
            <h1 style={{...styles.txt1, marginTop: '3vh'}}>
              Kepada Bapak/Ibu/Saudara/i
            </h1>
          )}
          {guest === null && (
            <>
              <br />
            </>
          )}
          <h1 style={{...styles.txt1, fontWeight: 'bold'}}>
            {guest}
          </h1>
          <img src={ornament5} style={styles.ornament5} />
          <img src={ornament6} style={styles.ornament6} />
          <motion.div
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            initial={{scale: 1}}
            style={{
              display: 'flex',
              position: 'relative',
              zIndex: 4,
              top: '3vh',
              justifyContent: 'center',
              alignItems: 'center',
            }}
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
          <br />
          <br />
        </div>
        <img src={ornament2} style={styles.ornament2} />
      </Box>
    </Modal>
  );
};
export default OpeningModal;
