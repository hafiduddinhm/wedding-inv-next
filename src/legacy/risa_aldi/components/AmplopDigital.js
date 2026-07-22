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
import cardOrnament from '../assets/image/ornament.png';
import ornament1 from '../assets/image/amplop1.png';
import ornament2 from '../assets/image/amplop2.png';

const AmplopDigital = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const bank1 = 'Dana';
  const rekening1 = '083821315337';
  const atasNama1 = 'Aldi Ardiansyah';

  // const bank2 = 'Mandiri'
  // const rekening2 = '1780002200240'
  // const atasNama2 = 'Yuyun Laylia El Mahera'

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
      // Clipboard API not available
      // alert("something went wrong1");
      setSeverity('error');
      setTitle('Yahh..');
      setMessage('terjadi kesalahan saat menyalin');
      setOpen(true);
      return;
    }
    navigator.clipboard
      .writeText(rekening)
      .then(() => {
        // alert("successfully copied");
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
        // alert("something went wrong");
      });
  };

  const styles = {
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      marginTop: '-5vh',
      padding: '25% 10%',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: '100% 100%',
      overflow: 'hidden',
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#FFE1E9',
      borderRadius: '7%',
      padding: '10%',
      boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    btnStyles: {
      borderRadius: 30,
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: '5%',
      width: '100%',
      backgroundColor: theme.palette.light.main,
      color: theme.palette.secondary.main,
    },
    txt: {
      header: {
        fontSize: `${250 + windowWidth * 0.06}%`,
        marginBottom: '2vh',
        textAlign: 'center',
        color: theme.palette.secondary.main,
      },
      h5: {
        textAlign: 'center',
        fontSize: `${90 + windowWidth * 0.07}%`,
        fontWeight: 'bold',
        color: theme.palette.dark.main,
      },
      larger: {
        textAlign: 'center',
        fontSize: `${80 + windowWidth * 0.07}%`,
        color: theme.palette.dark.main,
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
      color: theme.palette.dark.main,
      marginBottom: '2vh',
    },
    img: {
      width: '100%',
      marginBottom: '1vh',
    },
  };

  return (
    <>
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
        <img
          src={cardOrnament}
          data-aos="fade-up"
          data-aos-duration="1500"
          alt="card-ornament"
        />
        <Box
          data-aos="fade-up"
          data-aos-duration="1500"
          style={styles.card}
        >
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
        <Grid container spacing={4}>
          {/* <Grid data-aos='fade-right' data-aos-duration="1500" item xs={12} sm={6} style={{justifyContent: 'center'}}>
                    <Box style={{backgroundColor: '#f7fafc', borderRadius: '7%', padding: '5% 10% 10% 10%'}}>
                        <img src={ornament} style={styles.img}/>
                        <h5 style={styles.txt.h5}>{bank1}</h5>
                        <p style={styles.txt.larger}>{rekening1}<br/>a.n. {atasNama1}</p>
                        <Button variant="contained" onClick={() => handleButtonClick(rekening1)} style={styles.btnStyles}>
                            <ContentCopyIcon style={{ marginRight: '7px', fontSize: '1rem' }} />
                            Salin Rekening
                        </Button>
                    </Box>
                </Grid>
                <Grid data-aos='fade-left' data-aos-duration="1500" item xs={12} sm={6}>
                    <Box style={{backgroundColor: '#f7fafc', borderRadius: '7%', padding: '5% 10% 10% 10%'}}>
                        <img src={ornament} style={styles.img}/>
                        <h5 style={styles.txt.h5}>{bank2}</h5>
                        <p style={styles.txt.larger}>{rekening2}<br/>a.n. {atasNama2}</p>
                        <Button variant="contained" onClick={() => handleButtonClick(rekening2)} style={styles.btnStyles}>
                            <ContentCopyIcon style={{ marginRight: '7px', fontSize: '1rem' }} />
                            Salin Rekening
                        </Button>
                    </Box>
                </Grid> */}
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
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={ornament1}
          alt="flower"
          style={{
            position: 'absolute',
            alignSelf: 'left',
            marginTop: '-30vh',
            width: `${windowHeight > windowWidth ? '30%' : '22vh'}`,
            left: 0,
          }}
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={ornament2}
          alt="flower"
          style={{
            position: 'absolute',
            alignSelf: 'left',
            marginTop: '60vh',
            width: `${windowHeight > windowWidth ? '40%' : '22vh'}`,
            left: 0,
          }}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  );
};

export default AmplopDigital;
