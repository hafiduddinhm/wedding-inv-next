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

import bg from '../assets/image/bgModal.png';
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
      color: theme.palette.primary.main,
      fontFamily: 'amoresa-aged',
      lineHeight: '60px',
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
          backgroundSize: 'cover',
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '10vh 10%',
          padding: 0,
          textAlign: 'center',
          color: theme.palette.primary.main,
        }}
      >
        <img
          src={ornament}
          alt="ornament"
          style={{position: 'fixed', left: 0, top: 0, width: '50%'}}
        />
        <Typography variant="body1" sx={{...styles.txt_p}}>
          <i>
            Joining hands with our families,
            <br />
            we warmly invite you to
          </i>
        </Typography>
        <Typography variant="h5">The Wedding of</Typography>
        <Typography
          variant="h3"
          style={styles.txt_estetik}
          className="font-estetik"
        >
          Fathia
          <br />
          <h3>&</h3>
          Hafidz
        </Typography>
        <Typography variant="h6">12 Desember 2024</Typography>
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
