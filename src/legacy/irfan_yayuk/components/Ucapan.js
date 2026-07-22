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
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import backgroundImage from '../assets/image/bg.png';
import bgOrnament from '../assets/image/4.png';
import ornament2 from '../assets/image/14.png';
import ornament3 from '../assets/image/ucapan.png';
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

  const beUrl = 'https://wedding-inv-be.vercel.app/irfan_yayuk';

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

  const isNameError = nama.length > 15;
  const nameHelperText = isNameError
    ? 'nama melebihi 15 karakter'
    : '';

  const handleChange = (event) => {
    const {name, value} = event.target;
    if (!formTouched) {
      setFormTouched(true);
    }
    if (name === 'kehadiran') {
      setKehadiran(value);
    } else {
      if (name === 'nama') {
        if (value.length <= 15) {
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
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'dark.main',
      padding: windowWidth > 500 ? '4% 12%' : '20% 12%',
      backgroundImage: `url(${backgroundImage})`,
      overflow: 'hidden',
    },
    ornament1: {
      width: '100%',
      height: '100%',
      display: windowWidth < 320 ? 'none' : 'block',
    },
    ornament: {
      width: '100%',
      height: '100%',
      zIndex: 0,
      rotate: {
        width: '100%',
        height: '100%',
        zIndex: 0,
        transform: 'rotate(-90deg)',
      },
    },
    card: {
      maxHeight: '60vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
      borderRadius: '15px',
      border: '0.5rem solid rgba(0, 0, 0, 0.01)',
      borderWidth: '0.5rem',
      // padding: '0.5rem',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      txt: {
        header: {
          fontSize: `${80 + windowWidth * 0.04}%`,
          color: theme.palette.dark.main,
          marginBottom: '5px',
          fontFamily: 'Ovo',
        },
        time: {
          fontSize: `${60 + windowWidth * 0.04}%`,
          color: theme.palette.dark.main,
          display: 'flex',
          alignItems: 'center',
          marginTop: '1.2rem',
          fontFamily: 'Ovo',
        },
        fontSize: `${70 + windowWidth * 0.04}%`,
        color: theme.palette.dark.main,
        alignItems: 'center',
        fontFamily: 'Ovo',
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
          backgroundColor: '#526AA6',
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
        fontSize: `${200 + windowWidth * 0.06}%`,
        marginBottom: '2vh',
        textAlign: 'center',
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
    <section ref={sectionRef}>
      <Box sx={styles.box}>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          style={{transformOrigin: '120% 50%'}}
        >
          <div
            style={{
              position: 'relative',
              marginRight: `${-30 + windowWidth * 0.005}%`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: 0,
                width: `${35 - windowWidth * 0.01}%`,
              }}
            >
              <img src={ornament2} style={styles.ornament.rotate} />
            </div>
          </div>
        </div>
        <h1 className="font-estetik" style={styles.txt.header}>
          Ucapkan Sesuatu
        </h1>
        <p style={styles.txt}>Berikan Ucapan & Doa Restu</p>
        <form
          onSubmit={handleSubmit}
          style={{zIndex: 0, margin: '7vh 0%'}}
        >
          <TextField
            label="Nama"
            name="nama"
            value={nama}
            onChange={handleChange}
            fullWidth
            required
            error={isNameError}
            helperText={nameHelperText}
            margin="normal"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              style: {
                borderRadius: 10,
                fontSize: `${70 + windowWidth * 0.04}%`,
                backgroundColor: '#0000001a',
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Ovo',
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
                borderRadius: 10,
                fontSize: `${70 + windowWidth * 0.04}%`,
                backgroundColor: '#0000001a',
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Ovo',
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
              borderRadius: 10,
              paddingBottom: 15,
              backgroundColor: '#0000001a',
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
                            <Card style={{borderRadius: '10px'}}>
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
                                  <AccessTimeOutlinedIcon
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
          style={{
            position: 'relative',
            marginBottom: windowWidth > 500 ? '4rem' : '1rem',
            marginRight: '-10%',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: 0,
              width: `${65 - windowWidth * 0.025}%`,
            }}
          >
            <img src={ornament3} style={styles.ornament} />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          style={{
            position: 'relative',
            marginBottom: windowWidth > 500 ? '2rem' : '1rem',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: `${60 - windowWidth * 0.025}%`,
            }}
          >
            <img src={ornament2} style={styles.ornament} />
          </div>
        </div>

        <div style={{position: 'relative'}}>
          <div
            style={{
              position: 'absolute',
              left: -250,
              right: -250,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '15vh',
            }}
          >
            <img
              src={bgOrnament}
              style={{width: '100%', height: '100%'}}
            />
          </div>
        </div>
      </Box>
    </section>
  );
});

export default Ucapan;
