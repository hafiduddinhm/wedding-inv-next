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
import backgroundImage from '../assets/image/bgAmplop.png';
import logobank1 from '../assets/image/bank1.png';
import ornament1 from '../assets/image/divider1.png';
import ornament2 from '../assets/image/divider2.png';

const AmplopDigital = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const rekening1 = '087836544816';
  const atasNama1 = 'Anita Nurrispa';

  const rekening2 = '081398055757';
  const atasNama2 = 'Muhammad Husni Thamrin';

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
      maxWidth: '400px',
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
    txt: {
      header: {
        fontSize: `${300 + windowWidth * 0.06}%`,
        marginBottom: '2vh',
        textAlign: 'center',
      },
      h5: {
        textAlign: 'center',
        fontSize: `${90 + windowWidth * 0.04}%`,
        fontWeight: 'bold',
        color: theme.palette.primary.main,
      },
      larger: {
        textAlign: 'center',
        fontSize: `${110 + windowWidth * 0.04}%`,
        color: theme.palette.primary.main,
        fontWeight: 300,
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
      color: theme.palette.primary.main,
      marginBottom: '2vh',
      fontWeight: 300,
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
        <Typography variant="h2" className="font-estetik">
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
          <Grid container spacing={4}>
            <Grid
              data-aos="fade-right"
              data-aos-duration="1500"
              item
              xs={12}
              sm={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box style={styles.glass}>
                <img
                  src={logobank1}
                  style={styles.img}
                  alt="logo-bca"
                />
                <Typography variant="h6">
                  {rekening1}
                  <br />
                  a.n. {atasNama1}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(rekening1)}
                  style={styles.btnStyles}
                >
                  <ContentCopyIcon
                    style={{marginRight: '7px', fontSize: '1rem'}}
                  />
                  Salin Rekening
                </Button>
              </Box>
            </Grid>
            <Grid
              data-aos="fade-left"
              data-aos-duration="1500"
              item
              xs={12}
              sm={6}
            >
              <Box style={styles.glass}>
                <img
                  src={logobank1}
                  style={styles.img}
                  alt="logo-bca"
                />
                <Typography variant="h6">
                  {rekening2}
                  <br />
                  a.n. {atasNama2}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(rekening2)}
                  style={styles.btnStyles}
                >
                  <ContentCopyIcon
                    style={{marginRight: '7px', fontSize: '1rem'}}
                  />
                  Salin Rekening
                </Button>
              </Box>
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
          </Grid>
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
