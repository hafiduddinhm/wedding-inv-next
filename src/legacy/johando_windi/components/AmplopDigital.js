/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect, forwardRef} from 'react';
import {
  Grid,
  Box,
  Button,
  useTheme,
  Alert,
  AlertTitle,
  Snackbar,
  Slide,
  useMediaQuery,
  Typography,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import backgroundImage from '../assets/image/bgAmplop.png';
import logobank1 from '../assets/image/bank1.png';
import logobank2 from '../assets/image/bank2.png';
import {WhatsApp} from '@mui/icons-material';

const AmplopDigital = forwardRef((props, sectionRef) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const rekening1 = 'xxxxxxxxxxx';
  const atasNama1 = 'Johando Yogatama';

  const rekening2 = 'xxxxxxxxxxxx';
  const atasNama2 = 'Windi Handayani';

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const theme = useTheme();

  const isXs =
    useMediaQuery(theme.breakpoints.up('xs')) &&
    useMediaQuery(theme.breakpoints.down('sm'));
  const isSm =
    useMediaQuery(theme.breakpoints.up('sm')) &&
    useMediaQuery(theme.breakpoints.down('md'));

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
      color: 'dark.main',
      marginTop: '-35vh',
      padding:
        windowWidth > 600 ? '5% 17% 10% 17%' : '10% 17% 10% 17%',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: '100% 100%',
      overflow: 'hidden',
    },
    btnStyles: {
      borderRadius: 30,
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: '5%',
      width: '100%',
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
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
        color: theme.palette.dark.main,
      },
      larger: {
        textAlign: 'center',
        fontSize: `${110 + windowWidth * 0.04}%`,
        color: theme.palette.dark.main,
        fontWeight: 300,
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
      color: theme.palette.dark.main,
      marginBottom: '2vh',
      fontWeight: 300,
    },
    img: {
      width: '40%',
      marginBottom: '1vh',
    },
  };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: theme.palette.light.main,
        paddingBottom: '10vh',
        overflow: 'hidden',
        color: theme.palette.primary.main,
      }}
    >
      <Box
        style={{
          margin: '1vh 5%',
          padding: '40px 20px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: isXs || isSm ? 'auto 100%' : '100% 100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 11,
          backgroundColor: 'white',
          boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <h1 className="font-estetik" style={styles.txt.header}>
          Amplop Digital
        </h1>
        <p style={styles.txt}>
          Doa Restu Anda merupakan karunia yang sangat berarti bagi
          kami.
          <br />
          Dan jika memberi adalah ungkapan tanda kasih Anda, Anda
          dapat memberi kado secara cashlesh melalui:
        </p>
        <Box
          style={{
            width: '100%',
          }}
        >
          <br />
          <Grid container spacing={4}>
            <Grid
              data-aos="fade-right"
              data-aos-duration="1500"
              item
              xs={12}
              sm={6}
              style={{justifyContent: 'center'}}
            >
              <Box
                style={{
                  borderRadius: '7%',
                  backgroundColor: 'white',
                  boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
                  padding: '5% 10% 10% 10%',
                }}
              >
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
              <Box
                style={{
                  borderRadius: '7%',
                  backgroundColor: 'white',
                  boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
                  padding: '5% 10% 10% 10%',
                }}
              >
                <img
                  src={logobank2}
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
          <Box marginTop="20px">
            <Button
              data-aos="fade-up"
              data-aos-duration="1500"
              variant="contained"
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                backgroundColor: 'gray',
              }}
              onClick={() => window.open('')}
            >
              <WhatsApp
                style={{marginRight: '7px', fontSize: '1rem'}}
              />
              Beritahukan Sudah Transfer
            </Button>
          </Box>
        </Box>
        <br />
        <br />
        <br />
        <br />
      </Box>
    </section>
  );
});

export default AmplopDigital;
