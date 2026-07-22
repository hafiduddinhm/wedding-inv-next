import React, {useEffect, useState, forwardRef} from 'react';
import {useSearchParams} from 'next/navigation';
import {
  Button,
  useTheme,
  Dialog,
  DialogContent,
  Slide,
  Typography,
  Stack,
} from '@mui/material';
import {MailOutlined} from '@mui/icons-material';

import bg from '../assets/image/home.jpg';
import ornament from '../assets/image/modal.png';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const OpeningModal = ({onClosed = () => {}}) => {
  const searchParams = useSearchParams();
  const [guest, setGuest] = useState('');
  const [open, setOpen] = useState(true);

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

  // if (open) {
  //   document.body.style.overflow = "hidden";
  // }

  const handleClose = () => {
    // document.body.style.overflowY = "auto";
    setOpen(false);
    onClosed();
  };

  const theme = useTheme();

  const styles = {
    txt_estetik: {
      fontFamily: 'lovely-thing',
      lineHeight: '70px',
    },
    txt_p: {
      fontFamily: 'EB Garamond',
    },
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      fullScreen
      onClose={handleClose}
      PaperProps={{
        style: {
          background: `url(${bg}) no-repeat center center`,
          backgroundSize: 'auto 100%',
          backgroundColor: theme.palette.dark.main,
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          alignItems: 'left',
          margin: '10vh 10%',
          padding: 0,
          textAlign: 'left',
          color: theme.palette.light.main,
        }}
      >
        <Typography variant="h6">The Wedding of</Typography>
        <Typography
          variant="h2"
          style={styles.txt_estetik}
          className="font-estetik"
        >
          Romi & Rosyi
        </Typography>
        <Stack>
          {guest !== null && guest !== undefined && (
            <Typography variant="subtitle1">
              Kepada Bapak/Ibu/Saudara/i
            </Typography>
          )}
          {guest === null && (
            <>
              <br />
            </>
          )}
          <Typography variant="h6">
            <strong>{guest}</strong>
          </Typography>
        </Stack>
        <br />
        <Button
          variant="contained"
          onClick={handleClose}
          // style={styles.button}
          sx={{borderRadius: 20, maxWidth: '30%', minWidth: '210px'}}
        >
          <MailOutlined
            style={{
              marginRight: '7px',
              fontSize: `${90 + windowWidth * 0.03}%`,
            }}
          />
          Buka Undangan
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default OpeningModal;
