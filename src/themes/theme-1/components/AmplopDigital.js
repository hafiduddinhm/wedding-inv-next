import React, {useState, useEffect} from 'react';
import {
  Grid,
  Box,
  Button,
  useTheme,
  Alert,
  AlertTitle,
  Snackbar,
  Slide,
  Typography,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {useCoupleData} from '@/context/CoupleDataContext';
import backgroundImage from '../assets/image/bgAmplop.png';
import ornament1 from '../assets/image/divider1.png';
import ornament2 from '../assets/image/divider2.png';

const AmplopDigital = () => {
  const data = useCoupleData();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = useTheme();

  const handleButtonClick = (rekening) => {
    if (!navigator.clipboard) {
      setSeverity('error');
      setTitle('Yahh..');
      setMessage('terjadi kesalahan saat menyalin');
      setOpen(true);
      return;
    }
    navigator.clipboard
      .writeText(rekening)
      .then(() => {
        setSeverity('success');
        setTitle('Berhasil');
        setMessage('nomor rekening berhasil disalin!');
        setOpen(true);
      })
      .catch(() => {
        setSeverity('error');
        setTitle('Yahh..');
        setMessage('nomor rekening gagal disalin');
        setOpen(true);
      });
  };

  const styles = {
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      padding: '10% 5%',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: '100% 100%',
      overflow: 'hidden',
      textAlign: 'center',
    },
    glass: {
      background: 'rgba(255, 254, 251, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 254, 251, 0.3)',
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
    },
    btnStyles: {
      borderRadius: 30,
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: '5%',
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
    img: {
      width: '40%',
      marginBottom: '1vh',
    },
  };

  return (
    <>
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={ornament1}
        alt="flower1"
        style={{
          position: 'absolute',
          alignSelf: 'left',
          marginTop: '-22vh',
          width: `${windowHeight > windowWidth ? '35%' : '20vh'}`,
          left: 0,
        }}
      />
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={ornament2}
        alt="flower2"
        style={{
          position: 'absolute',
          alignSelf: 'right',
          marginTop: '-22vh',
          width: `${windowHeight > windowWidth ? '35%' : '20vh'}`,
          right: 0,
        }}
      />
      <Box sx={styles.box}>
        <Typography variant="h4" className="font-estetik">
          Amplop Digital
        </Typography>
        <Typography variant="p">
          Doa restu anda merupakan karunia yang sangat berarti bagi
          kami.
          <br />
          Dan jika memberi adalah ungkapan tanda kasih anda, anda
          dapat memberi kado secara cashlesh melalui:
        </Typography>
        <Box>
          <br />
          <Grid container spacing={4} justifyContent="center">
            {data.accounts.map((account, index) => {
              const isLastOdd =
                data.accounts.length % 2 !== 0 &&
                index === data.accounts.length - 1;
              return (
              <Grid
                key={index}
                data-aos={
                  isLastOdd
                    ? 'fade-up'
                    : index % 2 === 0
                      ? 'fade-right'
                      : 'fade-left'
                }
                data-aos-duration="1500"
                item
                xs={12}
                sm={6}
                style={{justifyContent: 'center'}}
              >
                <Box style={styles.glass}>
                  {account.bankLogoPath ? (
                    <img
                      src={account.bankLogoPath}
                      style={styles.img}
                      alt={account.bankName}
                    />
                  ) : (
                    <Typography variant="h6">
                      {account.bankName || 'Rekening'}
                    </Typography>
                  )}
                  <Typography variant="h6">
                    {account.number}
                    <br />
                    a.n. {account.holder}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick(account.number)}
                    style={styles.btnStyles}
                  >
                    <ContentCopyIcon
                      style={{marginRight: '7px', fontSize: '1rem'}}
                    />
                    Salin Rekening
                  </Button>
                </Box>
              </Grid>
              );
            })}
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            TransitionComponent={Slide}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          >
            <Alert
              severity={severity}
              variant="filled"
              onClose={handleSnackbarClose}
            >
              <AlertTitle>{title}</AlertTitle>
              {message}
            </Alert>
          </Snackbar>
        </Box>
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  );
};

export default AmplopDigital;
