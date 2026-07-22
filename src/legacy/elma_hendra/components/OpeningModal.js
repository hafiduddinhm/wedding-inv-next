import {useEffect, useState} from 'react';
import Modal from 'react-modal';
import {Box, Button, useTheme} from '@mui/material';
import {motion} from 'framer-motion';

import PlayAudio from './PlayAudio';
import ornament from '../assets/image/ornamen.png';
import imageButton from '../assets/image/openingButton.png';
import ornament1 from '../assets/image/opening1.png';
import ornament2 from '../assets/image/opening2.png';

const OpeningModal = () => {
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
      backgroundColor: theme.palette.light.main,
      overflow: 'hidden',
    },
    overlay: {
      transition: 'opacity 500ms ease-in-out',
      position: 'absolute',
      zIndex: 3,
    },
  };
  const styles = {
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
    imageButton: {
      display: 'inline-block',
      position: 'fixed',
      transformOrigin: 'center',
      top: '50%',
      left: '50%',
      // transform: `translate(-50%, ${-15+windowWidth*0.001}%)`,
      zIndex: 3,
      width:
        windowWidth > windowHeight
          ? `${65 - windowHeight * 0.05}vh`
          : `${85 - windowWidth * 0.05}%`,
    },
    txt1: {
      color: theme.palette.gray.main,
      marginTop: `${15 - windowWidth * 0.001}vh`,
      marginBottom: 10,
      fontFamily: 'moontime',
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${-5 + windowHeight * 0.025}vh`
          : `${100 + windowWidth * 0.5}%`,
    },
    txt2: {
      color: theme.palette.primary.main,
      fontFamily: 'Glacial Indifference',
      textAlign: 'center',
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${1 + windowHeight * 0.005}vh`
          : `${40 + windowWidth * 0.25}%`,
    },
  };
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: window.innerHeight,
    overflow: 'hidden',
  };

  const audio = PlayAudio();

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    document.body.style.overflowY = 'auto';
    setIsOpen(false);
    audio.play();
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
        <h1 style={styles.txt1} className="font-estetik">
          The Wedding of
        </h1>
        <br />
        <h1 style={styles.txt2}>
          Hendra & Elma
          <br />
          15 Mei 2023
        </h1>
        <img src={ornament} style={styles.ornament}></img>
        <br />
        <motion.img
          src={imageButton}
          alt="Button"
          onClick={closeModal}
          style={styles.imageButton}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          initial={{scale: 1, x: '-50%', y: '-5%'}}
        />
        <img src={ornament2} style={styles.ornament2} />
      </Box>
    </Modal>
  );
};
export default OpeningModal;
