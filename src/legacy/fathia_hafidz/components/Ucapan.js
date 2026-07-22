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

import backgroundImage from '../assets/image/bgUcapan.png';
import ornament1 from '../assets/image/divider1.png';
import ornament2 from '../assets/image/divider2.png';

const Ucapan = forwardRef((props, sectionRef) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );

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

  const beUrl = 'https://wedding-inv-be.vercel.app/fathia_hafidz';
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

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return (
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    });
  }

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      padding: '10vh 12% 5vh 12%',
      color: theme.palette.primary.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center center',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
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
        color: theme.palette.primary.main,
        alignItems: 'center',
        fontWeight: 300,
      },
    },
    btn: {
      submit: {
        borderRadius: 30,
        padding: '8px 15px',
        fontSize: '0.75rem',
        justifySelf: 'center',
        marginTop: '15px',
        width: '100%',
        backgroundColor: 'primary.main',
        color: 'white',
        '& .MuiCircularProgress-root': {
          color: 'white',
        },
        '&:hover': {
          backgroundColor: '#875B57',
          boxShadow: 'none',
        },
      },
      cancel: {
        borderRadius: 30,
        borderColor: 'primary.main',
        padding: '8px 15px',
        fontSize: '0.75rem',
        borderWidth: '2px',
        justifySelf: 'center',
        marginTop: '15px',
        width: '100%',
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'white',
        },
        '&:active': {
          borderColor: 'primary.main',
        },
      },
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
    <section ref={sectionRef} style={styles.section}>
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={ornament1}
        alt="flower1"
        style={{
          position: 'absolute',
          alignSelf: 'left',
          marginTop: '-20vh',
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
          marginTop: '-20vh',
          width: `${windowHeight > windowWidth ? '35%' : '20vh'}`,
          right: 0,
        }}
      />
      <Box sx={styles.box}>
        <Typography
          variant="h4"
          className="font-estetik"
          sx={{textAlign: 'center', paddingTop: '15px'}}
        >
          Berikan Ucapan dan Doa Restu
        </Typography>
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
                backgroundColor: '#F3D7D7',
              },
            }}
            InputLabelProps={{
              sx: {
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
              disableUnderline: true,
              style: {
                borderRadius: 20,
                backgroundColor: '#F3D7D7',
              },
            }}
            InputLabelProps={{
              sx: {
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
              backgroundColor: '#F3D7D7',
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
              sx={styles.btn.submit}
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
                sx={styles.btn.cancel}
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
                                <Typography variant="body1">
                                  <b>
                                    {toTitleCase(comment.name)} -{' '}
                                    {comment.status === 'true'
                                      ? 'Hadir ᅟᅟᅟᅟ'
                                      : 'Tidak Hadir'}
                                  </b>
                                </Typography>
                                <Typography component="body1">
                                  {comment.comment}
                                </Typography>
                                <Typography
                                  sx={{marginTop: '1.2rem'}}
                                  variant="body2"
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
