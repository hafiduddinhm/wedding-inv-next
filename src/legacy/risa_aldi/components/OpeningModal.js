import {forwardRef, useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Slide,
  useTheme,
} from '@mui/material';
import {MailOutlined} from '@mui/icons-material';

import letterOrnament from '../assets/image/opening.png';
import ornament1 from '../assets/image/opening1.png';
import ornament2 from '../assets/image/opening2.png';
import ornament3 from '../assets/image/opening3.png';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const OpeningModal = ({onClosed = () => {}}) => {
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
    const toParam = searchParams.get('to');
    setGuest(toParam);
  }, [searchParams]);

  const theme = useTheme();

  const styles = {
    box2: {
      textAlign: 'left',
      justifyItems: 'left',
      position: 'absolute',
      bottom: '7%',
      left: '8.5%',
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
          : `${80 - windowWidth * 0.03}%`,
    },
    ornament2: {
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 0,
      width: '40%',
    },
    ornament3: {
      position: 'fixed',
      right: 0,
      bottom: 0,
      zIndex: 0,
      width: '45%',
    },
    letterOrnament: {
      width: `${100 - windowWidth * 0.045}%`,
      position: 'absolute',
      justifySelf: 'center',
      alignSelf: 'center',
      marginTop: '-10vh',
    },
    button: {
      transformOrigin: 'center',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 30,
      fontSize:
        windowWidth > windowHeight
          ? `${2 + windowHeight * 0.001}vh`
          : `${15 + windowWidth * 0.2}%`,
    },
    txt1: {
      color: theme.palette.primary.main,
      fontFamily: 'moontime',
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${-5 + windowHeight * 0.025}vh`
          : `${170 + windowWidth * 0.5}%`,
    },
    txt2: {
      color: theme.palette.secondary.main,
      fontFamily: 'Roboto',
      fontWeight: 300,
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${windowHeight * 0.005}vh`
          : `${60 + windowWidth * 0.1}%`,
    },
  };
  const boxStyles = {
    display: 'grid',
    // flexDirection: 'column',
    // alignItems: 'center',
    height: window.innerHeight,
    overflow: 'hidden',
    padding: '6.8vh 8.5%',
  };

  // const audio = PlayAudio()
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    // document.body.style.overflowY = "auto";
    setIsOpen(false);
    onClosed();
  };

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      fullScreen
      onClose={handleClose}
    >
      <DialogContent>
        <Box style={boxStyles}>
          <img
            src={ornament1}
            alt="flower1"
            style={styles.ornament1}
          />
          <img
            src={ornament2}
            alt="flower2"
            style={styles.ornament2}
          />
          <h1
            style={{
              ...styles.txt1,
              textAlign: 'end',
              justifySelf: 'right',
            }}
            className="font-estetik"
          >
            Save the
            <br />
            Date
          </h1>
          <img
            src={letterOrnament}
            alt="brides"
            style={styles.letterOrnament}
          />
          <Box style={styles.box2}>
            <Box sx={{marginBottom: '3vh'}}>
              <h1 style={styles.txt2}>The Wedding of</h1>
              <h1
                style={{
                  ...styles.txt1,
                  fontSize: `${2.2 + windowWidth * 0.001}rem`,
                }}
              >
                Risa & Aldi
              </h1>
            </Box>
            <Box sx={{marginBottom: '4vh'}}>
              {guest !== null && guest !== undefined && (
                <>
                  <h1 style={styles.txt2}>
                    Kepada Bapak/Ibu/Saudara/i
                  </h1>
                  <h1 style={{...styles.txt2, fontWeight: 'bold'}}>
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
            <Button
              variant="contained"
              onClick={handleClose}
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
          </Box>
          <img
            src={ornament3}
            alt="flower3"
            style={styles.ornament3}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default OpeningModal;
