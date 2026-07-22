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
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import backgroundImage from '../assets/image/bgAmplop.png';
import ornament from '../assets/image/ornamen2.png';
import ornament3 from '../assets/image/galeri3.png';
import ornament4 from '../assets/image/galeri4.png';

const AmplopDigital = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const bank1 = 'BCA';
  const rekening1 = '8240824851';
  const atasNama1 = 'Muchammad Fachur Rozi';

  const bank2 = 'DANA';
  const rekening2 = '081238290507';
  const atasNama2 = 'Muchammad Fachur Rozi';

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
      padding:
        windowWidth > 600 ? '35% 17% 10% 17%' : '45% 17% 10% 17%',
      backgroundColor: theme.palette.light.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left center',
      backgroundSize: 'contain',
      overflow: 'hidden',
    },
    ornament1: {
      justifySelf: 'start',
      alignSelf: 'start',
      marginLeft: '-22%',
      left: 0,
      width: `${57 + windowWidth * 0.03}%`,
      height: `${27 + windowWidth * 0.01}vh`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    ornament3: {
      left: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-20vh',
      width: `${55 + windowWidth * 0.01}%`,
      height: `${42 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${ornament3})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    ornament4: {
      right: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-20vh',
      width: `${55 + windowWidth * 0.01}%`,
      height: `${42 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${ornament4})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
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
      width: '100%',
      marginBottom: '1vh',
    },
  };

  return (
    <>
      <div style={styles.ornament3} />
      <div style={styles.ornament4} />
      <Box sx={styles.box}>
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
                backgroundColor: '#f7fafc',
                borderRadius: '7%',
                padding: '5% 10% 10% 10%',
              }}
            >
              <img src={ornament} style={styles.img} />
              <h5 style={styles.txt.h5}>{bank1}</h5>
              <p style={styles.txt.larger}>
                {rekening1}
                <br />
                a.n. {atasNama1}
              </p>
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
                backgroundColor: '#f7fafc',
                borderRadius: '7%',
                padding: '5% 10% 10% 10%',
              }}
            >
              <img src={ornament} style={styles.img} />
              <h5 style={styles.txt.h5}>{bank2}</h5>
              <p style={styles.txt.larger}>
                {rekening2}
                <br />
                a.n. {atasNama2}
              </p>
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
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  );
};

export default AmplopDigital;
