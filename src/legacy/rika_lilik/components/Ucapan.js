import React, {forwardRef, useState, useEffect} from 'react';
import {
  Grid,
  Box,
  Button,
  useTheme,
  TextField,
  Select,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import {AccessTimeOutlined, SendRounded} from '@mui/icons-material';
import bg1 from '../assets/image/bgucapan1.png';
import bg2 from '../assets/image/bgucapan2.png';
import flower from '../assets/image/ucapan.png';
import ornament1 from '../assets/image/ucapan1.png';
import ornament2 from '../assets/image/ucapan2.png';
import {motion} from 'framer-motion';
import axios from 'axios';
import {timeAgo} from '@/utils/timeAgo';

import {
  Card,
  CardContent,
  Typography,
  Alert,
  AlertTitle,
  Snackbar,
  Slide,
} from '@mui/material';

const Ucapan = forwardRef((props, sectionRef) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const [nama, setNama] = useState('');
  const [ucapan, setUcapan] = useState('');
  const [kehadiran, setKehadiran] = useState(0);
  const [formTouched, setFormTouched] = useState(false);

  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPost, setLoadingPost] = useState(false);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const beUrl = 'https://wedding-inv-be.vercel.app/rika_lilik';
  const MAX_LENGTH = 20;

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(beUrl);
      setComment(response.data.data);
    } catch (error) {
      setSeverity('error');
      setTitle('Yahh..');
      setMessage('Daftar ucapan gagal diambil');
      setOpen(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    const {name, value} = event.target;
    if (!formTouched) {
      setFormTouched(true);
    }
    if (name === 'kehadiran') {
      setKehadiran(value);
    } else {
      if (name === 'nama') {
        if (value.length <= 20) {
          setNama(value);
        }
      } else if (name === 'ucapan') {
        setUcapan(value);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formdata = new FormData();

    formdata.append('name', nama);
    if (kehadiran === 1) {
      formdata.append('status', true);
    } else if (kehadiran === 2) {
      formdata.append('status', false);
    } else {
      setSeverity('error');
      setTitle('Upss..');
      setMessage('Kamu belum konfirmasi kehadiranmu');
      setOpen(true);
      return;
    }
    formdata.append('comment', ucapan);
    setLoadingPost(true);

    for (var pair of formdata.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    axios
      .post(beUrl, formdata, {
        headers: {'Content-Type': 'application/json'},
      })
      .then((response) => {
        console.log(response.data);
        setLoadingPost(false);
        setLoading(true);
        fetchData();
        setSeverity('success');
        setTitle('Berhasil');
        setMessage('Ucapan berhasil dikirim!');
        setOpen(true);
      })
      .catch((err) => {
        setLoadingPost(false);
        setSeverity('error');
        setTitle('Sayang sekali');
        setMessage('Ucapanmu gagal dikirim');
        setOpen(true);
        console.error(err);
        // alert("Gagal mengirim ucapan")
      });
    handleReset();
  };

  const handleReset = () => {
    setNama('');
    setUcapan('');
    setKehadiran(0);
    setFormTouched(false);
  };

  const styles = {
    section: {
      marginTop: '10vh',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'dark.main',
      padding: windowWidth > 500 ? '0% 12%' : '0% 12%',
      backgroundColor: theme.palette.light.main,
      // backgroundImage: `url(${backgroundImage})`,
      overflow: 'hidden',
    },
    bg1: {
      left: 0,
      zIndex: 0,
      position: 'absolute',
      marginTop: '-25vh',
      width: `${45 + windowWidth * 0.02}%`,
      height: `${40 + windowWidth * 0.02}vh`,
      backgroundImage: `url(${bg1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    bg2: {
      right: 0,
      zIndex: 0,
      position: 'absolute',
      marginTop: '15vh',
      width: `${70 + windowWidth * 0.012}%`,
      height: `${75 + windowWidth * 0.012}vh`,
      backgroundImage: `url(${bg2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    flower: {
      right: 0,
      zIndex: 2,
      position: 'absolute',
      marginTop: '-55vh',
      width: `${30 + windowWidth * 0.005}%`,
      height: `${35 + windowWidth * 0.005}vh`,
      backgroundImage: `url(${flower})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    ornament1: {
      left: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-3vh',
      width: `${80 + windowWidth * 0.025}%`,
      height: `${50 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${ornament1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
      overflow: 'hidden',
    },
    ornament2: {
      right: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '0vh',
      width: `${35 + windowWidth * 0.025}%`,
      height: `${35 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${ornament2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    card: {
      maxHeight: '60vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
      borderRadius: '15px',
      border: '0.5rem solid rgba(0, 0, 0, 0.01)',
      borderWidth: '0.5rem',
      // padding: '0.5rem',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      txt: {
        header: {
          fontSize: `${80 + windowWidth * 0.04}%`,
          color: theme.palette.dark.main,
          marginBottom: '5px',
          fontFamily: 'Roboto',
          fontWeight: 700,
        },
        time: {
          fontSize: `${60 + windowWidth * 0.04}%`,
          color: theme.palette.dark.main,
          display: 'flex',
          alignItems: 'center',
          marginTop: '1.2rem',
          fontFamily: 'Roboto',
          fontWeight: 300,
        },
        fontSize: `${70 + windowWidth * 0.04}%`,
        color: theme.palette.dark.main,
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontWeight: 300,
      },
    },
    btnStyles: {
      submit: {
        borderRadius: 30,
        padding: '8px 15px',
        fontSize: '0.75rem',
        justifySelf: 'center',
        marginTop: '15px',
        width: '100%',
        backgroundColor: 'dark.main',
        color: 'white',
        '& .MuiCircularProgress-root': {
          color: 'white',
        },
        '&:hover': {
          backgroundColor: theme.palette.secondary.main,
          boxShadow: 'none',
        },
      },
      cancel: {
        borderRadius: 30,
        borderColor: 'dark.main',
        padding: '8px 15px',
        fontSize: '0.75rem',
        borderWidth: '2px',
        justifySelf: 'center',
        marginTop: '15px',
        width: '100%',
        '&:hover': {
          backgroundColor: 'dark.main',
          color: 'white',
        },
        '&:active': {
          borderColor: 'dark.main',
        },
      },
    },
    txt: {
      header: {
        color: theme.palette.secondary.main,
        fontSize: `${250 + windowWidth * 0.06}%`,
        marginBottom: '2vh',
        textAlign: 'center',
        zIndex: 1,
      },
      larger: {
        textAlign: 'center',
        fontSize: `${110 + windowWidth * 0.04}%`,
        color: theme.palette.dark.main,
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
      color: theme.palette.primary.main,
      marginBottom: '2vh',
      zIndex: 1,
    },
    img: {
      width: '100%',
      marginBottom: '1vh',
    },
  };

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <section style={styles.section} ref={sectionRef}>
      <div style={styles.bg2} />
      <div style={styles.bg1} />
      <Box sx={styles.box}>
        <h1 className="font-estetik" style={styles.txt.header}>
          Ucapkan Sesuatu
        </h1>
        <p style={styles.txt}>Berikan Ucapan & Doa Restu</p>
        <div
          style={styles.flower}
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
        <form
          onSubmit={handleSubmit}
          style={{zIndex: 0, margin: '3vh 0% 7vh 0%'}}
        >
          <TextField
            label="Nama"
            name="nama"
            value={nama}
            onChange={handleChange}
            fullWidth
            required
            helperText={
              formTouched ? `${nama.length}/${MAX_LENGTH}` : ''
            }
            margin="normal"
            variant="filled"
            InputProps={{
              maxLength: MAX_LENGTH,
              disableUnderline: true,
              style: {
                borderRadius: 20,
                fontSize: `${70 + windowWidth * 0.04}%`,
                backgroundColor: '#E1F9FF',
                boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Roboto',
                fontWeight: 300,
                fontSize: `${70 + windowWidth * 0.04}%`,
                color: 'dark.main',
              },
            }}
          />
          <TextField
            label="Berikan ucapanmu"
            name="ucapan"
            value={ucapan}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            margin="none"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              style: {
                borderRadius: 20,
                fontSize: `${70 + windowWidth * 0.04}%`,
                backgroundColor: '#E1F9FF',
                boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Roboto',
                fontWeight: 300,
                fontSize: `${70 + windowWidth * 0.04}%`,
                color: 'dark.main',
              },
            }}
          />
          <br />
          <p></p>
          <Select
            labelId="kehadiran-label"
            id="kehadiran"
            name="kehadiran"
            value={kehadiran}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="filled"
            disableUnderline
            style={{
              borderRadius: 20,
              paddingBottom: 15,
              backgroundColor: '#E1F9FF',
              boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            <MenuItem value={0}>
              <Typography variant="body1" style={styles.card.txt}>
                Konfirmasi kehadiran
              </Typography>
            </MenuItem>
            <MenuItem value={1}>
              <Typography variant="body1" style={styles.card.txt}>
                Hadir
              </Typography>
            </MenuItem>
            <MenuItem value={2}>
              <Typography variant="body1" style={styles.card.txt}>
                Berhalangan
              </Typography>
            </MenuItem>
          </Select>
          <div style={{marginTop: '1rem'}}>
            <LoadingButton
              type="submit"
              variant="contained"
              disableRipple={true}
              disabled={!formTouched}
              sx={styles.btnStyles.submit}
              loading={loadingPost}
            >
              <span>Kirim</span>
              <SendRounded
                sx={{
                  width: '0.9rem',
                  marginLeft: '7px',
                  alignSelf: 'center',
                }}
              />
            </LoadingButton>
            {formTouched && (
              <Button
                variant="outlined"
                disableRipple={true}
                onClick={handleReset}
                sx={styles.btnStyles.cancel}
              >
                Batal
              </Button>
            )}
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleSnackbarClose}
              TransitionComponent={Slide}
              anchorOrigin={{vertical: 'top', horizontal: 'center'}}
              style={{zIndex: 10}}
            >
              <Alert
                severity={severity}
                variant="filled"
                onClose={handleSnackbarClose}
                style={{zIndex: 10}}
              >
                <AlertTitle>{title}</AlertTitle>
                {message}
              </Alert>
            </Snackbar>
          </div>
        </form>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          style={styles.card}
        >
          <Grid container spacing={2} direction="column">
            {loading ? (
              <Grid
                item
                sx={{
                  margin: '5%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CircularProgress size={'10%'} />
              </Grid>
            ) : (
              <>
                {comments !== null && comments !== undefined ? (
                  <>
                    {comments.map((comment) => (
                      <Grid key={comment._id} item>
                        <motion.div
                          initial="offscreen"
                          whileInView="onscreen"
                          viewport={{once: true, amount: 0.8}}
                          style={{height: '100%'}}
                        >
                          <motion.div
                            className="card"
                            variants={cardVariants}
                            style={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                          >
                            <Card
                              style={{
                                borderRadius: '10px',
                                backgroundColor: '#E1F9FF',
                                boxShadow:
                                  '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
                              }}
                            >
                              <CardContent
                                sx={{
                                  paddingBottom: '1.5vh !important',
                                }}
                              >
                                <Typography
                                  sx={styles.card.txt.header}
                                  variant="h5"
                                  component="h2"
                                >
                                  {comment.name} -{' '}
                                  {comment.status === 'true'
                                    ? 'Hadir ᅟᅟᅟᅟ'
                                    : 'Tidak Hadir'}
                                </Typography>
                                <Typography
                                  sx={styles.card.txt}
                                  component="p"
                                >
                                  {comment.comment}
                                </Typography>
                                <Typography
                                  sx={styles.card.txt.time}
                                  component="p"
                                >
                                  <AccessTimeOutlined
                                    sx={{
                                      width: '0.9rem',
                                      marginRight: '2%',
                                      alignSelf: 'center',
                                    }}
                                  />
                                  {timeAgo(comment.timestamp)}
                                </Typography>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </motion.div>
                      </Grid>
                    ))}
                  </>
                ) : (
                  <Grid
                    item
                    sx={{
                      margin: '2%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p style={styles.txt}>
                      <i>Belum ada ucapan</i>
                    </p>
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </div>
      </Box>
      <div
        style={styles.ornament2}
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <div
        style={styles.ornament1}
        data-aos="fade-right"
        data-aos-duration="1500"
      />
    </section>
  );
});

export default Ucapan;
