import React, {forwardRef, useState, useEffect} from 'react';
import {
  Grid,
  Box,
  Button,
  useTheme,
  TextField,
  FormHelperText,
  Select,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import {AccessTimeOutlined, SendRounded} from '@mui/icons-material';
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

  const beUrl = 'https://wedding-inv-be.vercel.app/bambang_endah1';
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
    section: {},
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: windowWidth > 500 ? '0% 12%' : '0% 12%',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.light.main,
      // backgroundImage: `url(${backgroundImage})`,
      overflow: 'hidden',
    },
    card: {
      maxHeight: '60vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
      borderRadius: '15px',
      border: '0.5rem solid rgba(255, 255, 255, 0.01)',
      borderWidth: '0.5rem',
      // padding: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      txt: {
        header: {
          fontSize: `${70 + windowWidth * 0.04}%`,
          color: theme.palette.primary.main,
          marginBottom: '5px',
          fontFamily: 'Poppins',
          fontWeight: 700,
        },
        time: {
          fontSize: `${60 + windowWidth * 0.04}%`,
          color: theme.palette.primary.main,
          display: 'flex',
          alignItems: 'center',
          marginTop: '1.2rem',
          fontFamily: 'Poppins',
          fontWeight: 300,
        },
        fontSize: `${70 + windowWidth * 0.04}%`,
        color: theme.palette.primary.main,
        alignItems: 'center',
        fontFamily: 'Poppins',
        fontWeight: 400,
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
        backgroundColor: '#043D6A',
        color: 'white',
        '& .MuiCircularProgress-root': {
          color: 'primary.main',
        },
        '&:hover': {
          backgroundColor: theme.palette.secondary.main,
          boxShadow: 'none',
        },
        '&:disabled': {
          backgroundColor: '#687884',
          color: '#8B9FAD',
        },
      },
      cancel: {
        borderRadius: 30,
        borderColor: '#043D6A',
        padding: '8px 15px',
        fontSize: '0.75rem',
        borderWidth: '2px',
        justifySelf: 'center',
        marginTop: '15px',
        width: '100%',
        color: 'white',
        '&:hover': {
          backgroundColor: 'light.main',
          color: 'white',
        },
        '&:active': {
          borderColor: '#043D6A',
        },
      },
    },
    hr: {
      border: 0,
      clear: 'both',
      display: 'block',
      width: '65%',
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
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
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
      <Box sx={styles.box}>
        <hr style={styles.hr} />
        <h1 className="font-serif" style={styles.txt.header}>
          Ucapkan Sesuatu
        </h1>
        <hr style={styles.hr} />
        <br />
        <p style={styles.txt}>Berikan Ucapan & Doa Restu</p>
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
            helperText={
              formTouched ? `${nama.length}/${MAX_LENGTH}` : ''
            }
            margin="normal"
            required
            variant="filled"
            sx={{
              '& .MuiFormHelperText-root': {
                color: theme.palette.light.main,
              },
            }}
            InputProps={{
              maxLength: MAX_LENGTH,
              disableUnderline: true,
              style: {
                borderRadius: 20,
                fontSize: `${70 + windowWidth * 0.04}%`,
                backgroundColor: theme.palette.light.main,
                boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
              },
            }}
            FormHelperTextProps={{
              classes: {
                root: {
                  color: theme.palette.light.main,
                },
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: `${70 + windowWidth * 0.04}%`,
                color: 'primary.main',
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
              maxLength: MAX_LENGTH,
              disableUnderline: true,
              style: {
                borderRadius: 20,
                fontSize: `${70 + windowWidth * 0.04}%`,
                backgroundColor: theme.palette.light.main,
                boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: `${70 + windowWidth * 0.04}%`,
                color: 'primary.main',
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
              backgroundColor: theme.palette.light.main,
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
    </section>
  );
});

export default Ucapan;
