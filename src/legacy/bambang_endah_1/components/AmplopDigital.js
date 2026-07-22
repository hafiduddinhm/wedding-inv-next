import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import {
  Grid,
  Box,
  Button,
  IconButton,
  useTheme,
  Alert,
  AlertTitle,
  Snackbar,
  Slide,
} from '@mui/material';
import {
  ContentCopy,
  CardGiftcardRounded,
  WalletRounded,
  CloseRounded,
} from '@mui/icons-material';
import flower from '../assets/image/ucapan.png';
import logobank1 from '../assets/image/bca.png';
import logobank2 from '../assets/image/dana.png';

const AmplopDigital = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const [kadoOpen, setKadoOpen] = useState(false);
  const [amplopOpen, setAmplopOpen] = useState(false);

  const bank1 = 'BCA';
  const rekening1 = '5105012818';
  const atasNama1 = 'Endah Rahayu';

  const bank2 = 'DANA';
  const rekening2 = '085791725309';
  const atasNama2 = 'Endah Rahayu';

  const alamatKado =
    'Dk. Sembung RT 015 RW 004 Ds. Kanten, Trucuk, Bojonegoro';

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

  const handleCopyClick = (rekening) => {
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
        setMessage('data berhasil disalin!');
        setOpen(true);
      })
      .catch(() => {
        setSeverity('error');
        setTitle('Yahh..');
        setMessage('data gagal disalin');
        setOpen(true);
        // alert("something went wrong");
      });
  };

  const handleKadoClick = () => {
    setKadoOpen(true);
  };
  const handleAmplopClick = () => {
    setAmplopOpen(true);
  };
  const closeModalKado = () => {
    setKadoOpen(false);
  };
  const closeModalAmplop = () => {
    setAmplopOpen(false);
  };

  const styles = {
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.light.main,
      padding: '0 15%',
      overflow: 'hidden',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      width: '110%',
      backgroundColor: theme.palette.dark.main,
      borderRadius: 10,
      boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.35)',
      alignItems: 'center',
      padding: `${12 - windowWidth * 0.005}%`,
    },
    card: {
      backgroundColor: '#E1F9FF',
      borderRadius: '7%',
      padding: '5% 10% 10% 10%',
      boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    modal: {
      content: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: 0,
        zIndex: 5,
        border: 'none',
        overflow: 'hidden',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },
    },
    modalcontent: {
      display: 'flex',
      flexDirection: 'column',
      padding: `${10 - windowWidth * 0.005}%`,
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: '30px',
      backgroundColor: theme.palette.light.main,
      color: theme.palette.dark.main,
      fontFamily: 'Poppins',
      fontSize: '100%',
      zIndex: 3,
    },
    btnStyles: {
      borderRadius: 12,
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      width: '75%',
      backgroundColor: theme.palette.light.main,
      color: theme.palette.primary.main,
    },
    flower: {
      right: 0,
      zIndex: 0,
      position: 'absolute',
      marginTop: `${28 - windowHeight * 0.02}vh`,
      width: `${30 + windowWidth * 0.0005}%`,
      height: `${35 + windowHeight * 0.0005}vh`,
      backgroundImage: `url(${flower})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    hr: {
      border: 0,
      clear: 'both',
      display: 'block',
      width: '85%',
      backgroundColor: '#FFFFFF',
      height: '2px',
      opacity: 0.8,
      margin: '2%',
    },
    txt: {
      header: {
        fontSize: `${120 + windowWidth * 0.06}%`,
        fontWeight: 'bold',
        textAlign: 'center',
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
      margin: 0,
    },
    img: {
      width: '50%',
      marginBottom: '1vh',
    },
  };

  return (
    <div style={styles.section}>
      <Box sx={styles.box}>
        <h2 className="font-serif" style={styles.txt.header}>
          Wedding Gift
        </h2>
        <hr style={styles.hr} />
        <br />
        <p style={styles.txt}>
          Doa Restu Anda merupakan karunia yang sangat berarti bagi
          kami.
          <br />
          Dan jika memberi adalah ungkapan tanda kasih Anda, Anda
          dapat memberi kado melalui:
        </p>
        <br />
        <div
          style={styles.flower}
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
        <Button
          variant="contained"
          onClick={handleKadoClick}
          style={styles.btnStyles}
        >
          <CardGiftcardRounded
            style={{marginRight: '7px', fontSize: '1rem'}}
          />
          Kirim Kado
        </Button>
        <br />
        <Button
          variant="contained"
          onClick={handleAmplopClick}
          style={styles.btnStyles}
        >
          <WalletRounded
            style={{marginRight: '7px', fontSize: '1rem'}}
          />
          Amplop Digital
        </Button>
        <br />
        <br />
        <Grid container spacing={4}>
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
      <Modal
        isOpen={kadoOpen}
        onRequestClose={closeModalKado}
        closeTimeoutMS={500}
        style={styles.modal}
      >
        <Box sx={styles.modalcontent}>
          <IconButton
            size="small"
            onClick={closeModalKado}
            style={{
              alignSelf: 'end',
              margin: '0 5px',
              marginBottom: '-3vh',
              color: 'primary.main',
            }}
          >
            <CloseRounded fontSize="inherit" />
          </IconButton>
          <br />
          <p style={{fontWeight: 'bold'}}>Kirim Kado ke Alamat:</p>
          <p>{alamatKado}</p>
          <Button
            variant="contained"
            onClick={() => handleCopyClick(alamatKado)}
            style={{
              ...styles.btnStyles,
              marginTop: '2vh',
              color: theme.palette.light.main,
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <ContentCopy
              style={{marginRight: '7px', fontSize: '1rem'}}
            />
            Salin Alamat
          </Button>
          <br />
        </Box>
      </Modal>
      <Modal
        isOpen={amplopOpen}
        onRequestClose={closeModalAmplop}
        closeTimeoutMS={500}
        style={styles.modal}
      >
        <Box sx={styles.modalcontent}>
          <IconButton
            size="small"
            onClick={closeModalAmplop}
            style={{
              alignSelf: 'end',
              margin: '0 5px',
              marginBottom: '-3vh',
              color: 'primary.main',
            }}
          >
            <CloseRounded fontSize="inherit" />
          </IconButton>
          <br />
          <img src={logobank1} style={styles.img} alt="logo-bca" />
          <p>
            {rekening1} ({bank1})<br />
            a.n. {atasNama1}
          </p>
          <Button
            variant="contained"
            onClick={() => handleCopyClick(rekening1)}
            style={{
              ...styles.btnStyles,
              marginTop: '0.5vh',
              color: theme.palette.light.main,
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <ContentCopy
              style={{marginRight: '7px', fontSize: '1rem'}}
            />
            Salin Rekening
          </Button>
          <br />
          <br />
          <img src={logobank2} style={styles.img} alt="logo-dana" />
          <p>
            {rekening2} ({bank2})<br />
            a.n. {atasNama2}
          </p>
          <Button
            variant="contained"
            onClick={() => handleCopyClick(rekening2)}
            style={{
              ...styles.btnStyles,
              marginTop: '0.5vh',
              color: theme.palette.light.main,
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <ContentCopy
              style={{marginRight: '7px', fontSize: '1rem'}}
            />
            Salin Rekening
          </Button>
          <br />
        </Box>
      </Modal>
      <br />
      <br />
    </div>
  );
};

export default AmplopDigital;
