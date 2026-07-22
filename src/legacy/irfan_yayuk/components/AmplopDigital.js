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
import backgroundImage from '../assets/image/bg2.png';
import ornament from '../assets/image/ornamen2.png';
import pattern from '../assets/image/pattern.png';

const AmplopDigital = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const bank1 = 'BCA';
  const rekening1 = '1841124176';
  const atasNama1 = 'Yayuk Susanti';

  const bank2 = 'Dana';
  const rekening2 = '085895203369';
  const atasNama2 = 'Yayuk Susanti';

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
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'dark.main',
      padding: windowWidth > 600 ? '10% 17%' : '17% 17%',
      backgroundImage: `url(${backgroundImage})`,
      overflowX: 'hidden',
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
    btnStyles: {
      borderRadius: 30,
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: '5%',
      width: '100%',
      backgroundColor: '#777687',
    },
    txt: {
      header: {
        fontSize: `${200 + windowWidth * 0.06}%`,
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
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{margin: windowWidth > 500 ? '-80px 0' : '-17px 0'}}
      >
        <defs>
          <filter
            id="filter0_d_59_10"
            x="-6"
            y="-2.28882e-05"
            width="1092"
            height="188"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_59_10"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_59_10"
              result="shape"
            />
          </filter>
          <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="200"
            height="200"
          >
            <image
              href={pattern}
              x="0"
              y="0"
              width="200"
              height="200"
            />
          </pattern>
        </defs>
        <g filter="url(filter0_d_59_10)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1080 34.2937V176H0V1.17463C5.51097 0.79246 10.7737 0.498507 15.7306 0.305931C69.3632 -1.77771 109.695 7.13763 150.914 16.2489C187.038 24.2341 223.843 32.3698 270.88 33.384C319.606 34.4345 357.661 28.3153 395.426 22.2427C435.231 15.8421 474.713 9.49337 526.028 11.647C570.888 13.5296 605.726 23.1882 639.831 32.6438C679.327 43.5939 717.841 54.2718 769.801 52.2857C806.974 50.8648 835.283 41.0281 863.085 31.3676C894.251 20.538 924.78 9.92975 966.445 11.647C1002.65 13.1391 1049.81 25.3638 1080 34.2937Z"
            fill="#F7F7F3"
            fillOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1080 37.5059V176H0V6.59463C28.3614 2.54648 58.2605 -0.395809 83.5 0.0434369C118.216 0.647596 144.281 6.74821 170.885 12.9748C194.263 18.4463 218.056 24.0151 248.5 26.037C283.937 28.3906 312.781 23.7745 340.768 19.2955C375.776 13.693 409.444 8.30492 453 17.0392C474.269 21.3042 490.028 28.6105 505.597 35.8285C522.515 43.6719 539.208 51.4109 562.5 55.0299C607.828 62.0724 641.573 50.2974 676.707 38.0375C705.112 28.1258 734.424 17.8973 771.5 17.0392C815.547 16.0199 850.203 27.0087 884.077 37.7496C923.309 50.1896 961.492 62.2968 1012 55.0299C1032.91 52.0209 1057.97 44.831 1080 37.5059Z"
            fill="#D9D9D9"
            fillOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1080 17.9047V176H0V23.1142C48.8943 13.8373 118.315 2.24382 162 0.32007C211.502 -1.85987 248.729 7.46749 286.773 16.9999C320.115 25.3541 354.086 33.8658 397.5 34.9268C442.474 36.0259 477.599 29.6239 512.455 23.2707C549.195 16.5742 585.637 9.93211 633 12.1852C674.405 14.1549 706.56 24.2599 738.039 34.1524C774.493 45.6086 810.041 56.78 858 54.7021C892.31 53.2155 918.439 42.9242 944.1 32.8172C972.866 21.4871 1001.04 10.3887 1039.5 12.1852C1052.03 12.7707 1065.98 14.9351 1080 17.9047Z"
            fill="url(#img1)"
          />
        </g>
      </svg>
    </>
  );
};

export default AmplopDigital;
