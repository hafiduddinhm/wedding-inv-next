import {useEffect, useState} from 'react';
import Modal from 'react-modal';
import {Box, Button, useTheme} from '@mui/material';

import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PlayAudio from './PlayAudio';
import backgroundImage from '../assets/image/bg.png';
import brides from '../assets/image/brides.png';
import bgOrnament from '../assets/image/2.png';
import flowerOrnament1 from '../assets/image/3.png';
import flowerOrnament2 from '../assets/image/15.png';
import flowerOrnament3 from '../assets/image/16.png';

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
      backgroundImage: `url(${backgroundImage})`,
      overflow: 'hidden',
    },
    overlay: {
      transition: 'opacity 500ms ease-in-out',
      position: 'absolute',
      zIndex: 3,
    },
  };
  const btnStyles = {
    borderRadius: 30,
    padding: `${7 + windowWidth * 0.005}px ${14 + windowWidth * 0.005}px`,
    right: '4%',
    bottom: '6%',
    position: 'absolute',
    zIndex: 5,
    fontSize: `${80 + windowWidth * 0.03}%`,
  };
  const bridesImgStyles = {
    height: '54vh',
    bottom: '15vh',
    position: 'absolute',
  };
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: window.innerHeight,
    overflowX: 'hidden',
  };
  const ornament1Styles = {
    right: '-17%',
    top: '5vh',
    zIndex: 2,
    position: 'absolute',
    width: '30%',
    display:
      windowWidth < 320 && windowHeight > 480 ? 'none' : 'block',
  };
  const ornament2Styles = {
    right: '-7%',
    top: '7rem',
    position: 'absolute',
    width: '24%',
    transform: 'scaleX(-1) scaleY(-1)',
    display:
      windowWidth < 320 && windowHeight > 480 ? 'none' : 'block',
  };
  const ornament3Styles = {
    left: windowWidth > 870 ? '-8%' : '0%',
    bottom: windowWidth > 870 ? '3vh' : '10vh',
    zIndex: 5,
    position: 'absolute',
    width: windowWidth / windowHeight < 1 ? '50%' : '30%',
    display:
      windowWidth < 320 && windowHeight > 480 ? 'none' : 'block',
  };
  const ornament4Styles = {
    left: '-8.5%',
    bottom: '12rem',
    position: 'absolute',
    width: '30%',
    transform: 'rotate(-80deg)',
    display:
      windowWidth < 320 && windowHeight > 480 ? 'none' : 'block',
  };
  const ornament5Styles = {
    left: windowWidth > 630 ? '0%' : '25%',
    bottom: windowWidth > 630 ? '2rem' : '8rem',
    zIndex: 2,
    position: 'absolute',
    width: '30%',
    transform: 'rotate(-10deg)',
    display:
      windowWidth < 320 && windowHeight > 480 ? 'none' : 'block',
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
        <p
          style={{
            color: theme.palette.gray.main,
            marginTop: '9vh',
            marginBottom: 10,
            fontFamily: 'Ovo',
          }}
        >
          The Wedding of
        </p>
        <h1
          style={{
            color: theme.palette.primary.main,
            fontFamily: 'Alex Brush',
            fontSize: '6vh',
          }}
          className="font-estetik"
        >
          Irfan & Yayuk
        </h1>
        <img src={flowerOrnament2} style={ornament2Styles}></img>
        <img src={flowerOrnament1} style={ornament1Styles}></img>
        <img src={flowerOrnament2} style={ornament5Styles}></img>
        <img src={flowerOrnament2} style={ornament4Styles}></img>
        <img src={flowerOrnament3} style={ornament3Styles}></img>
        <img src={brides} style={bridesImgStyles}></img>
        <Button
          variant="contained"
          onClick={closeModal}
          style={btnStyles}
        >
          <MailOutlinedIcon
            style={{
              marginRight: '7px',
              fontSize: `${80 + windowWidth * 0.03}%`,
            }}
          />
          Buka Undangan
        </Button>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30vh',
          }}
        >
          <img
            src={bgOrnament}
            style={{width: '100%', height: '100%'}}
          ></img>
        </div>
      </Box>
    </Modal>
  );
};
export default OpeningModal;
