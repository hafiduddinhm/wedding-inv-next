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

import {useCoupleData} from '@/context/CoupleDataContext';
import backgroundImage from '../assets/image/bgAmplop.png';
import ornament from '../assets/image/ornamen2.png';

const AmplopDigital = () => {
  const data = useCoupleData();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
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

  const accounts = data.accounts || [];

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
        <Box
          style={{
            backgroundColor: theme.palette.light.main,
            width: '100%',
          }}
        >
          <br />
          <Grid container spacing={4} justifyContent="center">
            {accounts.map((account, index) => {
              const isLastOdd =
                accounts.length % 2 !== 0 &&
                index === accounts.length - 1;
              return (
                <Grid
                  key={account.number}
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
                  <Box
                    style={{
                      backgroundColor: '#f7fafc',
                      borderRadius: '7%',
                      padding: '5% 10% 10% 10%',
                    }}
                  >
                    <img src={ornament} style={styles.img} alt="" />
                    <h5 style={styles.txt.h5}>{account.bankName}</h5>
                    <p style={styles.txt.larger}>
                      {account.number}
                      <br />
                      a.n. {account.holder}
                    </p>
                    <Button
                      variant="contained"
                      onClick={() =>
                        handleButtonClick(account.number)
                      }
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
